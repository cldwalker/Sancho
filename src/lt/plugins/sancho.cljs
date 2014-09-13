(ns lt.plugins.sancho
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [clojure.string :as s]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clojure]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.sancho.util :as util]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [defui behavior]]))

;; Url helpers
;; ===========

(defn ->crossclj-url [ns var]
  (str "http://crossclj.info/fun/" ns "/" var ".html"))

;; from https://github.com/clojure-grimoire/grimoire/blob/cf69630e38f4f9c2c94351d1e8ef1547b61d9567/resources/API.md
(defn munge-grimoire-var [s]
  (-> s
      (s/replace "?" "_QMARK_")
      (s/replace "." "_DOT_")
      (s/replace "/" "_SLASH_")
      (s/replace #"^_*" "")
      (s/replace #"_*$" "")))

(defn ->grimoire-url [ns var]
  ;; Latest supported namespaces: https://github.com/clojure-grimoire/grimoire/blob/master/namespaces
  (when-not (.startsWith ns "clojure")
    (throw (ex-info (str ns " is not a valid namespace for grimoire") {})))

  ;; Hardcode latest version - not worth calculating version and
  ;; determing if grimoire supports it
  (str "http://grimoire.arrdem.com/1.6.0/" ns "/" (munge-grimoire-var var)))

(def ->grimoire-examples-url (comp #(str % "/examples") ->grimoire-url))

;; Eval
;; ====

(behavior ::clj-result.callback
          :desc "Sancho: Process clojure-evaled code of result-type :callback. Calls
                 callback defined in [:meta :callback]."
          :triggers #{:editor.eval.clj.result.callback}
          :reaction (fn [editor result]
                      (if-let [callback (some->> (get-in result [:meta :callback])
                                                 (util/resolve-fn lt.plugins.sancho))]
                        (callback (-> result :results first) (:meta result))
                        (notifos/set-msg! (str "No callback provided for clj result: " result) {:class "error"}))))

(defn eval-code
  "Evals code and returns result with given callback which is a keyword for callback fn.
  Callbacks can't be a fn since we're sending this over the wire."
  [editor code meta-init]
  (let [info (assoc (:info @editor)
               :code code
               :meta (assoc meta-init :result-type :callback))]
    (object/raise clojure/clj-lang :eval! {:origin editor :info info})))

;; Commands
;; ========

(defn for-resolved-var
  "Performs given action on a stringified, resolved var e.g. #'clojure.core/cond"
  [action {:keys [result]} info]
  (try
    (let [[_ ns var] (re-find #"^#'(\S+)/(\S+)$" result)]
      (if (and ns var)
        (action ns var)
        (notifos/set-msg! (str "Invalid clojure var: " (:symbol info)) {:class "error"})))
    (catch js/Error e
      (notifos/set-msg! (str e) {:class "error"}))))

(def open-crossclj-url (partial for-resolved-var (comp util/tab-open-url ->crossclj-url)))
(def open-grimoire-url (partial for-resolved-var (comp util/tab-open-url ->grimoire-url)))

(defn resolve-current-word-and-call [kw]
  (let [ed (pool/last-active)
        sym (util/current-word ed)]
    (eval-code ed
               (str "(resolve '" sym ")")
               {:callback kw :symbol sym})))

(cmd/command {:command :sancho.open-crossclj-url
              :desc "Sancho: Open crossclj page for current symbol"
              :exec (partial resolve-current-word-and-call :open-crossclj-url)})

(cmd/command {:command :sancho.open-grimoire-url
              :desc "Sancho: Open grimoire page for current symbol"
              :exec (partial resolve-current-word-and-call :open-grimoire-url)})

(defn fetch-and-open-grimoire-examples* [{:keys [ns var url]}]
  (notifos/working)
  (util/GET url (fn [body]
                  (let [path (util/tempfile (str ns "-" var) ".clj")]
                    (files/save path body)
                    (cmd/exec! :open-path path))
                  (notifos/done-working))))

(def fetch-and-open-grimoire-examples
  (partial for-resolved-var
           (fn [ns var]
             (fetch-and-open-grimoire-examples*
              {:ns ns :var var :url (->grimoire-examples-url ns var)}))))

(cmd/command {:command :sancho.open-grimoire-examples
              :desc "Sancho: Open grimoire examples locally for current symbol"
              :exec (partial resolve-current-word-and-call :fetch-and-open-grimoire-examples)})

(comment
  (object/raise editor :editor.eval.clj.result.callback "OK?")
  (-> @editor :client :default deref)
  (def editor (first (pool/containing-path "core.clj")))
  )

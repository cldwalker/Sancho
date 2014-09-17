(ns lt.plugins.sancho
  (:require [clojure.string :as s]
            [lt.objs.editor.pool :as pool]
            [lt.objs.files :as files]
            [lt.objs.notifos :as notifos]
            [lt.plugins.sancho.util :as util]
            [lt.plugins.sancho.eval :as eval]
            [lt.objs.command :as cmd]))

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

;; Commands
;; ========

(defn for-resolved-var
  "Performs given action on a stringified, resolved var e.g. #'clojure.core/cond"
  [action info {:keys [result]}]
  (try
    (let [[_ ns var] (re-find #"^(\S+)/(\S+)$" result)]
      (if (and ns var)
        (action ns var)
        (do (println "Failed eval result:" result)
          (notifos/set-msg! (str "Invalid clojure var: " (:symbol info)) {:class "error"}))))
    (catch js/Error e
      (notifos/set-msg! (str e) {:class "error"}))))

(defmethod eval/handle :open-crossclj-url [info result]
  (for-resolved-var (comp util/tab-open-url ->crossclj-url) info result))

(defn resolve-current-word-and-call [kw]
  (let [ed (pool/last-active)
        sym (util/current-word ed)]
    (eval/eval-code ed
               (str "(identity `" sym ")")
               {:type kw :symbol sym})))

(cmd/command {:command :sancho.open-crossclj-url
              :desc "Sancho: Open crossclj usages page for current symbol"
              :exec (partial resolve-current-word-and-call :open-crossclj-url)})

(defmethod eval/handle :open-grimoire-url [info result]
  (for-resolved-var (comp util/tab-open-url ->grimoire-url) info result))

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

(defmethod eval/handle :fetch-and-open-grimoire-examples [info result]
  (for-resolved-var
           (fn [ns var]
             (fetch-and-open-grimoire-examples*
              {:ns ns :var var :url (->grimoire-examples-url ns var)}))
   info result))

(cmd/command {:command :sancho.open-grimoire-examples
              :desc "Sancho: Open grimoire examples locally for current symbol"
              :exec (partial resolve-current-word-and-call :fetch-and-open-grimoire-examples)})

(ns lt.plugins.inc-clojure
  (:require [lt.object :as object]
            [lt.objs.editor :as ed]
            [clojure.string :as s]
            [lt.objs.editor.pool :as pool]
            [lt.plugins.clojure :as clojure]
            [lt.objs.notifos :as notifos]
            [lt.objs.command :as cmd])
  (:require-macros [lt.macros :refer [behavior]]))

;; Util
;; ====
(defn current-word [ed]
  (:string (clojure/find-symbol-at-cursor ed)))

(defn resolve-fn
  "Only works when in non-advanced mode e.g. no munging."
  [ns-obj f]
  (aget ns-obj
        (s/replace (name f) "-" "_")))

(defn exec-commands
  "Execs a vec of commands - same format as a user.keymap vec"
  [commands]
  (doseq [c commands]
      (if (coll? c)
        (apply cmd/exec! c)
        (cmd/exec! c))))

(defn tab-open-url [url]
  (exec-commands [:add-browser-tab
                  :browser.url-bar.focus
                  [:browser.url-bar.navigate! url]
                  :browser.focus-content]))

;; Open pages
;; ==========
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
  ;; Hardcode latest version - not worth calculating version and
  ;; determing if grimoire supports it
  (str "http://grimoire.arrdem.com/1.6.0/" ns "/" (munge-grimoire-var var)))

(defn open-resolved-var [->var-url {:keys [result]}]
  (let [[_ ns var] (re-find #"^#'(\S+)/(\S+)$" result)]
    (if (and ns var)
      (tab-open-url (->var-url ns var))
      (notifos/set-msg! (str "Invalid clojure var: " result) {:class "error"}))))

(def open-crossclj (partial open-resolved-var ->crossclj-url))
(def open-grimoire (partial open-resolved-var ->grimoire-url))

(behavior ::clj-result.callback
          :triggers #{:editor.eval.clj.result.callback}
          :reaction (fn [editor result]
                      (if-let [callback (some->> (get-in result [:meta :callback])
                                                 (resolve-fn lt.plugins.inc-clojure))]
                        (callback (-> result :results first))
                        (notifos/set-msg! (str "No callback provided for clj result: " result) {:class "error"}))))

(defn eval-code
  "Evals code and returns result with given callback which is a keyword for callback fn"
  [editor code callback-kw]
  (let [info (assoc (:info @editor)
               :code code
               :meta {:callback callback-kw
                      :result-type :callback})]
    (object/raise clojure/clj-lang :eval! {:origin editor :info info})))

(cmd/command {:command :inc-clojure.open-crossclj-url
              :desc "IncClojure: Open crossclj page for current symbol"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (eval-code ed
                                   (str "(resolve '" (current-word ed) ")")
                                   :open-crossclj)))})

(cmd/command {:command :inc-clojure.open-grimoire-url
              :desc "IncClojure: Open grimoire page for current symbol"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (eval-code ed
                                   (str "(resolve '" (current-word ed) ")")
                                   :open-grimoire)))})

(comment

  (object/raise editor :editor.eval.clj.result.callback "OK?")
  (-> @editor :client :default deref)
  (def editor (first (pool/containing-path "core.clj")))
  )

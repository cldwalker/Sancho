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

(defn open-crossclj [{:keys [result]}]
  (let [[_ ns var] (re-find #"^#'(\S+)/(\S+)$" result)]
    (if (and ns var)
      (tab-open-url (->crossclj-url ns var))
      (notifos/set-msg! (str "Invalid clojure var: " result) {:class "error"}))))

(behavior ::clj-result.callback
          :triggers #{:editor.eval.clj.result.callback}
          :reaction (fn [editor result]
                      ;; (prn "RESULTING" result)
                      (if-let [callback (some->> (get-in result [:meta :callback])
                                                 (resolve-fn lt.plugins.inc-clojure))]
                        (callback (-> result :results first))
                        (notifos/set-msg! (str "No callback provided for clj result: " result) {:class "error"}))))

(defn eval-code
  "Evals code and returns result with given callback which is a keyword for callback fn"
  [editor code callback-kw]
  (let [info (assoc (:info @editor)
               :code code
               ;; :print-length (object/raise-reduce editor :clojure.print-length+ nil)
               :meta {:callback callback-kw
                      :result-type :callback})]
    (object/raise clojure/clj-lang :eval! {:origin editor :info info})))

(cmd/command {:command :inc-clojure.open-crossclj-url
              :desc "IncClojure: Opens crossclj page for current symbol"
              :exec (fn []
                      (let [ed (pool/last-active)]
                        (eval-code ed
                                   (str "(resolve '" (current-word ed) ")")
                                   :open-crossclj)))})

(comment

  (object/raise editor :editor.eval.clj.result.callback "OK?")
  (-> @editor :client :default deref)
  (def editor (first (pool/containing-path "core.clj")))
  )

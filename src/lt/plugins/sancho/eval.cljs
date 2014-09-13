(ns lt.plugins.sancho.eval
  (:require [lt.object :as object]
            [lt.objs.notifos :as notifos]
            [lt.plugins.clojure :as clojure])
  (:require-macros [lt.macros :refer [behavior]]))

(defmulti handle (fn [info _] (:type info)))

(defmethod handle :default [info result]
  (notifos/set-msg! (str "No eval callback defined for " (:type info)) {:class "error"}))

(behavior ::clj-result.callback
          :desc "Sancho: Process clojure-evaled code of result-type :callback. Dispatches
                 to handle based on [:meta :type]"
          :triggers #{:editor.eval.clj.result.callback}
          :reaction (fn [editor result]
                      (handle (:meta result) (-> result :results first))))

(defn eval-code
  "Evals code and returns result dispatching to handle fn, based
  on [:meta :type] passed to :eval!."
  [editor code meta-init]
  (let [info (assoc (:info @editor)
               :code code
               :meta (assoc meta-init :result-type :callback))]
    (object/raise clojure/clj-lang :eval! {:origin editor :info info})))

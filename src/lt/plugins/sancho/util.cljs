(ns lt.plugins.sancho.util
  (:require [clojure.string :as s]
            [lt.plugins.clojure :as clojure]
            [lt.objs.files :as files]
            [lt.objs.command :as cmd]))

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

(defn tempfile [seed suffix]
  (let [dir (.tmpdir (js/require "os"))]
    (files/join dir (str seed "-" (js/Date.now) suffix))))

(defn GET [url cb]
  (let [req (.get (js/require "http") url
                  (fn [resp]
                    (.on resp "data" cb)))]
    (.on req "error" (fn [err]
                       (println "Request" url "failed with:" (.-message err))))))

(ns lt.plugins.sancho.util
  (:require [clojure.string :as s]
            [lt.plugins.clojure :as clojure]
            [lt.objs.files :as files]
            [goog.string]
            [lt.objs.command :as cmd]))

(defn current-word [ed]
  (:string (clojure/find-symbol-at-cursor ed)))

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
  (let [body (goog.string.StringBuffer. "")
        req (.get (js/require "http") url
                  (fn [resp]
                    (.on resp "data" (fn [data]
                                       (.append body data)))
                    (.on resp "end" (fn []
                                      (cb (.toString body))))))]
    (.on req "error" (fn [err]
                       (println "Request" url "failed with:" (.-message err))))) )

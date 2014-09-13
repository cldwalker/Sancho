## Sancho

> "Destiny guides our fortunes more favorably than we could have expected. Look there, Sancho Panza, my friend, and see those thirty or so wild giants, with whom I intend to do battle and kill each and all of them, so with their stolen booty we can begin to enrich ourselves. This is nobel, righteous warfare, for it is wonderfully useful to God to have such an evil race wiped from the face of the earth."

> "What giants?" Asked Sancho Panza.

> "The ones you can see over there," answered his master, "with the huge arms, some of which are very nearly two leagues long."

> "Now look, your grace," said Sancho, "what you see over there aren't giants, but windmills, and what seems to be arms are just their sails, that go around in the wind and turn the millstone."

> "Obviously," replied Don Quixote, "you don't know much about adventures.”

> * from Don Quixote by Miguel de Cervantes Saavedra

## Description

Sancho is your trusty Clojure sidekick for LightTable. Building on top of the [Clojure plugin](https://github.com/LightTable/Clojure), it provides commands to see a current var's usages (via [crossclj](http://crossclj.info/)) or examples (via [grimoire](http://grimoire.arrdem.com/).) More to come.

## Install

Install this plugin with LT's plugin manager or clone this project to your LT
plugins directory.

## Commands

Sancho's commands can be found in the command bar with the prefix `Sancho: `.

### Documentation

* `:sancho.open-grimoire-examples`: Open grimoire examples for current symbol in another tab.
* `:sancho.open-grimoire-url`: Open grimoire url for current symbol.
* `:sancho.open-crossclj-url`: Open crossclj examples for current symbol.


## Bugs/Issues

Please report them [on github](http://github.com/cldwalker/Sancho/issues).

## Contributions

Goal is to build a set of useful commands that are missing from the Clojure plugin. Feedback, ideas and contributions welcome.

[See here](http://tagaholic.me/contributing.html) for contributing guidelines.

## TODO
* Add a command to view current symbol's source using underline widgets that docs use.

## License
See LICENSE.txt

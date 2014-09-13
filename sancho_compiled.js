if(!lt.util.load.provided_QMARK_('lt.plugins.sancho')) {
goog.provide('lt.plugins.sancho');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.editor');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.editor');
lt.plugins.sancho.current_word = (function current_word(ed){return new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,ed));
});
/**
* Only works when in non-advanced mode e.g. no munging.
*/
lt.plugins.sancho.resolve_fn = (function resolve_fn(ns_obj,f){return (ns_obj[clojure.string.replace.call(null,cljs.core.name.call(null,f),"-","_")]);
});
/**
* Execs a vec of commands - same format as a user.keymap vec
*/
lt.plugins.sancho.exec_commands = (function exec_commands(commands){var seq__9267 = cljs.core.seq.call(null,commands);var chunk__9268 = null;var count__9269 = 0;var i__9270 = 0;while(true){
if((i__9270 < count__9269))
{var c = cljs.core._nth.call(null,chunk__9268,i__9270);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__9284 = seq__9267;
var G__9285 = chunk__9268;
var G__9286 = count__9269;
var G__9287 = (i__9270 + 1);
seq__9267 = G__9284;
chunk__9268 = G__9285;
count__9269 = G__9286;
i__9270 = G__9287;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__9267);if(temp__4092__auto__)
{var seq__9267__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__9267__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__9267__$1);{
var G__9288 = cljs.core.chunk_rest.call(null,seq__9267__$1);
var G__9289 = c__7112__auto__;
var G__9290 = cljs.core.count.call(null,c__7112__auto__);
var G__9291 = 0;
seq__9267 = G__9288;
chunk__9268 = G__9289;
count__9269 = G__9290;
i__9270 = G__9291;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__9267__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__9292 = cljs.core.next.call(null,seq__9267__$1);
var G__9293 = null;
var G__9294 = 0;
var G__9295 = 0;
seq__9267 = G__9292;
chunk__9268 = G__9293;
count__9269 = G__9294;
i__9270 = G__9295;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.sancho.tab_open_url = (function tab_open_url(url){return lt.plugins.sancho.exec_commands.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),url], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null));
});
lt.plugins.sancho.tempfile = (function tempfile(seed,suffix){var dir = require("os").tmpdir();return lt.objs.files.join.call(null,dir,[cljs.core.str(seed),cljs.core.str("-"),cljs.core.str(Date.now()),cljs.core.str(suffix)].join(''));
});
lt.plugins.sancho.__GT_crossclj_url = (function __GT_crossclj_url(ns,var$){return [cljs.core.str("http://crossclj.info/fun/"),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(var$),cljs.core.str(".html")].join('');
});
lt.plugins.sancho.munge_grimoire_var = (function munge_grimoire_var(s){return clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,s,"?","_QMARK_"),".","_DOT_"),"/","_SLASH_"),/^_*/,""),/_*$/,"");
});
lt.plugins.sancho.__GT_grimoire_url = (function __GT_grimoire_url(ns,var$){if(cljs.core.truth_(ns.startsWith("clojure")))
{} else
{throw cljs.core.ex_info.call(null,[cljs.core.str(ns),cljs.core.str(" is not a valid namespace for grimoire")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
return [cljs.core.str("http://grimoire.arrdem.com/1.6.0/"),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(lt.plugins.sancho.munge_grimoire_var.call(null,var$))].join('');
});
/**
* Performs given action on a stringified, resolved var e.g. #'clojure.core/cond
*/
lt.plugins.sancho.for_resolved_var = (function for_resolved_var(action,p__9271,info){var map__9275 = p__9271;var map__9275__$1 = ((cljs.core.seq_QMARK_.call(null,map__9275))?cljs.core.apply.call(null,cljs.core.hash_map,map__9275):map__9275);var result = cljs.core.get.call(null,map__9275__$1,new cljs.core.Keyword(null,"result","result",4374444943));try{var vec__9277 = cljs.core.re_find.call(null,/^#'(\S+)\/(\S+)$/,result);var _ = cljs.core.nth.call(null,vec__9277,0,null);var ns = cljs.core.nth.call(null,vec__9277,1,null);var var$ = cljs.core.nth.call(null,vec__9277,2,null);if(cljs.core.truth_((function (){var and__6352__auto__ = ns;if(cljs.core.truth_(and__6352__auto__))
{return var$;
} else
{return and__6352__auto__;
}
})()))
{return action.call(null,ns,var$);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Invalid clojure var: "),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
}catch (e9276){if((e9276 instanceof Error))
{var e = e9276;return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str(e)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9276;
} else
{return null;
}
}
}});
lt.plugins.sancho.open_crossclj_url = cljs.core.partial.call(null,lt.plugins.sancho.for_resolved_var,cljs.core.comp.call(null,lt.plugins.sancho.tab_open_url,lt.plugins.sancho.__GT_crossclj_url));
lt.plugins.sancho.open_grimoire_url = cljs.core.partial.call(null,lt.plugins.sancho.for_resolved_var,cljs.core.comp.call(null,lt.plugins.sancho.tab_open_url,lt.plugins.sancho.__GT_grimoire_url));
lt.plugins.sancho.__BEH__clj_result__DOT__callback = (function __BEH__clj_result__DOT__callback(editor,result){var temp__4090__auto__ = (function (){var G__9279 = cljs.core.get_in.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta","meta",1017252215),new cljs.core.Keyword(null,"callback","callback",841683895)], null));var G__9279__$1 = (((G__9279 == null))?null:lt.plugins.sancho.resolve_fn.call(null,lt.plugins.sancho,G__9279));return G__9279__$1;
})();if(cljs.core.truth_(temp__4090__auto__))
{var callback = temp__4090__auto__;return callback.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result));
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("No callback provided for clj result: "),cljs.core.str(result)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.sancho","clj-result.callback","lt.plugins.sancho/clj-result.callback",3512290101),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.sancho.__BEH__clj_result__DOT__callback,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.callback","editor.eval.clj.result.callback",4556723370),null], null), null));
/**
* Evals code and returns result with given callback which is a keyword for callback fn.
* Callbacks can't be a fn since we're sending this over the wire.
*/
lt.plugins.sancho.eval_code = (function eval_code(editor,code,meta_init){var info = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.assoc.call(null,meta_init,new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"callback","callback",841683895)));return lt.object.raise.call(null,lt.plugins.clojure.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
lt.plugins.sancho.resolve_current_word_and_call = (function resolve_current_word_and_call(kw){var ed = lt.objs.editor.pool.last_active.call(null);var sym = lt.plugins.sancho.current_word.call(null,ed);return lt.plugins.sancho.eval_code.call(null,ed,[cljs.core.str("(resolve '"),cljs.core.str(sym),cljs.core.str(")")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"callback","callback",841683895),kw,new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-crossclj-url","sancho.open-crossclj-url",2521192564),new cljs.core.Keyword(null,"desc","desc",1016984067),"IncClojure: Open crossclj page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-crossclj-url","open-crossclj-url",4283751576))], null));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-url","sancho.open-grimoire-url",697367407),new cljs.core.Keyword(null,"desc","desc",1016984067),"IncClojure: Open grimoire page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-grimoire-url","open-grimoire-url",2459926419))], null));
lt.plugins.sancho.GET = (function GET(url,cb){var req = require("http").get(url,(function (resp){return resp.on("data",cb);
}));return req.on("error",((function (req){
return (function (err){return cljs.core.println.call(null,"Request",url,"failed with:",err.message);
});})(req))
);
});
lt.plugins.sancho.__GT_grimoire_examples_url = cljs.core.comp.call(null,(function (p1__9280_SHARP_){return [cljs.core.str(p1__9280_SHARP_),cljs.core.str("/examples")].join('');
}),lt.plugins.sancho.__GT_grimoire_url);
lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_ = (function fetch_and_open_grimoire_examples_STAR_(p__9281){var map__9283 = p__9281;var map__9283__$1 = ((cljs.core.seq_QMARK_.call(null,map__9283))?cljs.core.apply.call(null,cljs.core.hash_map,map__9283):map__9283);var url = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"url","url",1014020321));var var$ = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"var","var",1014020761));var ns = cljs.core.get.call(null,map__9283__$1,new cljs.core.Keyword(null,"ns","ns",1013907767));lt.objs.notifos.working.call(null);
return lt.plugins.sancho.GET.call(null,url,((function (map__9283,map__9283__$1,url,var$,ns){
return (function (body){var path_9296 = lt.plugins.sancho.tempfile.call(null,[cljs.core.str(ns),cljs.core.str("-"),cljs.core.str(var$)].join(''),".clj");lt.objs.files.save.call(null,path_9296,body);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),path_9296);
return lt.objs.notifos.done_working.call(null);
});})(map__9283,map__9283__$1,url,var$,ns))
);
});
lt.plugins.sancho.fetch_and_open_grimoire_examples = cljs.core.partial.call(null,lt.plugins.sancho.for_resolved_var,(function (ns,var$){return lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",1013907767),ns,new cljs.core.Keyword(null,"var","var",1014020761),var$,new cljs.core.Keyword(null,"url","url",1014020321),lt.plugins.sancho.__GT_grimoire_examples_url.call(null,ns,var$)], null));
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-examples","sancho.open-grimoire-examples",2297771501),new cljs.core.Keyword(null,"desc","desc",1016984067),"IncClojure: Open grimoire examples locally for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"fetch-and-open-grimoire-examples","fetch-and-open-grimoire-examples",3298001906))], null));
}

//# sourceMappingURL=sancho_compiled.js.map
if(!lt.util.load.provided_QMARK_('lt.plugins.sancho.eval')) {
goog.provide('lt.plugins.sancho.eval');
goog.require('cljs.core');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.sancho.eval.handle = (function (){var method_table__5742__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__5743__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__5744__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__5745__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__5746__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",((function (method_table__5742__auto__,prefer_table__5743__auto__,method_cache__5744__auto__,cached_hierarchy__5745__auto__,hierarchy__5746__auto__){
return (function (info,_){return new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(info);
});})(method_table__5742__auto__,prefer_table__5743__auto__,method_cache__5744__auto__,cached_hierarchy__5745__auto__,hierarchy__5746__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__5746__auto__,method_table__5742__auto__,prefer_table__5743__auto__,method_cache__5744__auto__,cached_hierarchy__5745__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (info,result){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("No eval callback defined for "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}));
lt.plugins.sancho.eval.__BEH__clj_result__DOT__callback = (function __BEH__clj_result__DOT__callback(editor,result){return lt.plugins.sancho.eval.handle.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result),cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(result)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.sancho.eval","clj-result.callback","lt.plugins.sancho.eval/clj-result.callback",1362898019),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Process clojure-evaled code of result-type :callback. Dispatches\n                 to handle based on [:meta :type]",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.callback","editor.eval.clj.result.callback",4556723370),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.sancho.eval.__BEH__clj_result__DOT__callback);
lt.plugins.sancho.eval.__BEH__cljs_result__DOT__callback = (function __BEH__cljs_result__DOT__callback(editor,result){return lt.plugins.sancho.eval.handle.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result),result);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.sancho.eval","cljs-result.callback","lt.plugins.sancho.eval/cljs-result.callback",1923386548),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Process clojurescript-evaled code of result-type :callback. Dispatches\n                 to handle based on [:meta :type]",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.cljs.result.callback","editor.eval.cljs.result.callback",1025344701),null], null), null),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.sancho.eval.__BEH__cljs_result__DOT__callback);
/**
* Evals code and returns result dispatching to handle fn, based
* on [:meta :type] passed to :eval!.
*/
lt.plugins.sancho.eval.eval_code = (function eval_code(editor,code,meta_init){var info = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,editor)),new cljs.core.Keyword(null,"code","code",1016963423),code,new cljs.core.Keyword(null,"meta","meta",1017252215),cljs.core.assoc.call(null,meta_init,new cljs.core.Keyword(null,"result-type","result-type",4725630556),new cljs.core.Keyword(null,"callback","callback",841683895)));return lt.object.raise.call(null,lt.plugins.clojure.clj_lang,new cljs.core.Keyword(null,"eval!","eval!",1110791799),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"origin","origin",4300251800),editor,new cljs.core.Keyword(null,"info","info",1017141280),info], null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.sancho.util')) {
goog.provide('lt.plugins.sancho.util');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('goog.string');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('clojure.string');
goog.require('clojure.string');
lt.plugins.sancho.util.current_word = (function current_word(ed){return new cljs.core.Keyword(null,"string","string",4416885635).cljs$core$IFn$_invoke$arity$1(lt.plugins.clojure.find_symbol_at_cursor.call(null,ed));
});
/**
* Execs a vec of commands - same format as a user.keymap vec
*/
lt.plugins.sancho.util.exec_commands = (function exec_commands(commands){var seq__6551 = cljs.core.seq.call(null,commands);var chunk__6552 = null;var count__6553 = 0;var i__6554 = 0;while(true){
if((i__6554 < count__6553))
{var c = cljs.core._nth.call(null,chunk__6552,i__6554);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__6555 = seq__6551;
var G__6556 = chunk__6552;
var G__6557 = count__6553;
var G__6558 = (i__6554 + 1);
seq__6551 = G__6555;
chunk__6552 = G__6556;
count__6553 = G__6557;
i__6554 = G__6558;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6551);if(temp__4126__auto__)
{var seq__6551__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6551__$1))
{var c__5632__auto__ = cljs.core.chunk_first.call(null,seq__6551__$1);{
var G__6559 = cljs.core.chunk_rest.call(null,seq__6551__$1);
var G__6560 = c__5632__auto__;
var G__6561 = cljs.core.count.call(null,c__5632__auto__);
var G__6562 = 0;
seq__6551 = G__6559;
chunk__6552 = G__6560;
count__6553 = G__6561;
i__6554 = G__6562;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__6551__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__6563 = cljs.core.next.call(null,seq__6551__$1);
var G__6564 = null;
var G__6565 = 0;
var G__6566 = 0;
seq__6551 = G__6563;
chunk__6552 = G__6564;
count__6553 = G__6565;
i__6554 = G__6566;
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
lt.plugins.sancho.util.tab_open_url = (function tab_open_url(url){return lt.plugins.sancho.util.exec_commands.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-browser-tab","add-browser-tab",3663273910),new cljs.core.Keyword(null,"browser.url-bar.focus","browser.url-bar.focus",3353788299),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"browser.url-bar.navigate!","browser.url-bar.navigate!",1014303491),url], null),new cljs.core.Keyword(null,"browser.focus-content","browser.focus-content",1148241840)], null));
});
lt.plugins.sancho.util.tempfile = (function tempfile(seed,suffix){var dir = require("os").tmpdir();return lt.objs.files.join.call(null,dir,[cljs.core.str(seed),cljs.core.str("-"),cljs.core.str(Date.now()),cljs.core.str(suffix)].join(''));
});
lt.plugins.sancho.util.GET = (function GET(url,cb){var body = (new goog.string.StringBuffer(""));var req = require("http").get(url,((function (body){
return (function (resp){resp.on("data",((function (body){
return (function (data){return body.append(data);
});})(body))
);
return resp.on("end",((function (body){
return (function (){return cb.call(null,body.toString());
});})(body))
);
});})(body))
);return req.on("error",((function (body,req){
return (function (err){return cljs.core.println.call(null,"Request",url,"failed with:",err.message);
});})(body,req))
);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.sancho')) {
goog.provide('lt.plugins.sancho');
goog.require('cljs.core');
goog.require('lt.objs.command');
goog.require('lt.objs.notifos');
goog.require('lt.plugins.sancho.util');
goog.require('lt.plugins.sancho.eval');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.files');
goog.require('lt.plugins.sancho.eval');
goog.require('lt.plugins.sancho.util');
goog.require('lt.objs.command');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('lt.objs.notifos');
goog.require('lt.objs.files');
lt.plugins.sancho.__GT_crossclj_url = (function __GT_crossclj_url(ns,var$){return [cljs.core.str("http://crossclj.info/fun/"),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(var$),cljs.core.str(".html")].join('');
});
lt.plugins.sancho.munge_grimoire_var = (function munge_grimoire_var(s){return clojure.string.replace.call(null,encodeURIComponent([cljs.core.str(s)].join('')).replace("+","%20"),/\./,"%2E");
});
lt.plugins.sancho.__GT_grimoire_url = (function __GT_grimoire_url(ns,var$){if(cljs.core.truth_(ns.startsWith("clojure")))
{} else
{throw cljs.core.ex_info.call(null,[cljs.core.str(ns),cljs.core.str(" is not a valid namespace for grimoire")].join(''),cljs.core.PersistentArrayMap.EMPTY);
}
return [cljs.core.str("http://conj.io/store/v1/org.clojure/clojure/1.7.0/clj/"),cljs.core.str(ns),cljs.core.str("/"),cljs.core.str(lt.plugins.sancho.munge_grimoire_var.call(null,var$))].join('');
});
lt.plugins.sancho.__GT_grimoire_examples_url = cljs.core.comp.call(null,(function (p1__6515_SHARP_){return [cljs.core.str(p1__6515_SHARP_),cljs.core.str("?type=text/plain")].join('');
}),lt.plugins.sancho.__GT_grimoire_url);
/**
* Performs given action on a stringified, resolved var e.g. #'clojure.core/cond
*/
lt.plugins.sancho.for_resolved_var = (function for_resolved_var(action,info,p__6516){var map__6520 = p__6516;var map__6520__$1 = ((cljs.core.seq_QMARK_.call(null,map__6520))?cljs.core.apply.call(null,cljs.core.hash_map,map__6520):map__6520);var result = cljs.core.get.call(null,map__6520__$1,new cljs.core.Keyword(null,"result","result",4374444943));try{var vec__6522 = cljs.core.re_find.call(null,/^(\S+)\/(\S+)$/,result);var _ = cljs.core.nth.call(null,vec__6522,0,null);var ns = cljs.core.nth.call(null,vec__6522,1,null);var var$ = cljs.core.nth.call(null,vec__6522,2,null);if(cljs.core.truth_((function (){var and__4872__auto__ = ns;if(cljs.core.truth_(and__4872__auto__))
{return var$;
} else
{return and__4872__auto__;
}
})()))
{return action.call(null,ns,var$);
} else
{cljs.core.println.call(null,"Failed eval result:",result);
return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Invalid clojure var: "),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
}catch (e6521){if((e6521 instanceof Error))
{var e = e6521;return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str(e)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e6521;
} else
{return null;
}
}
}});
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"open-crossclj-url","open-crossclj-url",4283751576),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,cljs.core.comp.call(null,lt.plugins.sancho.util.tab_open_url,lt.plugins.sancho.__GT_crossclj_url),info,result);
}));
lt.plugins.sancho.resolve_current_word_and_call = (function resolve_current_word_and_call(kw){var ed = lt.objs.editor.pool.last_active.call(null);var sym = lt.plugins.sancho.util.current_word.call(null,ed);return lt.plugins.sancho.eval.eval_code.call(null,ed,[cljs.core.str("(identity `"),cljs.core.str(sym),cljs.core.str(")")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),kw,new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-crossclj-url","sancho.open-crossclj-url",2521192564),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open crossclj usages page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-crossclj-url","open-crossclj-url",4283751576))], null));
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"open-grimoire-url","open-grimoire-url",2459926419),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,cljs.core.comp.call(null,lt.plugins.sancho.util.tab_open_url,lt.plugins.sancho.__GT_grimoire_url),info,result);
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-url","sancho.open-grimoire-url",697367407),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open grimoire page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-grimoire-url","open-grimoire-url",2459926419))], null));
lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_ = (function fetch_and_open_grimoire_examples_STAR_(p__6523){var map__6525 = p__6523;var map__6525__$1 = ((cljs.core.seq_QMARK_.call(null,map__6525))?cljs.core.apply.call(null,cljs.core.hash_map,map__6525):map__6525);var url = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword(null,"url","url",1014020321));var var$ = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword(null,"var","var",1014020761));var ns = cljs.core.get.call(null,map__6525__$1,new cljs.core.Keyword(null,"ns","ns",1013907767));lt.objs.notifos.working.call(null);
return lt.plugins.sancho.util.GET.call(null,url,((function (map__6525,map__6525__$1,url,var$,ns){
return (function (body){var path_6526 = lt.plugins.sancho.util.tempfile.call(null,[cljs.core.str(ns),cljs.core.str("-"),cljs.core.str(var$)].join(''),".clj");lt.objs.files.save.call(null,path_6526,body);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),path_6526);
return lt.objs.notifos.done_working.call(null);
});})(map__6525,map__6525__$1,url,var$,ns))
);
});
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"fetch-and-open-grimoire-examples","fetch-and-open-grimoire-examples",3298001906),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,(function (ns,var$){return lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",1013907767),ns,new cljs.core.Keyword(null,"var","var",1014020761),var$,new cljs.core.Keyword(null,"url","url",1014020321),lt.plugins.sancho.__GT_grimoire_examples_url.call(null,ns,var$)], null));
}),info,result);
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-examples","sancho.open-grimoire-examples",2297771501),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open grimoire examples locally for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"fetch-and-open-grimoire-examples","fetch-and-open-grimoire-examples",3298001906))], null));
}

//# sourceMappingURL=sancho_compiled.js.map
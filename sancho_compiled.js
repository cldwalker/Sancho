if(!lt.util.load.provided_QMARK_('lt.plugins.sancho.eval')) {
goog.provide('lt.plugins.sancho.eval');
goog.require('cljs.core');
goog.require('lt.plugins.clojure');
goog.require('lt.plugins.clojure');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.sancho.eval.handle = (function (){var method_table__7222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var prefer_table__7223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var method_cache__7224__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var cached_hierarchy__7225__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var hierarchy__7226__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",3129050535),cljs.core.get_global_hierarchy.call(null));return (new cljs.core.MultiFn("handle",((function (method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__){
return (function (info,_){return new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(info);
});})(method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__,hierarchy__7226__auto__))
,new cljs.core.Keyword(null,"default","default",2558708147),hierarchy__7226__auto__,method_table__7222__auto__,prefer_table__7223__auto__,method_cache__7224__auto__,cached_hierarchy__7225__auto__));
})();
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"default","default",2558708147),(function (info,result){return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("No eval callback defined for "),cljs.core.str(new cljs.core.Keyword(null,"type","type",1017479852).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}));
lt.plugins.sancho.eval.__BEH__clj_result__DOT__callback = (function __BEH__clj_result__DOT__callback(editor,result){return lt.plugins.sancho.eval.handle.call(null,new cljs.core.Keyword(null,"meta","meta",1017252215).cljs$core$IFn$_invoke$arity$1(result),cljs.core.first.call(null,new cljs.core.Keyword(null,"results","results",2111450984).cljs$core$IFn$_invoke$arity$1(result)));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.sancho.eval","clj-result.callback","lt.plugins.sancho.eval/clj-result.callback",1362898019),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.sancho.eval.__BEH__clj_result__DOT__callback,new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Process clojure-evaled code of result-type :callback. Dispatches\n                 to handle based on [:meta :type]",new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor.eval.clj.result.callback","editor.eval.clj.result.callback",4556723370),null], null), null));
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
lt.plugins.sancho.util.exec_commands = (function exec_commands(commands){var seq__8581 = cljs.core.seq.call(null,commands);var chunk__8582 = null;var count__8583 = 0;var i__8584 = 0;while(true){
if((i__8584 < count__8583))
{var c = cljs.core._nth.call(null,chunk__8582,i__8584);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8585 = seq__8581;
var G__8586 = chunk__8582;
var G__8587 = count__8583;
var G__8588 = (i__8584 + 1);
seq__8581 = G__8585;
chunk__8582 = G__8586;
count__8583 = G__8587;
i__8584 = G__8588;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8581);if(temp__4092__auto__)
{var seq__8581__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8581__$1))
{var c__7112__auto__ = cljs.core.chunk_first.call(null,seq__8581__$1);{
var G__8589 = cljs.core.chunk_rest.call(null,seq__8581__$1);
var G__8590 = c__7112__auto__;
var G__8591 = cljs.core.count.call(null,c__7112__auto__);
var G__8592 = 0;
seq__8581 = G__8589;
chunk__8582 = G__8590;
count__8583 = G__8591;
i__8584 = G__8592;
continue;
}
} else
{var c = cljs.core.first.call(null,seq__8581__$1);if(cljs.core.coll_QMARK_.call(null,c))
{cljs.core.apply.call(null,lt.objs.command.exec_BANG_,c);
} else
{lt.objs.command.exec_BANG_.call(null,c);
}
{
var G__8593 = cljs.core.next.call(null,seq__8581__$1);
var G__8594 = null;
var G__8595 = 0;
var G__8596 = 0;
seq__8581 = G__8593;
chunk__8582 = G__8594;
count__8583 = G__8595;
i__8584 = G__8596;
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
lt.plugins.sancho.util.GET = (function GET(url,cb){var req = require("http").get(url,(function (resp){return resp.on("data",cb);
}));return req.on("error",((function (req){
return (function (err){return cljs.core.println.call(null,"Request",url,"failed with:",err.message);
});})(req))
);
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.sancho')) {
goog.provide('lt.plugins.sancho');
goog.require('cljs.core');
goog.require('lt.objs.files');
goog.require('clojure.string');
goog.require('lt.plugins.sancho.util');
goog.require('lt.objs.notifos');
goog.require('lt.objs.notifos');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
goog.require('lt.objs.files');
goog.require('lt.plugins.sancho.eval');
goog.require('clojure.string');
goog.require('lt.plugins.sancho.util');
goog.require('lt.plugins.sancho.eval');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.command');
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
lt.plugins.sancho.__GT_grimoire_examples_url = cljs.core.comp.call(null,(function (p1__8545_SHARP_){return [cljs.core.str(p1__8545_SHARP_),cljs.core.str("/examples")].join('');
}),lt.plugins.sancho.__GT_grimoire_url);
/**
* Performs given action on a stringified, resolved var e.g. #'clojure.core/cond
*/
lt.plugins.sancho.for_resolved_var = (function for_resolved_var(action,info,p__8546){var map__8550 = p__8546;var map__8550__$1 = ((cljs.core.seq_QMARK_.call(null,map__8550))?cljs.core.apply.call(null,cljs.core.hash_map,map__8550):map__8550);var result = cljs.core.get.call(null,map__8550__$1,new cljs.core.Keyword(null,"result","result",4374444943));try{var vec__8552 = cljs.core.re_find.call(null,/^#'(\S+)\/(\S+)$/,result);var _ = cljs.core.nth.call(null,vec__8552,0,null);var ns = cljs.core.nth.call(null,vec__8552,1,null);var var$ = cljs.core.nth.call(null,vec__8552,2,null);if(cljs.core.truth_((function (){var and__6352__auto__ = ns;if(cljs.core.truth_(and__6352__auto__))
{return var$;
} else
{return and__6352__auto__;
}
})()))
{return action.call(null,ns,var$);
} else
{return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str("Invalid clojure var: "),cljs.core.str(new cljs.core.Keyword(null,"symbol","symbol",4421347594).cljs$core$IFn$_invoke$arity$1(info))].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
}
}catch (e8551){if((e8551 instanceof Error))
{var e = e8551;return lt.objs.notifos.set_msg_BANG_.call(null,[cljs.core.str(e)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),"error"], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8551;
} else
{return null;
}
}
}});
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"open-crossclj-url","open-crossclj-url",4283751576),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,cljs.core.comp.call(null,lt.plugins.sancho.util.tab_open_url,lt.plugins.sancho.__GT_crossclj_url),info,result);
}));
lt.plugins.sancho.resolve_current_word_and_call = (function resolve_current_word_and_call(kw){var ed = lt.objs.editor.pool.last_active.call(null);var sym = lt.plugins.sancho.util.current_word.call(null,ed);return lt.plugins.sancho.eval.eval_code.call(null,ed,[cljs.core.str("(resolve '"),cljs.core.str(sym),cljs.core.str(")")].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),kw,new cljs.core.Keyword(null,"symbol","symbol",4421347594),sym], null));
});
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-crossclj-url","sancho.open-crossclj-url",2521192564),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open crossclj page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-crossclj-url","open-crossclj-url",4283751576))], null));
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"open-grimoire-url","open-grimoire-url",2459926419),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,cljs.core.comp.call(null,lt.plugins.sancho.util.tab_open_url,lt.plugins.sancho.__GT_grimoire_url),info,result);
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-url","sancho.open-grimoire-url",697367407),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open grimoire page for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"open-grimoire-url","open-grimoire-url",2459926419))], null));
lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_ = (function fetch_and_open_grimoire_examples_STAR_(p__8553){var map__8555 = p__8553;var map__8555__$1 = ((cljs.core.seq_QMARK_.call(null,map__8555))?cljs.core.apply.call(null,cljs.core.hash_map,map__8555):map__8555);var url = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"url","url",1014020321));var var$ = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"var","var",1014020761));var ns = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"ns","ns",1013907767));lt.objs.notifos.working.call(null);
return lt.plugins.sancho.util.GET.call(null,url,((function (map__8555,map__8555__$1,url,var$,ns){
return (function (body){var path_8556 = lt.plugins.sancho.util.tempfile.call(null,[cljs.core.str(ns),cljs.core.str("-"),cljs.core.str(var$)].join(''),".clj");lt.objs.files.save.call(null,path_8556,body);
lt.objs.command.exec_BANG_.call(null,new cljs.core.Keyword(null,"open-path","open-path",2513940794),path_8556);
return lt.objs.notifos.done_working.call(null);
});})(map__8555,map__8555__$1,url,var$,ns))
);
});
cljs.core._add_method.call(null,lt.plugins.sancho.eval.handle,new cljs.core.Keyword(null,"fetch-and-open-grimoire-examples","fetch-and-open-grimoire-examples",3298001906),(function (info,result){return lt.plugins.sancho.for_resolved_var.call(null,(function (ns,var$){return lt.plugins.sancho.fetch_and_open_grimoire_examples_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ns","ns",1013907767),ns,new cljs.core.Keyword(null,"var","var",1014020761),var$,new cljs.core.Keyword(null,"url","url",1014020321),lt.plugins.sancho.__GT_grimoire_examples_url.call(null,ns,var$)], null));
}),info,result);
}));
lt.objs.command.command.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"command","command",1964298941),new cljs.core.Keyword(null,"sancho.open-grimoire-examples","sancho.open-grimoire-examples",2297771501),new cljs.core.Keyword(null,"desc","desc",1016984067),"Sancho: Open grimoire examples locally for current symbol",new cljs.core.Keyword(null,"exec","exec",1017031683),cljs.core.partial.call(null,lt.plugins.sancho.resolve_current_word_and_call,new cljs.core.Keyword(null,"fetch-and-open-grimoire-examples","fetch-and-open-grimoire-examples",3298001906))], null));
}

//# sourceMappingURL=sancho_compiled.js.map
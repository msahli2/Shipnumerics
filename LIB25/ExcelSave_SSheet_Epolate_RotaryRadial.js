
/*! jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);

// ___________________________________________________________________________________________________________________________________
$JExcel = {};
(function () {
	var borderKind = ["left", "right", "top", "bottom"];
	var horAlign = ["LEFT", "CENTER", "RIGHT", "NONE"];
	var vertAlign = ["TOP", "CENTER", "BOTTOM", "NONE"];
	var align = {
		L : "left",
		C : "center",
		R : "right",
		T : "top",
		B : "bottom"
	}
	function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length == 1 ? "0" + hex : hex;
	}
	$JExcel.rgbToHex = function (r, g, b) {
		if (r == undefined || g == undefined || b == undefined)
			return undefined;
		return (componentToHex(r) + componentToHex(g) + componentToHex(b)).toUpperCase();
	}
	$JExcel.toExcelUTCTime = function (date1) {
		var d2 = Math.floor(date1.getTime() / 1000);
		d2 = Math.floor(d2 / 86400) + 25569;
		var seconds = date1.getUTCSeconds() + 60 * date1.getUTCMinutes() + 60 * 60 * date1.getUTCHours();
		var SECS_DAY = 60 * 60 * 24;
		return d2 + (seconds / SECS_DAY);
	}
	$JExcel.toExcelLocalTime = function (date1) {
		var d2 = Math.floor(date1.getTime() / 1000);
		d2 = Math.floor(d2 / 86400) + 25569;
		var seconds = date1.getUTCSeconds() + 60 * date1.getUTCMinutes() + 60 * 60 * date1.getUTCHours();
		seconds = seconds - 60 * (date1.getTimezoneOffset());
		var SECS_DAY = 60 * 60 * 24;
		return d2 + (seconds / SECS_DAY);
	}
	var BuiltInFormats = [];
	BuiltInFormats[0] = 'General';
	BuiltInFormats[1] = '0';
	BuiltInFormats[2] = '0.00';
	BuiltInFormats[3] = '#,##0';
	BuiltInFormats[4] = '#,##0.00';
	BuiltInFormats[9] = '0%';
	BuiltInFormats[10] = '0.00%';
	BuiltInFormats[11] = '0.00E+00';
	BuiltInFormats[12] = '# ?/?';
	BuiltInFormats[13] = '# ??/??';
	BuiltInFormats[14] = 'mm-dd-yy';
	BuiltInFormats[15] = 'd-mmm-yy';
	BuiltInFormats[16] = 'd-mmm';
	BuiltInFormats[17] = 'mmm-yy';
	BuiltInFormats[18] = 'h:mm AM/PM';
	BuiltInFormats[19] = 'h:mm:ss AM/PM';
	BuiltInFormats[20] = 'h:mm';
	BuiltInFormats[21] = 'h:mm:ss';
	BuiltInFormats[22] = 'm/d/yy h:mm';
	BuiltInFormats[27] = '[$-404]e/m/d';
	BuiltInFormats[30] = 'm/d/yy';
	BuiltInFormats[36] = '[$-404]e/m/d';
	BuiltInFormats[37] = '#,##0 ;(#,##0)';
	BuiltInFormats[38] = '#,##0 ;[Red](#,##0)';
	BuiltInFormats[39] = '#,##0.00;(#,##0.00)';
	BuiltInFormats[40] = '#,##0.00;[Red](#,##0.00)';
	BuiltInFormats[44] = '_("$"* #,##0.00_);_("$"* \(#,##0.00\);_("$"* "-"??_);_(@_)';
	BuiltInFormats[45] = 'mm:ss';
	BuiltInFormats[46] = '[h]:mm:ss';
	BuiltInFormats[47] = 'mmss.0';
	BuiltInFormats[48] = '##0.0E+0';
	BuiltInFormats[49] = '@';
	BuiltInFormats[50] = '[$-404]e/m/d';
	BuiltInFormats[57] = '[$-404]e/m/d';
	BuiltInFormats[59] = 't0';
	BuiltInFormats[60] = 't0.00';
	BuiltInFormats[61] = 't#,##0';
	BuiltInFormats[62] = 't#,##0.00';
	BuiltInFormats[67] = 't0%';
	BuiltInFormats[68] = 't0.00%';
	BuiltInFormats[69] = 't# ?/?';
	BuiltInFormats[70] = 't# ??/??';
	BuiltInFormats[165] = '*********';
	var baseFormats = 166;
	$JExcel.formats = BuiltInFormats;
	$JExcel.borderStyles = ["none", "thin", "medium", "dashed", "dotted", "thick", "double", "hair", "mediumDashed", "dashDot", "mediumDashDot", "dashDotDot", "mediumDashDotDot", "slantDashDot"];
	var borderStylesUpper = [];
	for (var i = 0; i < $JExcel.borderStyles.length; i++)
		borderStylesUpper.push($JExcel.borderStyles[i].toUpperCase());
	var templateSheet = '<?xml version="1.0" ?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' + 'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:mv="urn:schemas-microsoft-com:mac:vml" ' + 'xmlns:mx="http://schemas.microsoft.com/office/mac/excel/2008/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" ' + 'xmlns:x14="http://schemas.microsoft.com/office/spreadsheetml/2009/9/main" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" ' + 'xmlns:xm="http://schemas.microsoft.com/office/excel/2006/main">' + '{columns}' + '<sheetData>{rows}</sheetData></worksheet>';
	function getArray(v) {
		if (!v)
			return undefined;
		return (v.constructor === Array) ? v.slice() : undefined;
	}
	function findOrAdd(list, value) {
		var i = list.indexOf(value);
		if (i != -1)
			return i;
		list.push(value);
		return list.length - 1;
	}
	function pushV(list, value) {
		list.push(value);
		return value;
	}
	function pushI(list, value) {
		list.push(value);
		return list.length - 1;
	}
	function setV(list, index, value) {
		list[index] = value;
		return value;
	}
	function toWorkBookSheet(sheet) {
		return '<sheet state="visible" name="' + sheet.name + '" sheetId="' + sheet.id + '" r:id="' + sheet.rId + '"/>';
	}
	function toWorkBookRel(sheet, i) {
		return '<Relationship Id="' + sheet.rId + '" Target="worksheets/sheet' + i + '.xml" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet"/>';
	}
	function getAsXml(sheet) {
		return templateSheet.replace('{columns}', generateColums(sheet.columns)).replace("{rows}", generateRows(sheet.rows));
	}
	function setSheet(value, style, size) {
		this.name = value;
	}
	function getRow(y) {
		return (this.rows[y] ? this.rows[y] : setV(this.rows, y, {
				cells : []
			}));
	}
	function getColumn(x) {
		return (this.columns[x] ? this.columns[x] : setV(this.columns, x, {}));
	}
	function getCell(x, y) {
		var row = this.getRow(y).cells;
		return (row[x] ? row[x] : setV(row, x, {}));
	}
	function setCell(cell, value, style) {
		if (value != undefined)
			cell.v = value;
		if (style)
			cell.s = style;
	}
	function setColumn(column, value, style) {
		if (value != undefined)
			column.wt = value;
		if (style)
			column.style = style;
	}
	function setRow(row, value, style) {
		if (value && !isNaN(value))
			row.ht = value;
		if (style)
			row.style = style;
	}
	function createSheets() {
		var oSheets = {
			sheets : [],
			add : function (name) {
				var sheet = {
					id : this.sheets.length + 1,
					rId : "rId" + (3 + this.sheets.length),
					name : name,
					rows : [],
					columns : [],
					getColumn : getColumn,
					set : setSheet,
					getRow : getRow,
					getCell : getCell
				};
				return pushI(this.sheets, sheet);
			},
			get : function (index) {
				var sheet = this.sheets[index];
				if (!sheet)
					throw "Bad sheet " + index;
				return sheet;
			},
			rows : function (i) {
				if (i < 0 || i >= this.sheets.length)
					throw "Bad sheet number must be [0.." + (this.sheets.length - 1) + "] and is: " + i;
				return this.sheets[i].rows;
			},
			setWidth : function (sheet, column, value, style) {
				if (value)
					this.sheets[sheet].colWidths[column] = isNaN(value) ? value.toString().toLowerCase() : value;
				if (style)
					this.sheets[sheet].colStyles[column] = style;
			},
			toWorkBook : function () {
				var s = '<?xml version="1.0" standalone="yes"?>' + '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">' + '<sheets>';
				for (var i = 0; i < this.sheets.length; i++)
					s = s + toWorkBookSheet(this.sheets[i]);
				return s + '</sheets><calcPr/></workbook>';
			},
			toWorkBookRels : function () {
				var s = '<?xml version="1.0" ?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
				s = s + '<Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>';
				for (var i = 0; i < this.sheets.length; i++)
					s = s + toWorkBookRel(this.sheets[i], i + 1);
				return s + '</Relationships>';
			},
			toRels : function () {
				var s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
				s = s + '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>';
				return s + '</Relationships>';
			},
			toContentType : function () {
				var s = '<?xml version="1.0" standalone="yes" ?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default ContentType="application/xml" Extension="xml"/>';
				s = s + '<Default ContentType="application/vnd.openxmlformats-package.relationships+xml" Extension="rels"/>';
				s = s + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" PartName="/xl/workbook.xml"/>';
				s = s + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml" PartName="/xl/styles.xml" />';
				for (var i = 1; i <= this.sheets.length; i++)
					s = s + '<Override ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" PartName="/xl/worksheets/sheet' + i + '.xml"/>';
				return s + '</Types>';
			},
			fileData : function (xl) {
				for (var i = 0; i < this.sheets.length; i++) {
					xl.file('worksheets/sheet' + (i + 1) + '.xml', getAsXml(this.sheets[i]));
				}
			}
		};
		return oSheets;
	}
	function toFontXml(f) {
		var f = f.split(";");
		return '<font>' +
		(f[3].indexOf("B") > -1 ? '<b />' : '') +
		(f[3].indexOf("I") > -1 ? '<i />' : '') +
		(f[3].indexOf("U") > -1 ? '<u />' : '') +
		(f[1] != "_" ? '<sz val="' + f[1] + '" />' : '') +
		(f[2] != "_" ? '<color rgb="FF' + f[2] + '" />' : '') +
		(f[0] ? '<name val="' + f[0] + '" />' : '') + '</font>';
	}
	function toFillXml(f) {
		return '<fill><patternFill patternType="solid"><fgColor rgb="FF' + f + '" /><bgColor indexed="64" /></patternFill ></fill>';
	}
	function toBorderXml(b) {
		var s = "<border>";
		b = b.split(",");
		for (var i = 0; i < 4; i++) {
			var vals = b[i].split(" ");
			s = s + "<" + borderKind[i];
			if (vals[0] == "NONE")
				s = s + "/>";
			else {
				var border = $JExcel.borderStyles[borderStylesUpper.indexOf(vals[0])];
				if (border)
					s = s + ' style="' + border + '" >' + (vals[1] != "NONE" ? '<color rgb="FF' + vals[1].substring(1) + '"/>' : '');
				else
					s = s + ">";
				s = s + "</" + borderKind[i] + ">";
			}
		}
		return s + "<diagonal/></border>";
	}
	function replaceAll(where, search, replacement) {
		return where.split(search).join(replacement);
	};
	function replaceAllMultiple(where, search, replacement) {
		while (where.indexOf(search) != -1)
			where = replaceAll(where, search, replacement);
		return where;
	}
	function toStyleXml(style) {
		var alignXml = "";
		if (style.align) {
			var h = align[style.align.charAt(0)];
			var v = align[style.align.charAt(1)];
			if (h || v) {
				alignXml = "<alignment ";
				if (h)
					alignXml = alignXml + ' horizontal="' + h + '" ';
				if (v)
					alignXml = alignXml + ' vertical="' + v + '" ';
				alignXml = alignXml + " />";
			}
		}
		var s = '<xf numFmtId="' + style.format + '" fontId="' + style.font + '" fillId="' + style.fill + '" borderId="' + style.border + '" xfId="0" ';
		if (style.border != 0)
			s = s + ' applyBorder="1" ';
		if (style.format >= baseFormats)
			s = s + ' applyNumberFormat="1" ';
		if (style.fill != 0)
			s = s + ' applyFill="1" ';
		if (alignXml != "")
			s = s + ' applyAlignment="1" ';
		s = s + '>';
		s = s + alignXml;
		return s + "</xf>";
	}
	function normalizeFont(fontDescription) {
		fontDescription = replaceAllMultiple(fontDescription, "  ", " ");
		var fNormalized = ["_", "_", "_", "_"];
		var i = 0,
		list = fontDescription.split(" ");
		var name = [];
		while (list[0] && (list[0] != "none") && (isNaN(list[0])) && (list[0].charAt(0) != "#")) {
			name.push(list[0].charAt(0).toUpperCase() + list[0].substring(1).toLowerCase());
			list.splice(0, 1);
		}
		fNormalized[0] = name.join(" ");
		while (list[0] == "none")
			list.splice(0, 1);
		if (!isNaN(list[0])) {
			fNormalized[1] = list[0];
			list.splice(0, 1);
		}
		while (list[0] == "none")
			list.splice(0, 1);
		if (list[0] && list[0].length == 7 && list[0].charAt(0) == "#") {
			fNormalized[2] = list[0].substring(1).toUpperCase();
			list.splice(0, 1);
		}
		while (list[0] == "none")
			list.splice(0, 1);
		if (list[0] && list[0].length < 4)
			fNormalized[3] = list[0].toUpperCase();
		return fNormalized.join(";");
	}
	function normalizeAlign(a) {
		if (!a)
			return "--";
		var a = replaceAllMultiple(a.toString(), "  ", " ").trim().toUpperCase().split(" ");
		if (a.length == 0)
			return "--";
		if (a.length == 1)
			a[1] = "-";
		return a[0].charAt(0) + a[1].charAt(0) + "--";
	}
	function normalizeBorders(b) {
		b = replaceAllMultiple(b, "  ", " ").trim();
		var l = (b + ",NONE,NONE,NONE,NONE").split(",");
		var p = "";
		for (var i = 0; i < 4; i++) {
			l[i] = l[i].trim().toUpperCase();
			l[i] = ((l[i].substring(0, 4) == "NONE" ? "NONE" : l[i]).trim() + " NONE NONE NONE").trim();
			var st = l[i].split(" ");
			if (st[0].charAt(0) == "#") {
				st[2] = st[0];
				st[0] = st[1];
				st[1] = st[2];
			}
			p = p + st[0] + " " + st[1] + ",";
		}
		return p;
	}
	function createStyleSheet(defaultFont) {
		var styles = [],
		fonts = [],
		formats = BuiltInFormats.slice(0),
		borders = [],
		fills = [];
		var oStyles = {
			add : function (a) {
				var style = {};
				if (a.fill && a.fill.charAt(0) == "#")
					style.fill = 2 + findOrAdd(fills, a.fill.toString().substring(1).toUpperCase());
				if (a.font)
					style.font = findOrAdd(fonts, normalizeFont(a.font.toString().trim()));
				if (a.format)
					style.format = findOrAdd(formats, a.format);
				if (a.align)
					style.align = normalizeAlign(a.align);
				if (a.border)
					style.border = 1 + findOrAdd(borders, normalizeBorders(a.border.toString().trim()));
				return 1 + pushI(styles, style);
			}
		};
		if (!defaultFont)
			defaultFont = "Calibri Light 12 0000EE";
		oStyles.add({
			font : defaultFont
		});
		oStyles.register = function (thisOne) {
			for (var i = 0; i < styles.length; i++) {
				if (styles[i].font == thisOne.font && styles[i].format == thisOne.format && styles[i].fill == thisOne.fill && styles[i].border == thisOne.border && styles[i].align == thisOne.align)
					return i;
			}
			return pushI(styles, thisOne);
		}
		oStyles.getStyle = function (a) {
			return styles[a];
		}
		oStyles.toStyleSheet = function () {
			var s = '<?xml version="1.0" encoding="utf-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" ' + 'xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">';
			s = s + '<numFmts count="' + (formats.length - baseFormats) + '">';
			for (var i = baseFormats; i < formats.length; i++)
				s = s + '<numFmt numFmtId="' + (i) + '" formatCode="' + formats[i] + '"/>';
			s = s + '</numFmts>';
			s = s + '<fonts count="' + (fonts.length) + '" x14ac:knownFonts="1" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac">';
			for (var i = 0; i < fonts.length; i++)
				s = s + toFontXml(fonts[i]);
			s = s + '</fonts>';
			s = s + '<fills count="' + (2 + fills.length) + '"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill>';
			for (var i = 0; i < fills.length; i++)
				s = s + toFillXml(fills[i]);
			s = s + '</fills>';
			s = s + '<borders count="' + (1 + borders.length) + '"><border><left /><right /><top /><bottom /><diagonal /></border>';
			for (var i = 0; i < borders.length; i++)
				s = s + toBorderXml(borders[i]);
			s = s + '</borders>';
			s = s + '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
			s = s + '<cellXfs count="' + (1 + styles.length) + '"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" />';
			for (var i = 0; i < styles.length; i++) {
				s = s + toStyleXml(styles[i]);
			}
			s = s + '</cellXfs>';
			s = s + '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
			s = s + '<dxfs count="0"/>';
			s = s + '</styleSheet>';
			return s;
		}
		return oStyles;
	}
	var reUnescapedHtml = /[&<>"']/g,
	reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
	var htmlEscapes = {
		'&' : '&amp;',
		'<' : '&lt;',
		'>' : '&gt;',
		'"' : '&quot;',
		"'" : '&#39;'
	};
	function basePropertyOf(object) {
		return function (key) {
			return object == null ? undefined : object[key];
		};
	}
	var escapeHtmlChar = basePropertyOf(htmlEscapes);
	function escape(string) {
		if (typeof string != 'string')
			string = null ? '' : (string + '');
		return (string && reHasUnescapedHtml.test(string)) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
	}
	function cellNameH(i) {
		var rest = Math.floor(i / 26) - 1;
		var s = (rest > -1 ? cellNameH(rest) : '');
		return s + "ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(i % 26);
	}
	function cellName(colIndex, rowIndex) {
		return cellNameH(colIndex) + rowIndex;
	};
	function generateCell(cell, column, row) {
		var s = '<c r="' + cellName(column, row) + '"';
		if (cell.s)
			s = s + ' s="' + cell.s + '" ';
		var value = cell.v;
		if (isNaN(value)) {
			if (value.charAt(0) != '=')
				return s + ' t="inlineStr" ><is><t>' + escape(value) + '</t></is></c>';
			return s + ' ><f>' + value.substring(1) + '</f></c>';
		}
		return s + '><v>' + value + '</v></c>';
	}
	function generateRow(row, index) {
		var rowIndex = index + 1;
		var oCells = [];
		for (var i = 0; i < row.cells.length; i++) {
			if (row.cells[i])
				oCells.push(generateCell(row.cells[i], i, rowIndex));
		}
		var s = '<row r="' + rowIndex + '" '
			if (row.ht)
				s = s + ' ht="' + row.ht + '" customHeight="1" ';
			if (row.style)
				s = s + 's="' + row.style + '" customFormat="1"';
			return s + ' >' + oCells.join('') + '</row>';
	}
	function generateRows(rows) {
		var oRows = [];
		for (var index = 0; index < rows.length; index++) {
			if (rows[index]) {
				oRows.push(generateRow(rows[index], index));
			}
		}
		return oRows.join('');
	}
	function generateColums(columns) {
		if (columns.length == 0)
			return;
		var s = '<cols>';
		for (var i = 0; i < columns.length; i++) {
			var c = columns[i];
			if (c) {
				s = s + '<col min="' + (i + 1) + '" max="' + (i + 1) + '" ';
				if (c.wt == "auto")
					s = s + ' width="18" bestFit="1" customWidth="1" ';
				else if (c.wt)
					s = s + ' width="' + c.wt + '" customWidth="1" ';
				if (c.style)
					s = s + ' style="' + c.style + '"';
				s = s + "/>";
			}
		}
		return s + "</cols>";
	}
	function isObject(v) {
		return (v !== null && typeof v === 'object');
	}
	function CombineStyles(sheets, styles) {
		for (var i = 0; i < sheets.length; i++) {
			for (var j = 0; j < sheets[i].rows.length; j++) {
				var row = sheets[i].rows[j];
				if (row && row.style) {
					for (var k = 0; k < row.cells.length; k++) {
						if (row.cells[k])
							AddStyleToCell(row.cells[k], styles, row.style);
					}
				}
			}
			for (var c = 0; c < sheets[i].columns.length; c++) {
				if (sheets[i].columns[c] && sheets[i].columns[c].style) {
					var cstyle = sheets[i].columns[c].style;
					for (var j = 0; j < sheets[i].rows.length; j++) {
						var row = sheets[i].rows[j];
						if (row)
							for (var k = 0; k < row.cells.length; k++)
								if (row.cells[k] && k == c)
									AddStyleToCell(row.cells[k], styles, cstyle);
					}
				}
			}
		}
	}
	function AddStyleToCell(cell, styles, toAdd) {
		if (!cell)
			return;
		if (!cell.s) {
			cell.s = toAdd;
			return;
		}
		var cs = styles.getStyle(cell.s - 1);
		var os = styles.getStyle(toAdd - 1);
		var ns = {},
		b = false;
		for (var x in cs)
			ns[x] = cs[x];
		for (var x in os) {
			if (!ns[x]) {
				ns[x] = os[x];
				b = true;
			}
		}
		if (!b)
			return;
		cell.s = 1 + styles.register(ns);
	}
	$JExcel.new = function (defaultFont) {
		var excel = {};
		var sheets = createSheets();
		var styles = createStyleSheet(defaultFont);
		sheets.add("Sheet 0");
		excel.addSheet = function (name) {
			if (!name)
				name = "Sheet " + sheets.length;
			return sheets.add(name);
		}
		excel.addStyle = function (a) {
			return styles.add(a);
		}
		excel.set = function (s, column, row, value, style) {
			if (isObject(s))
				return this.set(s.sheet, s.column, s.row, s.value, s.style);
			if (!s)
				s = 0;
			s = sheets.get(s);
			if (isNaN(column) && isNaN(row))
				return s.set(value, style);
			if (!isNaN(column)) {
				if (!isNaN(row))
					return setCell(s.getCell(column, row), value, style);
				return setColumn(s.getColumn(column), value, style);
			}
			return setRow(s.getRow(row), value, style);
		}
		excel.generate = function (filename) {
			CombineStyles(sheets.sheets, styles);
			var zip = new JSZip();
			zip.file('_rels/.rels', sheets.toRels());
			var xl = zip.folder('xl');
			xl.file('workbook.xml', sheets.toWorkBook());
			xl.file('styles.xml', styles.toStyleSheet());
			xl.file('_rels/workbook.xml.rels', sheets.toWorkBookRels());
			zip.file('[Content_Types].xml', sheets.toContentType());
			sheets.fileData(xl);
			zip.generateAsync({
				type : "blob"
			}).then(function (content) {
				saveAs(content, filename);
			});
		}
		return excel;
	}
})();
//*******************************************************************************
/*! FileSaver.js
 *  A saveAs() FileSaver implementation.
 *  2014-01-24
 *
 *  By Eli Grey, http://eligrey.com
 *  License: X11/MIT
 *    See LICENSE.md
 */

var saveAs = saveAs || (typeof navigator !== "undefined" && navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator)) || (function (view) {
		"use strict";
		if (typeof navigator !== "undefined" && /MSIE [1-9]\./.test(navigator.userAgent)) {
			return;
		}
		var
		doc = view.document,
		get_URL = function () {
			return view.URL || view.webkitURL || view;
		},
		URL = view.URL || view.webkitURL || view,
		save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a"),
		can_use_save_link = !view.externalHost && "download" in save_link,
		click = function (node) {
			var event = doc.createEvent("MouseEvents");
			event.initMouseEvent("click", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
			node.dispatchEvent(event);
		},
		webkit_req_fs = view.webkitRequestFileSystem,
		req_fs = view.requestFileSystem || webkit_req_fs || view.mozRequestFileSystem,
		throw_outside = function (ex) {
			(view.setImmediate || view.setTimeout)(function () {
				throw ex;
			}, 0);
		},
		force_saveable_type = "application/octet-stream",
		fs_min_size = 0,
		deletion_queue = [],
		process_deletion_queue = function () {
			var i = deletion_queue.length;
			while (i--) {
				var file = deletion_queue[i];
				if (typeof file === "string") {
					URL.revokeObjectURL(file);
				} else {
					file.remove();
				}
			}
			deletion_queue.length = 0;
		},
		dispatch = function (filesaver, event_types, event) {
			event_types = [].concat(event_types);
			var i = event_types.length;
			while (i--) {
				var listener = filesaver["on" + event_types[i]];
				if (typeof listener === "function") {
					try {
						listener.call(filesaver, event || filesaver);
					} catch (ex) {
						throw_outside(ex);
					}
				}
			}
		},
		FileSaver = function (blob, name) {
			var
			filesaver = this,
			type = blob.type,
			blob_changed = false,
			object_url,
			target_view,
			get_object_url = function () {
				var object_url = get_URL().createObjectURL(blob);
				deletion_queue.push(object_url);
				return object_url;
			},
			dispatch_all = function () {
				dispatch(filesaver, "writestart progress write writeend".split(" "));
			},
			fs_error = function () {
				if (blob_changed || !object_url) {
					object_url = get_object_url(blob);
				}
				if (target_view) {
					target_view.location.href = object_url;
				} else {
					window.open(object_url, "_blank");
				}
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
			},
			abortable = function (func) {
				return function () {
					if (filesaver.readyState !== filesaver.DONE) {
						return func.apply(this, arguments);
					}
				};
			},
			create_if_not_found = {
				create : true,
				exclusive : false
			},
			slice;
			filesaver.readyState = filesaver.INIT;
			if (!name) {
				name = "download";
			}
			if (can_use_save_link) {
				object_url = get_object_url(blob);
				doc = view.document;
				save_link = doc.createElementNS("http://www.w3.org/1999/xhtml", "a");
				save_link.href = object_url;
				save_link.download = name;
				var event = doc.createEvent("MouseEvents");
				event.initMouseEvent("click", true, false, view, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
				save_link.dispatchEvent(event);
				filesaver.readyState = filesaver.DONE;
				dispatch_all();
				return;
			}
			if (view.chrome && type && type !== force_saveable_type) {
				slice = blob.slice || blob.webkitSlice;
				blob = slice.call(blob, 0, blob.size, force_saveable_type);
				blob_changed = true;
			}
			if (webkit_req_fs && name !== "download") {
				name += ".download";
			}
			if (type === force_saveable_type || webkit_req_fs) {
				target_view = view;
			}
			if (!req_fs) {
				fs_error();
				return;
			}
			fs_min_size += blob.size;
			req_fs(view.TEMPORARY, fs_min_size, abortable(function (fs) {
					fs.root.getDirectory("saved", create_if_not_found, abortable(function (dir) {
							var save = function () {
								dir.getFile(name, create_if_not_found, abortable(function (file) {
										file.createWriter(abortable(function (writer) {
												writer.onwriteend = function (event) {
													target_view.location.href = file.toURL();
													deletion_queue.push(file);
													filesaver.readyState = filesaver.DONE;
													dispatch(filesaver, "writeend", event);
												};
												writer.onerror = function () {
													var error = writer.error;
													if (error.code !== error.ABORT_ERR) {
														fs_error();
													}
												};
												"writestart progress write abort".split(" ").forEach(function (event) {
													writer["on" + event] = filesaver["on" + event];
												});
												writer.write(blob);
												filesaver.abort = function () {
													writer.abort();
													filesaver.readyState = filesaver.DONE;
												};
												filesaver.readyState = filesaver.WRITING;
											}), fs_error);
									}), fs_error);
							};
							dir.getFile(name, {
								create : false
							}, abortable(function (file) {
									file.remove();
									save();
								}), abortable(function (ex) {
									if (ex.code === ex.NOT_FOUND_ERR) {
										save();
									} else {
										fs_error();
									}
								}));
						}), fs_error);
				}), fs_error);
		},
		FS_proto = FileSaver.prototype,
		saveAs = function (blob, name) {
			return new FileSaver(blob, name);
		};
		FS_proto.abort = function () {
			var filesaver = this;
			filesaver.readyState = filesaver.DONE;
			dispatch(filesaver, "abort");
		};
		FS_proto.readyState = FS_proto.INIT = 0;
		FS_proto.WRITING = 1;
		FS_proto.DONE = 2;
		FS_proto.error = FS_proto.onwritestart = FS_proto.onprogress = FS_proto.onwrite = FS_proto.onabort = FS_proto.onerror = FS_proto.onwriteend = null;
		view.addEventListener("unload", process_deletion_queue, false);
		saveAs.unload = function () {
			process_deletion_queue();
			view.removeEventListener("unload", process_deletion_queue, false);
		};
		return saveAs;
	}
		(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content));
if (typeof module !== "undefined")
	module.exports = saveAs;



//******************************* SPREADSHEET ************************************************


function Spreadsheet(h) {
	//console.log(' _______________ contextcontextcontextcontext ______________', h.context)
	this.name = h.context.getAttribute("name"),
	this.table = document.createElement("table"),
	this.table.name = "SpreadsheetJs-" + this.name,
	this.onCellValueChanged = h.onCellValueChanged || function () {},
	this.onCellClick = h.onCellClick || function () {},
	this.onCellDblClick = h.onCellDblClick || function () {},
	this.onCellFocused = h.onCellFocused || function () {},
	this.onNewRow = h.onNewRow || function () {},
	this.onNewCol = h.onNewCol || function () {};
	var o,
	t,
	f = h.data ? h.data.length : h.rows,
	C = h.data ? (t = 0, h.data.forEach(function (e) {
				e.length > t && (t = e.length)
			}), t) : h.cols,
	i = 0,
	a = " ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	r = this;
	function c(e) {
		r.onCellDblClick(e.target)
	}
	function d(e) {
		e.target.contentEditable = !1,
		e.target.className = e.target.className.replace(/cellFocus/, "").trim();
		var t = e.target.textContent;
		t !== o && r.onCellValueChanged(e.target, o, t),
		o = null
	}
	function s(e) {
		r.unfocusCells(),
		r.focusCell(e.target),
		r.onCellClick(e.target)
	}
	function u(e) {
		var t,
		n,
		l,
		o;
		"Enter" === e.key || 13 === e.keyCode ? (e.preventDefault(), e.target.blur(), document.body.createTextRange || window.getSelection && window.getSelection().removeAllRanges()) : "Tab" !== e.key && 9 !== e.keyCode || (e.preventDefault(), e.target.blur(), r.unfocusCells(), t = e.target.cellIndex, o = e.target.parentElement.rowIndex, n = r.getRowCount(), l = r.getColCount(), e.shiftKey ? 1 === o && 1 === t || (e = 1 < t ? r.selectCell(o - 1, t - 2) : r.selectCell(o - 2, l - 1), r.focusCell(e)) : o === n && t === l || (o = t < l ? r.selectCell(o - 1, t) : r.selectCell(o, 0), r.focusCell(o)))
	}
	function g(e) {
		if (!(702 < e)) {
			if (e <= 26)
				return a[e];
			for (var t = [0, e]; 26 < t[1]; )
				t[1] -= 26, t[0] += 1;
			return (a[t[0]] + a[t[1]]).trim()
		}
	}
	this.addRow = function () {
		var e,
		t,
		n = document.createElement("tr"),
		l = document.createElement("td");
		for (l.className = "SpreadsheetJs-gray", l.innerHTML = ++i, n.appendChild(l), e = 0; e < C; e++)
			t = document.createElement("td"), h.autofill && !0 === h.autofill && (t.innerHTML = Math.floor(10 * Math.random())), t.ondblclick = c, t.onblur = d, t.onclick = s, t.onkeypress = u, n.appendChild(t);
		this.table.tBodies[0].appendChild(n),
		this.onNewRow()
	},
	this.addCol = function () {
		if (702 !== C) {
			var e,
			t,
			n = document.createElement("th");
			for (n.innerHTML = g(C + 1), this.table.tHead.children[0].appendChild(n), t = 0; t < this.getRowCount(); t++)
				e = document.createElement("td"), h.autofill && !0 === h.autofill && (e.innerHTML = Math.floor(10 * Math.random())), e.ondblclick = c, e.onblur = d, e.onclick = s, e.onkeypress = u, this.table.tBodies[0].children[t].appendChild(e);
			C += 1,
			this.onNewCol()
		}
	},
	this.selectCell = function (e, t) {
		return this.table.tBodies[0].children[e].children[t + 1]
	},
	this.cellContent = function (e, t) {
		if (2 === arguments.length && "number" == typeof e && "number" == typeof t)
			return this.table.tBodies[0].children[e].children[t + 1].textContent;
		if (1 === arguments.length && "string" == typeof e) {
			var n = (o = (l = e).search(/\d/), [l.substr(0, o), l.substr(o)]),
			l = function (e) {
				if (2 < e.length)
					return;
				return 1 !== e.trim().length ? 26 * a.indexOf(e.substr(0, 1)) + a.indexOf(e.substr(1)) : a.indexOf(e.trim())
			}
			(n[0]),
			o = n[1];
			if (!(2 < n[0].length))
				return this.cellContent(o - 1, l - 1)
		} else
			console.warn("Invalid arguments supplied to cellContent: Expected (<int> row, <int> col) OR (<string> cellname)");
		var l,
		o
	},
	this.focusCell = function (e) {
		var t,
		n,
		l;
		r.unfocusCells(),
		e.classList.add("cellFocus"),
		e.contentEditable = !0,
		e.focus(),
		t = e,
		document.body.createTextRange ? ((n = document.body.createTextRange()).moveToElementText(t), n.select()) : window.getSelection && (l = window.getSelection(), (n = document.createRange()).selectNodeContents(t), l.removeAllRanges(), l.addRange(n)),
		o = e.textContent,
		r.onCellFocused(e)
	},
	this.unfocusCells = function () {
		var e,
		t = r.table.querySelectorAll("td.cellFocus");
		if (0 !== t.length)
			for (e = 0; e < t.length; e++)
				t[e].classList.remove("cellFocus")
	},
	this.getRows = function () {
		var e,
		t = [];
		for (e in t.push(r.table.tHead.children[0]), r.table.tBodies[0].children)
			t.push(r.table.tBodies[0].children[e]);
		return t
	},
	this.getCols = function () {
		for (var e, t, n = [], l = r.table.tHead.children[0].children, o = r.table.tBodies[0].children, i = 0; i < l.length; i++)
			n.push([]);
		for (e = 0; e < o.length; e++)
			for (t = 0; t < o[e].children.length; t++)
				n[t].push(o[e].children[t]);
		return n
	},
	this.getRowCount = function () {
		return f - h.rows
	},
	this.getColCount = function () {
		return C
	},
	this.getSize = function () {
		return [f - h.rows, C]
	},
	function (e, t, n) {
		t.name = "SpreadsheetJs-" + e.name,
		t.className = "SpreadsheetJs";
		var l,
		o,
		i,
		a,
		r,
		c = document.createElement("thead"),
		d = document.createElement("tbody"),
		s = document.createElement("tr"),
		u = document.createElement("th");
		for (u.innerHTML = " ", s.appendChild(u), o = 0; o < C; o++)
			(l = document.createElement("th")).innerHTML = g(o + 1), s.appendChild(l);
		for (c.appendChild(s), t.appendChild(c), t.appendChild(d), i = 0; i < f; i++)
			n.addRow();
		if (h.data)
			for (a = 0; a < h.data.length; a++)
				for (r = 0; r < C; r++)
					d.children[a].children[r + 1].innerHTML = h.data[a] && h.data[a][r] ? h.data[a][r] : "";
		e.appendChild(t)
	}
	(h.context, this.table, this)
}
 

//************************************* EVERPOLATE  ******************************************
!function (e) {
	if ("object" == typeof exports && "undefined" != typeof module)
		module.exports = e();
	else if ("function" == typeof define && define.amd)
		define([], e);
	else {
		var r;
		"undefined" != typeof window ? r = window : "undefined" != typeof global ? r = global : "undefined" != typeof self && (r = self),
		r.everpolate = e()
	}
}
(function () {
	return function e(r, t, n) {
		function o(i, u) {
			if (!t[i]) {
				if (!r[i]) {
					var s = "function" == typeof require && require;
					if (!u && s)
						return s(i, !0);
					if (f)
						return f(i, !0);
					var a = new Error("Cannot find module '" + i + "'");
					throw a.code = "MODULE_NOT_FOUND",
					a
				}
				var l = t[i] = {
					exports : {}
					
				};
				r[i][0].call(l.exports, function (e) {
					var t = r[i][1][e];
					return o(t ? t : e)
				}, l, l.exports, e, r, t, n)
			}
			return t[i].exports
		}
		for (var f = "function" == typeof require && require, i = 0; i < n.length; i++)
			o(n[i]);
		return o
	}
	({
		1 : [function (e, r) {
				"use strict";
				r.exports.polynomial = e("./polynomial.js"),
				r.exports.linear = e("./linear.js"),
				r.exports.linearRegression = e("./linearRegression.js"),
				r.exports.step = e("./step.js")
			}, {
				"./linear.js" : 3,
				"./linearRegression.js" : 4,
				"./polynomial.js" : 5,
				"./step.js" : 6
			}
		],
		2 : [function (e, r) {
				"use strict";
				r.exports.makeItArrayIfItsNot = function (e) {
					return "[object Array]" !== Object.prototype.toString.call(e) ? [e] : e
				},
				r.exports.findIntervalLeftBorderIndex = function (e, r) {
					if (e < r[0])
						return 0;
					if (e > r[r.length - 1])
						return r.length - 1;
					for (var t = 0, n = r.length - 1; n - t !== 1; ) {
						var o = t + Math.floor((n - t) / 2);
						e >= r[o] ? t = o : n = o
					}
					return t
				}
			}, {}
			
		],
		3 : [function (e, r) {
				"use strict";
				function t(e, r, t) {
					var f = [];
					return e = o.makeItArrayIfItsNot(e),
					e.forEach(function (e) {
						var i = o.findIntervalLeftBorderIndex(e, r);
						i == r.length - 1 && i--,
						f.push(n(e, r[i], t[i], r[i + 1], t[i + 1]))
					}),
					f
				}
				function n(e, r, t, n, o) {
					var f = (o - t) / (n - r),
					i = -f * r + t;
					return f * e + i
				}
				var o = e("./help");
				r.exports = t
			}, {
				"./help" : 2
			}
		],
		4 : [function (e, r) {
				"use strict";
				function t(e, r) {
					for (var t = {}, o = e, f = r, i = f.length, u = 0, s = 0, a = 0, l = 0, p = 0, c = 0; c < f.length; c++)
						u += o[c], s += f[c], a += o[c] * f[c], l += o[c] * o[c], p += f[c] * f[c];
					return t.slope = (i * a - u * s) / (i * l - u * u),
					t.intercept = (s - t.slope * u) / i,
					t.rSquared = Math.pow((i * a - u * s) / Math.sqrt((i * l - u * u) * (i * p - s * s)), 2),
					t.evaluate = function (e) {
						var r = n.makeItArrayIfItsNot(e),
						t = [],
						o = this;
						return r.forEach(function (e) {
							t.push(o.slope * e + o.intercept)
						}),
						t
					},
					t
				}
				r.exports = t;
				var n = e("./help")
			}, {
				"./help" : 2
			}
		],
		5 : [function (e, r) {
				"use strict";
				function t(e, r, t) {
					var f = [];
					return e = o.makeItArrayIfItsNot(e),
					e.forEach(function (e) {
						f.push(n(e, r, t))
					}),
					f
				}
				function n(e, r, t) {
					for (var n = [t], o = 1; o < r.length; o++) {
						n.push([]);
						for (var f = 1; o >= f; f++)
							n[f][o] = ((e - r[o - f]) * n[f - 1][o] - (e - r[o]) * n[f - 1][o - 1]) / (r[o] - r[o - f])
					}
					return n[f - 1][o - 1]
				}
				var o = e("./help");
				r.exports = t
			}, {
				"./help" : 2
			}
		],
		6 : [function (e, r) {
				"use strict";
				function t(e, r, t) {
					var o = [];
					return e = n.makeItArrayIfItsNot(e),
					e.forEach(function (e) {
						o.push(t[n.findIntervalLeftBorderIndex(e, r)])
					}),
					o
				}
				var n = e("./help");
				r.exports = t
			}, {
				"./help" : 2
			}
		]
	}, {}, [1])(1)
});



//************************************* ROTARY SWITCH ******************************************
/*
Version 1.0.1

Copyright 2014 Red White Silver GmbH

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

(function($, window, document, undefined) {} (jQuery, window, document));
}

*/

//(function($, window, document, undefined) {

	var pluginName = 'rotaryswitch',
		defaults = {
			minimum: -180, // Minimal value
			maximum: 180, // Maximum value
			step: 1.8, // Step size
			snapInMotion: true, // Snap to steps in motion
			beginDeg: 180, // Start point in deg
			lengthDeg: 360,	// Length in deg
			minimumOverMaximum: true, // Which value will used, if the the start and the end point at the same deg.
			showInput: false, // Show input element
			showMarks: true, // Show deg marks
			themeClass: 'defaultTheme', // Theme class
			name:""
		};
	function Plugin(element, options) {
		this.element = $(element);
		this.domElements = {};
		this.htmlStructure = {
			wrap: '<div class="rotaryswitchPlugin"></div>',
			switchButton:  '<div class="switch"></div>',
			overlay: '<div class="overlay"></div>',
			marks: '<div class="marks"></div>',
			mark: '<div class="mark"></div>'
		};
		this.mousePosition = {x: -1, y: -1};
		this.switchDeg = 0;
		this.valueInPercent = 0;
		this.value = 0;
		this.steps = 0;
		this.totalDeg = 0;
		this.degPerStep = 0;
		this.lastTriggeredValue = -1;
		
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		
		
		this.initialize();
		
	
	
	}

	Plugin.prototype = {
		
		/**
		* Initialze this plugin
		* See inline comments for more details
		*
		* @param	none
		* @return	none
		*/
		
		initialize: function() {
			
			// Save the needed jquery DOM elements
			this.domElements = {
				// Wrap the input element and save the parent as main element and add theme class:
				main: this.element.wrap(this.htmlStructure.wrap).parent().addClass(this.options.themeClass),
				switchButton: $(this.htmlStructure.switchButton),
				overlay: $(this.htmlStructure.overlay)
			};
			
			// Append addional dom elements:
			this.domElements.main.append([this.domElements.switchButton, this.domElements.overlay]);			
			
			// Calculate the length (Maximum - minimum)
			this.steps = Math.abs(this.options.maximum - this.options.minimum);
			
			// Calculate the total deg length
			this.totalDeg = this.options.lengthDeg;
			
			// Calculate deg per step
			this.degPerStep = this.totalDeg / this.steps;
			
			// Listen to some necessary events 
			this.domElements.main.on('mousedown', $.proxy(this.onMouseDown, this));
			this.domElements.main.on('touchstart', $.proxy(this.onTouchStart, this));
			//this.domElements.main.on('mousewheel', $.proxy(this.onMouseDown, this)); //************************************			
			//this.domElements.main.on('click', $.proxy(this.onMouseDown, this)); //************************************			
			this.element.on('change', $.proxy(this.onChangeElementValue, this));
			
			this.readValueFromInput(); // Get the value from the input element
			
			this.rotateSwitch(); // Rotate the switch
		
			// Show marks if wished
			if (this.options.showMarks === true) {
				this.renderMarks();
			}
			
			// Show the input element if wished
			if (this.options.showInput === false) {
				this.element.hide();
			}

		},
		
		/**
		* Adds marks for each step
		*
		* @param	none
		* @return	none
		*/
		
		renderMarks: function() {
			var i=0,
				len = this.steps / this.options.step,
				deg = this.options.beginDeg,
				degPerStep = this.degPerStep * this.options.step,
				marks = $(this.htmlStructure.marks);
			
			for (; i < len; i += 1) {
				deg += degPerStep;
				var mark = $(this.htmlStructure.mark).css({'transform': 'rotate('+deg+'deg) translate(0, -'+ (this.domElements.main.width()/2 + (this.domElements.main.width()*0.051)) +'px)'});
				marks.append(mark);
			}
						
			this.domElements.main.append(marks);
		},
		
		
		/**
		* On mouse down event handler
		* Save the mouse position (x, y) to the object this.mousePosition
		* call the method this.startHandling 
		*
		* @param	event	jquery mouse event
		* @return	none
		*/
		onMouseDown: function(event) {
			event.preventDefault();
			
			this.mousePosition.x = event.pageX;
			this.mousePosition.y = event.pageY;
			
			this.startHandling();

		},
		
		/**
		* On mouse up event handler
		* call the method this.stopHandling 
		*
		* @param	event	jquery mouse event
		* @return	none
		*/
		onMouseup: function(event) {
			this.stopHandling();
		},
		onMouseover: function(event) {
			this.stopHandling();
		},
		onMouseleave: function(event) {
			this.stopHandling();
		},		/**
		* On mouse move event handler
		* Save the mouse position (x, y) to the object this.mousePosition
		* call the method this.calculateSwitchDeg 
		* call the method this.calculateValueByDeg
		* call the method this.rotateSwitch
		* call the method this.setValueToInput
		*
		* @param 	event	jquery mouse event
		* @return	none
		*/		
		onMousemove: function(event) {
			event.preventDefault();
			this.mousePosition.x = event.pageX;
			this.mousePosition.y = event.pageY;
			this.calculateSwitchDeg();
			this.calculateValueByDeg();
			this.rotateSwitch();
			this.setValueToInput();
		},		

		/**
		* On touch start event handler
		* Identical width this.onMouseDown
		*
		* @param	event	jquery touch event
		* @return 	none
		* @see		this.onMouseDown
		*/
		onTouchStart: function(event) {
			event.preventDefault();
			this.mousePosition.x = event.originalEvent.targetTouches[0].pageX;
			this.mousePosition.y = event.originalEvent.targetTouches[0].pageY;
			this.startHandling();
		},
		
		/**
		* On touch end event handler
		* Identical width this.onMouseUp
		*
		* @param	event	jquery touch event
		* @return 	none
		* @see		this.onMouseUp
		*/
		onTouchEnd: function(event) {
			this.stopHandling();
		},
		
		/**
		* On touch move event handler
		* Identical width this.onMousemove
		*
		* @param	event	jquery touch event
		* @return 	none
		* @see		this.onMousemove
		*/	
		onTouchMove: function(event) {
			event.preventDefault();
			
			this.mousePosition.x = event.originalEvent.targetTouches[0].pageX;
			this.mousePosition.y = event.originalEvent.targetTouches[0].pageY;
			
			this.calculateSwitchDeg();
			this.calculateValueByDeg();
			this.rotateSwitch();
			this.setValueToInput();
		},
		
		/**
		* On change input element event handler
		* If event not triggered by plugin:
		* Call the method this.readValueFromInput
		* Call the method this.rotateSwitch
		*
		* @param	event	jquery event
		* @return 	none
		*/
		onChangeElementValue: function(event) {
			if (!event.plugin || event.plugin !== this) {
				this.readValueFromInput();
				this.rotateSwitch();
			}
		},
		
		/**
		* Triggered by mouse or touch begin event
		* Calls some methods
		* Listen to some events
		* Add class 'active' to the main DOM element (this.domElements.main)
		*
		* @param	none
		* @return 	none
		*/
		startHandling: function() {
			this.calculateSwitchDeg();
			this.calculateValueByDeg();
			this.rotateSwitch();
			this.setValueToInput();
		
			$(document).on('mouseup', $.proxy(this.onMouseup, this));
			$(document).on('mousemove', $.proxy(this.onMousemove, this));
			$(document).on('touchend', $.proxy(this.onTouchEnd, this));
			$(document).on('touchmove', $.proxy(this.onTouchMove, this));
			
			$(document).on('Mouseover', $.proxy(this.onMouseover, this));
			$(document).on('Mouseleave', $.proxy(this.onMouseleave, this));
			
			this.domElements.main.addClass('active');
		},
		
		/**
		* Triggered by mouseup or touchend event
		* Stop listen to some events
		* Call method this.rotateSwitch
		* Remove class 'active' from the main DOM element (this.domElements.main)
		*
		* @param	none
		* @return 	none
		*/
		stopHandling: function() {
			$(document).off('mouseup', $.proxy(this.onMouseUp, this))
				.off('mousemove', $.proxy(this.onMousemove, this))
				.off('touchend', $.proxy(this.onTouchEnd, this))
				.off('touchmove', $.proxy(this.onTouchMove, this));
			
			this.rotateSwitch(true);
			this.domElements.main.removeClass('active');
		},
		
		/**
		* Calculate the switch deg by the element position and the mouse position
		* Stores the switch deg in this.switchDeg
		* @param	none
		* @return 	none
		*/
		calculateSwitchDeg: function() {
			var offset =  this.domElements.main.offset(),
				radians = Math.atan2(this.mousePosition.x - (offset.left + (this.domElements.main.width()/2)), this.mousePosition.y - (offset.top + (this.domElements.main.height()/2)));
			
			if (this.mousePosition.x !== -1) {
				this.switchDeg = (radians * (180 / Math.PI) * -1) + 180;
			}
		},
		
		/**
		* Calculate the value by deg
		* Stores the in percent in this.valueInPercent
		* Stores the value in this.value
		* @param	none
		* @return 	none
		*/
		calculateValueByDeg: function() {
			var range = this.options.maximum - this.options.minimum;
			
			if (this.switchDeg - this.options.beginDeg > 0) {
				this.valueInPercent = (this.switchDeg - this.options.beginDeg)  / this.totalDeg;
			} else {
				this.valueInPercent = (this.switchDeg - this.options.beginDeg + 360)  / this.totalDeg;
			}
			
			if (this.valueInPercent > 1) {
				if (this.valueInPercent > (((360 / this.totalDeg)-1) / 2)+1 ) {
					this.valueInPercent = 0;
				} else {
					this.valueInPercent = 1;
				}
			}
			
			this.value = ~~ (((((range * this.valueInPercent) < 0) ? -0.5 : 0.5) + ((range * this.valueInPercent) / this.options.step))) * this.options.step;
			this.value += this.options.minimum;
			
			if (this.options.lengthDeg === 360 && (this.value === this.options.minimum || this.value === this.options.maximum)) {
				if (this.options.minimumOverMaximum === true) {
					this.value = this.options.minimum;
				} else {
					this.value = this.options.maximum;
				}
			}
		},
		
		/**
		* Rotate the switch with css transform
		* snap to the the next rounded value if the parameter snap is true
		* @param	snap	boolean
		* @return 	none
		*/
		rotateSwitch: function(snap) {
			var deg = 0,
				exactDeg = (this.valueInPercent * this.totalDeg),
				roundedDeg = ((this.value / this.steps) * this.totalDeg) - (this.options.minimum * this.degPerStep),
				difference = Math.abs(Math.abs(exactDeg) - Math.abs(roundedDeg)),
				rotateString = '';
			
			if (snap === true || (this.options.snapInMotion === true && difference < this.degPerStep / 6)) {
				if (roundedDeg + this.options.beginDeg < 360) {
					deg = (roundedDeg + this.options.beginDeg);
				} else {
					deg = roundedDeg + this.options.beginDeg - 360;
				}
			} else {
				if (exactDeg + this.options.beginDeg < 360) {
					deg = (exactDeg + this.options.beginDeg);
				} else {
					deg = exactDeg + this.options.beginDeg - 360;
				}
			}

			rotateString = ['rotate(', deg, 'deg)'].join('');
			this.domElements.switchButton.css({
				'transform': rotateString,
				'-webkit-transform': rotateString,
				'-moz-transform': rotateString,
				'-o-transform': rotateString,
				'-ms-transform': rotateString
			});
		},
		
		/**
		* Read the valur from the input element
		* If no value available, this.options.minimum is used
		* @param	snap	boolean
		* @return 	none
		*/
		readValueFromInput: function() {
			var elementValue = parseInt(this.element.val(), 10);
			if (isNaN(elementValue) === true) {
				this.value = this.options.minimum;
			} else {
				this.value = Math.max(this.options.minimum, elementValue);
				this.value = Math.min(this.options.maximum, this.value);
			}
			
			this.value -= this.options.minimum;
			this.valueInPercent = this.value / (this.options.maximum - this.options.minimum); 
		},
		
		/**
		* Set the value to the input element
		* and trigger the change event on the input element
		* @param	none
		* @return 	none
		*/
		setValueToInput: function() {
			if (this.value !== this.lastTriggeredValue) {
				this.lastTriggeredValue = this.value;
				this.element.val(this.value).trigger({type: 'change', plugin: this});	
	            var xxx = (this.options.name).toString(); 
	            document.getElementById(xxx).value = this.value; //console.log(' ___ xxx/' + xxx)
				//console.log(' ___ value/' + this.value)
				
			}
		}
	};
	
	$.fn[pluginName] = function(options) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)){
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
		});
	};
	
//}(jQuery, window, document));

//******************************************* RADIALGAUGE ************************************************

//radial-gauge
!function (e) {
	"use strict";
	function t(e) {
		if (Array.isArray(e)) {
			for (var t = 0, i = Array(e.length); t < e.length; t++)
				i[t] = e[t];
			return i
		}
		return Array.from(e)
	}
	function i(e, t) {
		if (!e)
			throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
		return !t || "object" != typeof t && "function" != typeof t ? e : t
	}
	function r(e, t) {
		if ("function" != typeof t && null !== t)
			throw new TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, {
				constructor : {
					value : e,
					enumerable : !1,
					writable : !0,
					configurable : !0
				}
			}),
		t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
	}
	function o(e, t) {
		if (!(e instanceof t))
			throw new TypeError("Cannot call a class as a function")
	}
	function n(e, t) {
		if (t || (t = "undefined" == typeof window ? global : window), void 0 !== t[e])
			return t[e];
		for (var i = ["webkit", "moz", "ms", "o"], r = 0, o = i.length, n = e.charAt(0).toUpperCase() + e.substr(1); r < o; r++) {
			var a = t[i[r] + n];
			if (void 0 !== a)
				return a
		}
		return null
	}
	function a(e, t, i, r, o, n, l) {
		if ("function" != typeof r)
			throw new TypeError("Invalid animation rule:", r);
		var s = e - i,
		d = s / o,
		c = 0;
		d > 1 && (d = 1),
		1 !== d && (c = r(d), isFinite(c) && !isNaN(c) && (d = c)),
		t && t(d),
		s < o ? l.frame = ue(function (e) {
				return a(e, t, i, r, o, n, l)
			}) : (n && n(), l.inProgress = !1)
	}
	function l() {
		Array.prototype.constructor.apply(this, arguments)
	}
	function s(e) {
		if (!(e instanceof DOMException && 2152923147 === e.result))
			throw e
	}
	function d(e) {
		return e.majorTicks instanceof Array || (e.majorTicks = e.majorTicks ? [e.majorTicks] : []),
		e.majorTicks.length || (e.majorTicks.push(Te.formatMajorTickNumber(e.minValue, e)), e.majorTicks.push(Te.formatMajorTickNumber(e.maxValue, e))),
		["right" !== e.tickSide, "left" !== e.tickSide]
	}
	function c(e, t, i, r, o, n) {
		e.beginPath(),
		e.moveTo(t + n, i),
		e.lineTo(t + r - n, i),
		e.quadraticCurveTo(t + r, i, t + r, i + n),
		e.lineTo(t + r, i + o - n),
		e.quadraticCurveTo(t + r, i + o, t + r - n, i + o),
		e.lineTo(t + n, i + o),
		e.quadraticCurveTo(t, i + o, t, i + o - n),
		e.lineTo(t, i + n),
		e.quadraticCurveTo(t, i, t + n, i),
		e.closePath()
	}
	function h(e, t) {
		var i = t.valueDec,
		r = t.valueInt,
		o = 0,
		n = void 0,
		a = void 0,
		l = void 0;
		if (e = parseFloat(e), l = e < 0, e = Math.abs(e), i > 0) {
			for (a = e.toFixed(i).toString().split("."), n = r - a[0].length; o < n; ++o)
				a[0] = "0" + a[0];
			a = (l ? "-" : "") + a[0] + "." + a[1]
		} else {
			for (a = Math.round(e).toString(), n = r - a.length; o < n; ++o)
				a = "0" + a;
			a = (l ? "-" : "") + a
		}
		return a
	}
	function u(e, t) {
		var i = void 0,
		r = !1;
		return i = 0 === t.majorTicksDec ? Math.round(e).toString() : e.toFixed(t.majorTicksDec),
		t.majorTicksInt > 1 ? (r = ~i.indexOf("."), ~i.indexOf("-") ? "-" + [t.majorTicksInt + t.majorTicksDec + 2 + (r ? 1 : 0) - i.length].join("0") + i.replace("-", "") : [t.majorTicksInt + t.majorTicksDec + 1 + (r ? 1 : 0) - i.length].join("0") + i) : i
	}
	function f(e) {
		return e * Math.PI / 180
	}
	function m(e, t) {
		return {
			x : -e * Math.sin(t),
			y : e * Math.cos(t)
		}
	}
	function v(e, t, i, r) {
		var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
		n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
		a = e.createLinearGradient(o ? 0 : n, o ? n : 0, o ? 0 : r, o ? r : 0);
		return a.addColorStop(0, t),
		a.addColorStop(1, i),
		a
	}
	function b(e, t) {
		if (arguments.length > 2 && void 0 !== arguments[2] && arguments[2])
			return e.restore(), !0;
		e.save();
		var i = t.borderShadowWidth;
		return i && (e.shadowBlur = i, e.shadowColor = t.colorBorderShadow),
		!0
	}
	function g(e, t) {
		t.needleShadow && (e.shadowOffsetX = 2, e.shadowOffsetY = 2, e.shadowBlur = 10, e.shadowColor = t.colorNeedleShadowDown)
	}
	function p(e, t, i) {
		return e["font" + t + "Style"] + " " + e["font" + t + "Weight"] + " " + e["font" + t + "Size"] * 1.4 * i + "px " + e["font" + t]
	}
	function w(e) {
		e.shadowOffsetX = null,
		e.shadowOffsetY = null,
		e.shadowBlur = null,
		e.shadowColor = "",
		e.strokeStyle = null,
		e.lineWidth = 0,
		e.save()
	}
	function k(e, t, i, r) {
		t.valueTextShadow && (e.shadowOffsetX = i, e.shadowOffsetY = i, e.shadowBlur = r, e.shadowColor = t.colorValueTextShadow)
	}
	function y(e, t, i, r, o, n) {
		if (t.valueBox) {
			w(e);
			var a = t.valueDec ? 1 + t.valueDec : 0,
			l = "9".repeat(Math.max.apply(null, [String(parseInt(i)).length + a].concat(t.majorTicks.map(function (e) {
								return String(parseInt(e, 10)).length + a
							})))),
			s = t.valueText || h(i, t),
			d = n / 200,
			u = n / 100,
			f = .4 * u,
			m = 1.2 * u;
			e.font = p(t, "Value", d),
			k(e, t, f, m);
			var v = e.measureText(t.valueText ? s : "-" + h(Number(l), t)).width;
			w(e);
			var b = parseFloat(t.fontValueSize) * d + f + m,
			g = u * parseFloat(t.valueBoxStroke),
			y = 2 * n - 2 * g,
			x = v + 10 * u,
			T = 1.1 * b + f + m,
			S = u * t.valueBoxBorderRadius,
			W = (parseFloat(t.valueBoxWidth) || 0) / 100 * y;
			W > x && (x = W),
			x > y && (x = y);
			var O = r - x / 2,
			V = o - T / 2,
			P = o - 5.75 * u;
			if (e.beginPath(), S ? c(e, O, V, x, T, S) : e.rect(O, V, x, T), g) {
				var M = e.createRadialGradient(r, P, 10 * u, r, P, 20 * u);
				M.addColorStop(0, t.colorValueBoxRect),
				M.addColorStop(1, t.colorValueBoxRectEnd),
				e.strokeStyle = M,
				e.lineWidth = g,
				e.stroke()
			}
			t.colorValueBoxShadow && (e.shadowBlur = 1.2 * u, e.shadowColor = t.colorValueBoxShadow),
			t.colorValueBoxBackground && (e.fillStyle = t.colorValueBoxBackground, e.fill()),
			e.closePath(),
			e.restore(),
			k(e, t, f, m),
			e.fillStyle = t.colorValueText,
			e.textAlign = "center",
			e.textBaseline = "alphabetic",
			e.fillText(s, O + x / 2, o + T / 2 - b / 3),
			e.restore()
		}
	}
	function x(e) {
		var t = e.value,
		i = e.minValue,
		r = e.maxValue,
		o = .01 * (r - i);
		return {
			normal : t < i ? i : t > r ? r : t,
			indented : t < i ? i - o : t > r ? r + o : t
		}
	}
	function T(e, t, i, r, o) {
		i.beginPath(),
		i.arc(0, 0, ke(e), 0, 2 * Se, !0),
		i.lineWidth = t,
		i.strokeStyle = o ? Te.linearGradient(i, r, o, e) : r,
		i.stroke(),
		i.closePath()
	}
	function S(e, t) {
		var i = be.pixelRatio;
		return e.maxRadius || (e.maxRadius = e.max - t.borderShadowWidth - t.borderOuterWidth * i - t.borderMiddleWidth * i - t.borderInnerWidth * i + (t.borderOuterWidth ? .5 : 0) + (t.borderMiddleWidth ? .5 : 0) + (t.borderInnerWidth ? .5 : 0)),
		e.maxRadius
	}
	function W(e, t) {
		var i = be.pixelRatio,
		r = t.borderShadowWidth * i,
		o = e.max - r - t.borderOuterWidth * i / 2,
		n = o - t.borderOuterWidth * i / 2 - t.borderMiddleWidth * i / 2 + .5,
		a = n - t.borderMiddleWidth * i / 2 - t.borderInnerWidth * i / 2 + .5,
		l = S(e, t),
		s = void 0,
		d = !1;
		e.save(),
		t.borderOuterWidth && (d = Te.drawShadow(e, t, d), T(o, t.borderOuterWidth * i, e, t.colorBorderOuter, t.colorBorderOuterEnd)),
		t.borderMiddleWidth && (d = Te.drawShadow(e, t, d), T(n, t.borderMiddleWidth * i, e, t.colorBorderMiddle, t.colorBorderMiddleEnd)),
		t.borderInnerWidth && (d = Te.drawShadow(e, t, d), T(a, t.borderInnerWidth * i, e, t.colorBorderInner, t.colorBorderInnerEnd)),
		Te.drawShadow(e, t, d),
		e.beginPath(),
		e.arc(0, 0, ke(l), 0, 2 * Se, !0),
		t.colorPlateEnd ? (s = e.createRadialGradient(0, 0, l / 2, 0, 0, l), s.addColorStop(0, t.colorPlate), s.addColorStop(1, t.colorPlateEnd)) : s = t.colorPlate,
		e.fillStyle = s,
		e.fill(),
		e.closePath(),
		e.restore()
	}
	function O(e, t) {
		var i = e.max * (parseFloat(t.highlightsWidth) || 0) / 100;
		if (i) {
			var r = ke(P(e, t) - i / 2),
			o = 0,
			n = t.highlights.length,
			a = (t.maxValue - t.minValue) / t.ticksAngle;
			for (e.save(); o < n; o++) {
				var l = t.highlights[o];
				e.beginPath(),
				e.rotate(We),
				e.arc(0, 0, r, Te.radians(t.startAngle + (l.from - t.minValue) / a), Te.radians(t.startAngle + (l.to - t.minValue) / a), !1),
				e.strokeStyle = l.color,
				e.lineWidth = i,
				e.stroke(),
				e.closePath(),
				e.restore(),
				e.save()
			}
		}
	}
	function V(e, t) {
		var i = P(e, t),
		r = void 0,
		o = void 0,
		n = void 0,
		a = 0,
		l = 0,
		s = Math.abs(t.minorTicks) || 0,
		d = t.ticksAngle / (t.maxValue - t.minValue);
		for (e.lineWidth = be.pixelRatio, e.strokeStyle = t.colorMinorTicks || t.colorStrokeTicks, e.save(), t.exactTicks ? (o = t.maxValue - t.minValue, r = s ? o / s : 0, l = (t.majorTicks[0] % s || 0) * d) : r = s * (t.majorTicks.length - 1); a < r; ++a)
			n = t.startAngle + l + a * (t.ticksAngle / r), e.rotate(Te.radians(n)), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .075 * e.max), A(e)
	}
	function P(e, t) {
		var i = e.max / 100;
		return S(e, t) - 5 * i - (t.barWidth ? 2 * (parseFloat(t.barStrokeWidth) || 0) + ((parseFloat(t.barWidth) || 0) + 5) * i : 0)
	}
	function M(e, t) {
		Te.prepareTicks(t);
		var i = ke(P(e, t)),
		r = void 0,
		o = void 0,
		n = t.majorTicks.length,
		a = be.pixelRatio;
		for (e.lineWidth = 2 * a, e.save(), o = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(n).fill(t.colorStrokeTicks || t.colorMajorTicks), r = 0; r < n; ++r)
			e.strokeStyle = o[r], e.rotate(Te.radians(B(t, t.exactTicks ? t.majorTicks[r] : r, n))), e.beginPath(), e.moveTo(0, i), e.lineTo(0, i - .15 * e.max), A(e);
		t.strokeTicks && (e.strokeStyle = t.colorStrokeTicks || o[0], e.rotate(We), e.beginPath(), e.arc(0, 0, i, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), A(e))
	}
	function B(e, t, i) {
		if (e.exactTicks) {
			var r = e.ticksAngle / (e.maxValue - e.minValue);
			return e.startAngle + r * (t - e.minValue)
		}
		return e.startAngle + t * (e.ticksAngle / (i - 1))
	}
	function A(e) {
		e.stroke(),
		e.restore(),
		e.closePath(),
		e.save()
	}
	function j(e, t) {
		var i = P(e, t) - .15 * e.max,
		r = {},
		o = 0,
		n = t.majorTicks.length,
		a = "needle" !== t.animationTarget,
		l = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(n).fill(t.colorNumbers),
		s = a ?  - (t.value - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle : 0;
		for (a && (e.save(), e.rotate(-Te.radians(s))), e.font = Te.font(t, "Numbers", e.max / 200), e.lineWidth = 0, e.textAlign = "center", e.textBaseline = "middle"; o < n; ++o) {
			var d = s + B(t, t.exactTicks ? t.majorTicks[o] : o, n),
			c = e.measureText(t.majorTicks[o]).width,
			h = t.fontNumbersSize,
			u = Math.sqrt(c * c + h * h) / 2,
			f = Te.radialPoint(i - u - t.numbersMargin / 100 * e.max, Te.radians(d));
			360 === d && (d = 0),
			r[d] || (r[d] = !0, e.fillStyle = l[o], e.fillText(t.majorTicks[o], f.x, f.y))
		}
		a && e.restore()
	}
	function C(e, t) {
		t.title && (e.save(), e.font = Te.font(t, "Title", e.max / 200), e.fillStyle = t.colorTitle, e.textAlign = "center", e.fillText(t.title, 0, -e.max / 4.25, .8 * e.max), e.restore())
	}
	function N(e, t) {
		t.units && (e.save(), e.font = Te.font(t, "Units", e.max / 200), e.fillStyle = t.colorUnits, e.textAlign = "center", e.fillText(t.units, 0, e.max / 3.25, .8 * e.max), e.restore())
	}
	function E(e, t) {
		if (t.needle) {
			var i = t.ticksAngle < 360 ? Te.normalizedValue(t).indented : t.value,
			r = S(e, t),
			o = ke(r / 100 * t.needleCircleSize),
			n = ke(r / 100 * t.needleCircleSize * .75),
			a = ke(r / 100 * t.needleEnd),
			l = ke(t.needleStart ? r / 100 * t.needleStart : 0),
			s = r / 100 * t.needleWidth,
			d = r / 100 * t.needleWidth / 2,
			c = be.pixelRatio,
			h = "needle" !== t.animationTarget;
			e.save(),
			Te.drawNeedleShadow(e, t),
			e.rotate(Te.radians(h ? t.startAngle : t.startAngle + (i - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle)),
			e.fillStyle = Te.linearGradient(e, t.colorNeedle, t.colorNeedleEnd, a - l),
			"arrow" === t.needleType ? (e.beginPath(), e.moveTo(-d, -l), e.lineTo(-s, 0), e.lineTo(-1 * c, a), e.lineTo(c, a), e.lineTo(s, 0), e.lineTo(d, -l), e.closePath(), e.fill(), e.beginPath(), e.lineTo( - .5 * c, a), e.lineTo(-1 * c, a), e.lineTo(-s, 0), e.lineTo(-d, -l), e.lineTo(d / 2 * c - 2 * c, -l), e.closePath(), e.fillStyle = t.colorNeedleShadowUp, e.fill()) : (e.beginPath(), e.moveTo(-d, a), e.lineTo(-d, l), e.lineTo(d, l), e.lineTo(d, a), e.closePath(), e.fill()),
			t.needleCircleSize && (e.restore(), Te.drawNeedleShadow(e, t), t.needleCircleOuter && (e.beginPath(), e.arc(0, 0, o, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleOuter, t.colorNeedleCircleOuterEnd, o), e.fill(), e.closePath()), t.needleCircleInner && (e.beginPath(), e.arc(0, 0, n, 0, 2 * Se, !0), e.fillStyle = Te.linearGradient(e, t.colorNeedleCircleInner, t.colorNeedleCircleInnerEnd, n), e.fill(), e.closePath()), e.restore())
		}
	}
	function _(e, t, i) {
		Te.drawValueBox(e, t, i, 0, e.max - .5 * e.max, e.max)
	}
	function R(e, t) {
		var i = e.max / 100,
		r = S(e, t) - 5 * i,
		o = parseFloat(t.barStrokeWidth) || 0,
		n = (parseFloat(t.barWidth) || 0) * i,
		a = r - 2 * o - n,
		l = (r - a) / 2,
		s = a + l,
		d = o / s,
		c = t.startAngle,
		h = t.startAngle + t.ticksAngle;
		e.save(),
		e.rotate(We),
		o && (e.beginPath(), e.arc(0, 0, s, Te.radians(c) - d, Te.radians(h) + d, !1), e.strokeStyle = t.colorBarStroke, e.lineWidth = 2 * l, e.stroke(), e.closePath()),
		n && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(h), !1), e.strokeStyle = t.colorBar, e.lineWidth = n, e.stroke(), e.closePath(), t.barShadow && (e.beginPath(), e.arc(0, 0, r, Te.radians(c), Te.radians(h), !1), e.clip(), e.beginPath(), e.strokeStyle = t.colorBar, e.lineWidth = 1, e.shadowBlur = t.barShadow, e.shadowColor = t.colorBarShadow, e.shadowOffsetX = 0, e.shadowOffsetY = 0, e.arc(0, 0, r, Te.radians(t.startAngle), Te.radians(t.startAngle + t.ticksAngle), !1), e.stroke(), e.closePath(), e.restore(), e.rotate(We)), t.barProgress && (e.beginPath(), e.arc(0, 0, s, Te.radians(c), Te.radians(c + (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue) * t.ticksAngle), !1), e.strokeStyle = t.colorBarProgress, e.lineWidth = n, e.stroke(), e.closePath())),
		e.restore()
	}
	function I(e) {
		return e.options.animatedValue ? e.options.value : e.value
	}
	function D(e, t, i, r, o, n, a, l) {
		e.beginPath(),
		e.fillStyle = l ? Te.linearGradient(e, a, l, o > n ? o : n, n > o, o > n ? i : r) : a,
		t > 0 ? Te.roundRect(e, i, r, o, n, t) : e.rect(i, r, o, n),
		e.fill(),
		e.closePath()
	}
	function z(e, t, i, r, o, n, a, l, s) {
		e.beginPath(),
		e.lineWidth = t,
		e.strokeStyle = s ? Te.linearGradient(e, l, s, a, !0, o) : l,
		i > 0 ? Te.roundRect(e, r, o, n, a, i) : e.rect(r, o, n, a),
		e.stroke(),
		e.closePath()
	}
	function L(e, t, i, r, o, n) {
		var a = be.pixelRatio;
		e.save();
		var l = t.borderRadius * a,
		s = o - t.borderShadowWidth - t.borderOuterWidth * a,
		d = s - t.borderOuterWidth * a - t.borderMiddleWidth * a,
		c = d - t.borderMiddleWidth * a - t.borderInnerWidth * a,
		h = c - t.borderInnerWidth * a,
		u = n - t.borderShadowWidth - t.borderOuterWidth * a,
		f = u - t.borderOuterWidth * a - t.borderMiddleWidth * a,
		m = f - t.borderMiddleWidth * a - t.borderInnerWidth * a,
		v = m - t.borderInnerWidth * a,
		b = i - (d - s) / 2,
		g = b - (c - d) / 2,
		p = g - (h - c) / 2,
		w = r - (f - u) / 2,
		k = w - (m - f) / 2,
		y = k - (v - m) / 2,
		x = 0,
		T = !1;
		return t.borderOuterWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderOuterWidth * a, l, i + t.borderOuterWidth * a / 2 - x, r + t.borderOuterWidth * a / 2 - x, s, u, t.colorBorderOuter, t.colorBorderOuterEnd), x += .5 * a),
		t.borderMiddleWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderMiddleWidth * a, l -= 1 + 2 * x, b + t.borderMiddleWidth * a / 2 - x, w + t.borderMiddleWidth * a / 2 - x, d + 2 * x, f + 2 * x, t.colorBorderMiddle, t.colorBorderMiddleEnd), x += .5 * a),
		t.borderInnerWidth && (T = Te.drawShadow(e, t, T), z(e, t.borderInnerWidth * a, l -= 1 + 2 * x, g + t.borderInnerWidth * a / 2 - x, k + t.borderInnerWidth * a / 2 - x, c + 2 * x, m + 2 * x, t.colorBorderInner, t.colorBorderInnerEnd), x += .5 * a),
		Te.drawShadow(e, t, T),
		D(e, l, p, y, h + 2 * x, v + 2 * x, t.colorPlate, t.colorPlateEnd),
		e.restore(),
		[p, y, h, v]
	}
	function G(e, t, i, r, o, n) {
		var a = be.pixelRatio,
		l = n >= o,
		s = l ? .85 * o : n,
		d = l ? n : o;
		i = l ? we(i + (o - s) / 2) : i;
		var c = !!t.title,
		h = !!t.units,
		u = !!t.valueBox,
		f = void 0,
		m = void 0,
		v = void 0;
		l ? (m = we(.05 * d), f = we(.075 * d), v = we(.11 * d), c && (d -= f, r += f), h && (d -= m), u && (d -= v)) : (m = f = we(.15 * s), c && (s -= f, r += f), h && (s -= m));
		var b = 2 * t.barStrokeWidth,
		g = t.barBeginCircle ? we(s * t.barBeginCircle / 200 - b / 2) : 0,
		p = we(s * t.barWidth / 100 - b),
		w = we(d * t.barLength / 100 - b),
		k = we((d - w) / 2),
		y = we(i + (l ? s / 2 : k + g)),
		x = we(r + (l ? d - k - g + b / 2 : s / 2)),
		T = !l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s,
		S = l || t.hasLeft && t.hasRight ? 0 : (t.hasRight ? -1 : 1) * t.ticksWidth / 100 * s;
		return e.barDimensions = {
			isVertical : l,
			width : s,
			length : d,
			barWidth : p,
			barLength : w,
			strokeWidth : b,
			barMargin : k,
			radius : g,
			pixelRatio : a,
			barOffset : null,
			titleMargin : c ? f : 0,
			unitsMargin : h ? m : 0,
			get ticksLength() {
				return this.barLength - this.barOffset - this.strokeWidth
			},
			X : i + T,
			Y : r + S,
			x0 : y + T,
			y0 : x + S,
			baseX : i,
			baseY : r,
			ticksPadding : t.ticksPadding / 100
		},
		e.barDimensions
	}
	function F(e, t, i, r, o, n, a) {
		var l = G(e, t, r, o, n, a),
		s = l.isVertical,
		d = l.width,
		c = l.barWidth,
		h = l.barLength,
		u = l.strokeWidth,
		f = l.barMargin,
		m = l.radius,
		v = l.x0,
		b = l.y0,
		g = l.X,
		p = l.Y,
		w = h;
		if (e.save(), e.beginPath(), t.barBeginCircle) {
			var k = Te.radians(s ? 270 : 0),
			y = Math.asin(c / 2 / m),
			x = Math.cos(y),
			T = Math.sin(y),
			S = v + (s ? m * T : m * x - u / 2),
			W = s ? b - m * x : b + m * T,
			O = ke(s ? W - b : S - v);
			e.barDimensions.barOffset = we(O + m);
			var V = s ? we(v - m * T) : S,
			P = s ? W : we(b - m * T);
			"progress" === i && (h = e.barDimensions.barOffset + (h - e.barDimensions.barOffset) * (Te.normalizedValue(t).normal - t.minValue) / (t.maxValue - t.minValue));
			var M = we(S + h - e.barDimensions.barOffset + u / 2),
			B = we(W - h + e.barDimensions.barOffset - u / 2);
			e.arc(v, b, m, k + y, k - y),
			s ? (e.moveTo(S, P), e.lineTo(S, B), e.lineTo(V, B), e.lineTo(V, P)) : (e.moveTo(S, P), e.lineTo(M, P), e.lineTo(M, W), e.lineTo(S, W))
		} else {
			var A = we(s ? g + (d - c) / 2 : g + f),
			j = we(s ? p + h + f : p + (d - c) / 2);
			"progress" === i && (h *= (t.value - t.minValue) / (t.maxValue - t.minValue)),
			s ? e.rect(A, j, c, -h) : e.rect(A, j, h, c)
		}
		"progress" !== i && t.barStrokeWidth && (e.lineWidth = u, e.strokeStyle = t.colorBarStroke, e.stroke()),
		"progress" !== i && t.colorBar ? (e.fillStyle = t.colorBarEnd ? Te.linearGradient(e, t.colorBar, t.colorBarEnd, h, s, s ? p : g) : t.colorBar, e.fill()) : "progress" === i && t.colorBarProgress && (e.fillStyle = t.colorBarProgressEnd ? Te.linearGradient(e, t.colorBarProgress, t.colorBarProgressEnd, w, s, s ? p : g) : t.colorBarProgress, e.fill()),
		e.closePath(),
		t.barBeginCircle && (e.barDimensions.radius += u),
		e.barDimensions.barWidth += u,
		e.barDimensions.barLength += u
	}
	function X(e, t, i, r, o, n) {
		F(e, t, "", i, r, o, n)
	}
	function Y(e, t) {
		return t.needleSide !== e || t.tickSide !== e || t.numberSide !== e
	}
	function U(e, t, i, r, o, n) {
		t.barProgress && F(e, t, "progress", i, r, o, n)
	}
	function q(e, t) {
		var i = e.barDimensions,
		r = i.isVertical,
		o = i.width,
		n = i.length,
		a = i.barWidth,
		l = i.barOffset,
		s = i.barMargin,
		d = i.X,
		c = i.Y,
		h = i.ticksLength,
		u = i.ticksPadding,
		f = o * (parseFloat(t.highlightsWidth) || 0) / 100;
		if (t.highlights && f) {
			var m = "right" !== t.tickSide,
			v = "left" !== t.tickSide,
			b = 0,
			g = t.highlights.length,
			p = (o - a) / 2,
			w = t.maxValue - t.minValue,
			k = we(r ? d + p : d + s + l),
			y = f,
			x = r ? c + n - s - l : c + p,
			T = we((t.ticksWidth / 100 + u) * o) + (f - t.ticksWidth / 100 * o),
			S = we(a + u * o);
			for (e.save(); b < g; b++) {
				var W = t.highlights[b],
				O = h * ke(t.minValue - W.from) / w,
				V = h * ke((W.to - W.from) / w);
				e.beginPath(),
				e.fillStyle = W.color,
				r ? (m && e.rect(k - T, x - O, y, -V), v && e.rect(k + S, x - O, y, -V)) : (m && e.rect(k + O, x - T, V, y), v && e.rect(k + O, x + S, V, y)),
				e.fill(),
				e.closePath()
			}
		}
	}
	function H(e, t, i, r, o) {
		e.beginPath(),
		e.moveTo(t, i),
		e.lineTo(r, o),
		e.stroke(),
		e.closePath(),
		e.save()
	}
	function J(e, t, i, r, o, n, a, l, s) {
		var d = e.barDimensions,
		c = d.isVertical,
		h = d.length,
		u = d.barWidth,
		f = d.barOffset,
		m = d.barMargin,
		v = d.pixelRatio,
		b = d.width,
		g = d.X,
		p = d.Y,
		w = d.ticksLength,
		k = d.ticksPadding,
		y = (b - u) / 2,
		x = void 0,
		T = void 0,
		S = 0,
		W = i.length,
		O = void 0,
		V = s * b,
		P = y - k * b,
		M = y + u + V + k * b,
		B = t instanceof Array ? t : new Array(i.length).fill(t);
		e.lineWidth = l * v,
		e.save();
		for (var A = w / (o - r); S < W; S++)
			O = i[S], e.strokeStyle = B[S], c ? (T = p + h - m - f + (r - O) * A, n && (x = g + P, H(e, x, T, we(x - V), T)), a && (x = g + M, H(e, x, T, we(x - V), T))) : (x = g + m + f - (r - O) * A, n && (T = p + P, H(e, x, T, x, we(T - V))), a && (T = p + M, H(e, x, we(T), x, T - V)))
	}
	function $(e, t) {
		var i = Te.prepareTicks(t),
		r = le(i, 2),
		o = r[0],
		n = r[1],
		a = 2,
		l = (t.maxValue - t.minValue) / (t.majorTicks.length - 1),
		s = t.colorMajorTicks instanceof Array ? t.colorMajorTicks : new Array(t.majorTicks.length).fill(t.colorStrokeTicks || t.colorMajorTicks);
		if (J(e, s, t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
					return t.minValue + l * i
				}), t.minValue, t.maxValue, o, n, a, t.ticksWidth / 100), t.strokeTicks) {
			var d = e.barDimensions,
			c = d.isVertical,
			h = d.length,
			u = d.width,
			f = d.barWidth,
			m = d.barMargin,
			v = d.barOffset,
			b = d.X,
			g = d.Y,
			p = d.ticksLength,
			w = d.pixelRatio,
			k = d.ticksPadding,
			y = (u - f) / 2 + f + k * u,
			x = (u - f) / 2 - k * u,
			T = void 0,
			S = void 0,
			W = void 0,
			O = void 0;
			e.strokeStyle = t.colorStrokeTicks || s[0],
			a *= w,
			c ? (S = g + h - m - v + a / 2, O = S - p - a, o && (W = T = we(b + x), Z(e, T, S, W, O)), n && (W = T = we(b + y), Z(e, T, S, W, O))) : (T = b + m + v - a / 2, W = T + p + a, o && (O = S = we(g + x), Z(e, T, S, W, O)), n && (O = S = we(g + y), Z(e, T, S, W, O)))
		}
	}
	function Z(e, t, i, r, o) {
		e.beginPath(),
		e.moveTo(t, i),
		e.lineTo(r, o),
		e.stroke(),
		e.closePath()
	}
	function K(e, t) {
		var i = Te.prepareTicks(t),
		r = le(i, 2),
		o = r[0],
		n = r[1],
		a = [],
		l = t.minValue,
		s = Math.abs(t.minorTicks) || 0,
		d = s ? (t.maxValue - t.minValue) / (s * (t.majorTicks.length - 1)) : 0;
		if (s)
			if (t.exactTicks)
				for (var c = t.majorTicks[0] % s || 0; l < t.maxValue; l += s)
					a.push(c + l);
			else
				for (; l < t.maxValue; l += d)
					a.push(l);
		J(e, t.colorMinorTicks || t.colorStrokeTicks, a, t.minValue, t.maxValue, o, n, 1, t.ticksWidthMinor / 100)
	}
	function Q(e, t) {
		var i = e.barDimensions,
		r = i.isVertical,
		o = i.length,
		n = i.width,
		a = i.barWidth,
		l = i.barMargin,
		s = i.barOffset,
		d = i.X,
		c = i.Y,
		h = i.ticksLength,
		u = i.ticksPadding,
		f = t.maxValue - t.minValue,
		m = f / (t.majorTicks.length - 1),
		v = t.exactTicks ? t.majorTicks : t.majorTicks.map(function (e, i) {
				return t.minValue + m * i
			}),
		b = v.length,
		g = "right" !== t.numberSide,
		p = "left" !== t.numberSide,
		w = t.fontNumbersSize * n / 200,
		k = 0,
		y = (t.ticksWidth / 100 + 2 * u) * n,
		x = (n - a) / 2 - y,
		T = (n - a) / 2 + a + y,
		S = void 0,
		W = void 0,
		O = void 0,
		V = void 0,
		P = t.colorNumbers instanceof Array ? t.colorNumbers : new Array(b).fill(t.colorNumbers),
		M = t.numbersMargin / 100 * n;
		for (e.font = Te.font(t, "Numbers", n / 200), e.lineWidth = 0, e.textAlign = "center"; k < b; k++)
			e.fillStyle = P[k], V = t.majorTicks[k], O = t.exactTicks ? h * ((v[k] - t.minValue) / f) : k * h / (b - 1), r ? (W = c + o - l - s - O + w / 3, g && (e.textAlign = "right", e.fillText(V, d + x - M, W)), p && (e.textAlign = "left", e.fillText(V, d + T + M, W))) : (e.measureText(V).width, S = d + l + s + O, g && e.fillText(V, S, c + x - M), p && e.fillText(V, S, c + T + w + M))
	}
	function ee(e, t) {
		if (t.title) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.baseX,
			l = i.baseY,
			s = i.titleMargin,
			d = t.fontTitleSize * o / 200,
			c = we(a + (r ? o : n) / 2),
			h = we(l + s / 2 - (r ? d : d / 2) - .025 * (r ? n : o));
			e.save(),
			e.textAlign = "center",
			e.fillStyle = t.colorTitle,
			e.font = Te.font(t, "Title", o / 200),
			e.lineWidth = 0,
			e.fillText(t.title, c, h, r ? o : n)
		}
	}
	function te(e, t) {
		if (t.units) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.baseX,
			l = i.baseY,
			s = i.unitsMargin,
			d = t.fontUnitsSize * o / 200,
			c = we(a + (r ? o : n) / 2),
			h = we(l + (r ? n : o) + s / 2 - d / 2);
			e.save(),
			e.textAlign = "center",
			e.fillStyle = t.colorUnits,
			e.font = Te.font(t, "Units", o / 200),
			e.lineWidth = 0,
			e.fillText(t.units, c, h, r ? o : n)
		}
	}
	function ie(e, t) {
		if (t.needle) {
			var i = e.barDimensions,
			r = i.isVertical,
			o = i.width,
			n = i.length,
			a = i.barWidth,
			l = i.barOffset,
			s = i.barMargin,
			d = i.ticksLength,
			c = i.X,
			h = i.Y,
			u = i.ticksPadding,
			f = "right" !== t.needleSide,
			m = "left" !== t.needleSide,
			v = d * (Te.normalizedValue(t).indented - t.minValue) / (t.maxValue - t.minValue),
			b = (t.ticksWidth / 100 + u) * o,
			g = a / 2 + b,
			p = g * (t.needleEnd / 100),
			w = void 0,
			k = void 0,
			y = void 0,
			x = void 0,
			T = "arrow" === t.needleType.toLowerCase() ? ne : oe,
			S = (o - a) / 2,
			W = g * (t.needleStart / 100),
			O = S - b - W,
			V = S + a + b + W;
			e.save(),
			Te.drawNeedleShadow(e, t),
			r ? (y = we(h + n - s - l - v), f && (w = we(c + O), k = w + p, T(e, t, w, y, k, y, p)), m && (w = we(c + V), k = w - p, T(e, t, w, y, k, y, p, !0))) : (w = we(c + s + l + v), f && (y = we(h + O), x = y + p, T(e, t, w, y, w, x, p)), m && (y = we(h + V), x = y - p, T(e, t, w, y, w, x, p, !0))),
			e.restore()
		}
	}
	function re(e, t, i, r) {
		return t.colorNeedleEnd ? Te.linearGradient(e, r ? t.colorNeedleEnd : t.colorNeedle, r ? t.colorNeedle : t.colorNeedleEnd, i, !e.barDimensions.isVertical) : t.colorNeedle
	}
	function oe(e, t, i, r, o, n, a, l) {
		e.lineWidth = t.needleWidth,
		e.strokeStyle = re(e, t, a, l),
		e.beginPath(),
		e.moveTo(i, r),
		e.lineTo(o, n),
		e.stroke(),
		e.closePath()
	}
	function ne(e, t, i, r, o, n, a, l) {
		var s = we(.4 * a),
		d = a - s,
		c = i === o,
		h = t.needleWidth / 2;
		e.fillStyle = re(e, t, a, l),
		e.beginPath(),
		c ? (r > n && (d *= -1), e.moveTo(i - h, r), e.lineTo(i + h, r), e.lineTo(i + h, r + d), e.lineTo(i, n), e.lineTo(i - h, r + d), e.lineTo(i - h, r)) : (i > o && (d *= -1), e.moveTo(i, r - h), e.lineTo(i, r + h), e.lineTo(i + d, r + h), e.lineTo(o, r), e.lineTo(i + d, r - h), e.lineTo(i, r - h)),
		e.fill(),
		e.closePath()
	}
	function ae(e, t, i, r, o, n, a) {
		var l = (parseFloat(t.fontValueSize) || 0) * n / 200,
		s = (.11 * a - l) / 2;
		e.barDimensions.isVertical && Te.drawValueBox(e, t, i, r + n / 2, o + a - l - s, n)
	}
	var le = function () {
		function e(e, t) {
			var i = [],
			r = !0,
			o = !1,
			n = void 0;
			try {
				for (var a, l = e[Symbol.iterator](); !(r = (a = l.next()).done) && (i.push(a.value), !t || i.length !== t); r = !0);
			} catch (e) {
				o = !0,
				n = e
			}
			finally {
				try {
					!r && l.return  && l.return ()
				}
				finally {
					if (o)
						throw n
				}
			}
			return i
		}
		return function (t, i) {
			if (Array.isArray(t))
				return t;
			if (Symbol.iterator in Object(t))
				return e(t, i);
			throw new TypeError("Invalid attempt to destructure non-iterable instance")
		}
	}
	(),
	se = function e(t, i, r) {
		null === t && (t = Function.prototype);
		var o = Object.getOwnPropertyDescriptor(t, i);
		if (void 0 === o) {
			var n = Object.getPrototypeOf(t);
			return null === n ? void 0 : e(n, i, r)
		}
		if ("value" in o)
			return o.value;
		var a = o.get;
		if (void 0 !== a)
			return a.call(r)
	},
	de = function e(t, i, r, o) {
		var n = Object.getOwnPropertyDescriptor(t, i);
		if (void 0 === n) {
			var a = Object.getPrototypeOf(t);
			null !== a && e(a, i, r, o)
		} else if ("value" in n && n.writable)
			n.value = r;
		else {
			var l = n.set;
			void 0 !== l && l.call(o, r)
		}
		return r
	},
	ce = function () {
		function e(e, t) {
			for (var i = 0; i < t.length; i++) {
				var r = t[i];
				r.enumerable = r.enumerable || !1,
				r.configurable = !0,
				"value" in r && (r.writable = !0),
				Object.defineProperty(e, r.key, r)
			}
		}
		return function (t, i, r) {
			return i && e(t.prototype, i),
			r && e(t, r),
			t
		}
	}
	();
	Object.assign || Object.defineProperty(Object, "assign", {
		enumerable : !1,
		configurable : !0,
		writable : !0,
		value : function (e, t) {
			if (void 0 === e || null === e)
				throw new TypeError("Cannot convert first argument to object");
			for (var i = Object(e), r = 1; r < arguments.length; r++) {
				var o = arguments[r];
				if (void 0 !== o && null !== o)
					for (var n = Object.keys(Object(o)), a = 0, l = n.length; a < l; a++) {
						var s = n[a],
						d = Object.getOwnPropertyDescriptor(o, s);
						void 0 !== d && d.enumerable && (i[s] = o[s])
					}
			}
			return i
		}
	}),
	Array.prototype.indexOf || (Array.prototype.indexOf = function (e, t) {
		var i;
		if (null === this)
			throw new TypeError('"this" is null or not defined');
		var r = Object(this),
		o = r.length >>> 0;
		if (0 === o)
			return -1;
		var n = +t || 0;
		if (Math.abs(n) === 1 / 0 && (n = 0), n >= o)
			return -1;
		for (i = Math.max(n >= 0 ? n : o - Math.abs(n), 0); i < o; ) {
			if (i in r && r[i] === e)
				return i;
			i++
		}
		return -1
	}),
	Array.prototype.fill || (Array.prototype.fill = function (e) {
		if (null === this)
			throw new TypeError("this is null or not defined");
		for (var t = Object(this), i = t.length >>> 0, r = arguments[1], o = r >> 0, n = o < 0 ? Math.max(i + o, 0) : Math.min(o, i), a = arguments[2], l = void 0 === a ? i : a >> 0, s = l < 0 ? Math.max(i + l, 0) : Math.min(l, i); n < s; )
			t[n] = e, n++;
		return t
	}),
	"undefined" == typeof window && (window = "undefined" == typeof global ? {}
		
		 : global);
	var he = function () {
		function e() {
			o(this, e),
			this._events = {},
			this.addListener = this.on,
			this.removeListener = this.off
		}
		return ce(e, [{
					key : "emit",
					value : function (e) {
						if (this._events[e]) {
							for (var t = 0, i = this._events[e].length, r = arguments.length, o = Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
								o[n - 1] = arguments[n];
							for (; t < i; t++)
								this._events[e][t] && this._events[e][t].apply(this, o)
						}
					}
				}, {
					key : "once",
					value : function (e) {
						for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
							i[r - 1] = arguments[r];
						for (var o = 0, n = i.length, a = this; o < n; o++)
							!function () {
								var t = i[o],
								r = function i() {
									a.off(e, i),
									t.apply(a, arguments)
								};
								i[o] = r
							}
						();
						this.on.apply(this, [e].concat(i))
					}
				}, {
					key : "on",
					value : function (e) {
						this._events[e] || (this._events[e] = []);
						for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
							this._events[e].push(arguments.length <= t + 1 ? void 0 : arguments[t + 1])
					}
				}, {
					key : "off",
					value : function (e) {
						if (this._events[e])
							for (var t = 0, i = arguments.length <= 1 ? 0 : arguments.length - 1; t < i; t++)
								for (var r = arguments.length <= t + 1 ? void 0 : arguments[t + 1], o = void 0; ~(o = this._events[e].indexOf(r)); )
									this._events[e].splice(o, 1)
					}
				}, {
					key : "removeAllListeners",
					value : function (e) {
						delete this._events[e]
					}
				}, {
					key : "listeners",
					get : function () {
						return this._events
					}
				}
			]),
		e
	}
	(),
	ue = n("requestAnimationFrame") || function (e) {
		return setTimeout(function () {
			return e((new Date).getTime())
		}, 1e3 / 60)
	},
	fe = {
		linear : function (e) {
			return e
		},
		quad : function (e) {
			return Math.pow(e, 2)
		},
		dequad : function (e) {
			return 1 - fe.quad(1 - e)
		},
		quint : function (e) {
			return Math.pow(e, 5)
		},
		dequint : function (e) {
			return 1 - Math.pow(1 - e, 5)
		},
		cycle : function (e) {
			return 1 - Math.sin(Math.acos(e))
		},
		decycle : function (e) {
			return Math.sin(Math.acos(1 - e))
		},
		bounce : function (e) {
			return 1 - fe.debounce(1 - e)
		},
		debounce : function (e) {
			for (var t = 0, i = 1; 1; t += i, i /= 2)
				if (e >= (7 - 4 * t) / 11)
					return -Math.pow((11 - 6 * t - 11 * e) / 4, 2) + Math.pow(i, 2)
		},
		elastic : function (e) {
			return 1 - fe.delastic(1 - e)
		},
		delastic : function (e) {
			return Math.pow(2, 10 * (e - 1)) * Math.cos(20 * Math.PI * 1.5 / 3 * e)
		}
	},
	me = function () {
		function e() {
			var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "linear",
			i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
			r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
			n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
			if (o(this, e), this.duration = i, this.rule = t, this.draw = r, this.end = n, "function" != typeof this.draw)
				throw new TypeError("Invalid animation draw callback:", r);
			if ("function" != typeof this.end)
				throw new TypeError("Invalid animation end callback:", n)
		}
		return ce(e, [{
					key : "animate",
					value : function (e, t) {
						var i = this;
						this.frame && this.cancel();
						var r = window.performance && window.performance.now ? window.performance.now() : n("animationStartTime") || Date.now();
						e = e || this.draw,
						t = t || this.end,
						this.draw = e,
						this.end = t,
						this.frame = ue(function (o) {
								return a(o, e, r, fe[i.rule] || i.rule, i.duration, t, i)
							})
					}
				}, {
					key : "cancel",
					value : function () {
						if (this.frame) {
							(n("cancelAnimationFrame") || function (e) {})(this.frame),
							this.frame = null
						}
					}
				}, {
					key : "destroy",
					value : function () {
						this.cancel(),
						this.draw = null,
						this.end = null
					}
				}
			]),
		e
	}
	();
	me.rules = fe;
	var ve = function () {
		function t(i, r, n) {
			o(this, t),
			this.options = i,
			this.element = r.toLowerCase(),
			this.type = t.toDashed(n),
			this.Type = e[n],
			this.mutationsObserved = !1,
			this.isObservable = !!window.MutationObserver,
			window.GAUGES_NO_AUTO_INIT || t.domReady(this.traverse.bind(this))
		}
		return ce(t, [{
					key : "isValidNode",
					value : function (e) {
						return !(!e.tagName || e.tagName.toLowerCase() !== this.element || e.getAttribute("data-type") !== this.type)
					}
				}, {
					key : "traverse",
					value : function () {
						for (var e = document.getElementsByTagName(this.element), t = 0, i = e.length; t < i; t++)
							this.process(e[t]);
						this.isObservable && !this.mutationsObserved && (new MutationObserver(this.observe.bind(this)).observe(document.body, {
								childList : !0,
								subtree : !0,
								attributes : !0,
								characterData : !0,
								attributeOldValue : !0,
								characterDataOldValue : !0
							}), this.mutationsObserved = !0)
					}
				}, {
					key : "observe",
					value : function (e) {
						for (var t = 0, i = e.length; t < i; t++) {
							var r = e[t];
							if ("attributes" === r.type && "data-type" === r.attributeName && this.isValidNode(r.target) && r.oldValue !== this.type)
								setTimeout(this.process.bind(this, r.target));
							else if (r.addedNodes && r.addedNodes.length)
								for (var o = 0, n = r.addedNodes.length; o < n; o++)
									setTimeout(this.process.bind(this, r.addedNodes[o]))
						}
					}
				}, {
					key : "process",
					value : function (e) {
						var i = this;
						if (!this.isValidNode(e))
							return null;
						var r = void 0,
						o = JSON.parse(JSON.stringify(this.options)),
						n = null;
						for (r in o)
							if (o.hasOwnProperty(r)) {
								var a = t.toAttributeName(r),
								l = t.parse(e.getAttribute(a));
								null !== l && void 0 !== l && (o[r] = l)
							}
						return o.renderTo = e,
						n = new this.Type(o),
						n.draw && n.draw(),
						this.isObservable ? (n.observer = new MutationObserver(function (r) {
									r.forEach(function (r) {
										if ("attributes" === r.type) {
											var o = r.attributeName.toLowerCase(),
											a = e.getAttribute(o).toLowerCase();
											if ("data-type" === o && a && a !== i.type)
												n.observer.disconnect(), delete n.observer, n.destroy && n.destroy();
											else if ("data-" === o.substr(0, 5)) {
												var l = o.substr(5).split("-").map(function (e, t) {
														return t ? e.charAt(0).toUpperCase() + e.substr(1) : e
													}).join(""),
												s = {};
												s[l] = t.parse(e.getAttribute(r.attributeName)),
												"value" === l ? n && (n.value = s[l]) : n.update && n.update(s)
											}
										}
									})
								}), n.observer.observe(e, {
								attributes : !0
							}), n) : n
					}
				}
			], [{
					key : "parse",
					value : function (e) {
						if ("true" === e)
							return !0;
						if ("false" === e)
							return !1;
						if ("undefined" !== e) {
							if ("null" === e)
								return null;
							if (/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))
								return e.split(",");
							try {
								return JSON.parse(e)
							} catch (e) {}
							
							return e
						}
					}
				}, {
					key : "toDashed",
					value : function (e) {
						for (var t = e.split(/(?=[A-Z])/), i = 1, r = t.length, o = t[0].toLowerCase(); i < r; i++)
							o += "-" + t[i].toLowerCase();
						return o
					}
				}, {
					key : "toCamelCase",
					value : function (e) {
						for (var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], i = e.split(/-/), r = 0, o = i.length, n = ""; r < o; r++)
							n += r || t ? i[r][0].toUpperCase() + i[r].substr(1).toLowerCase() : i[r].toLowerCase();
						return n
					}
				}, {
					key : "toAttributeName",
					value : function (e) {
						return "data-" + t.toDashed(e)
					}
				}, {
					key : "domReady",
					value : function (e) {
						if (/comp|inter|loaded/.test((window.document || {}).readyState + ""))
							return e();
						window.addEventListener ? window.addEventListener("DOMContentLoaded", e, !1) : window.attachEvent && window.attachEvent("onload", e)
					}
				}
			]),
		t
	}
	(),
	be = function () {
		function e(t, i, r) {
			o(this, e),
			e.collection.push(this),
			this.width = i || 0,
			this.height = r || 0,
			this.element = t,
			this.init()
		}
		return ce(e, [{
					key : "init",
					value : function () {
						var t = e.pixelRatio;
						this.element.width = this.width * t,
						this.element.height = this.height * t,
						this.element.style.width = this.width + "px",
						this.element.style.height = this.height + "px",
						this.elementClone = this.element.cloneNode(!0),
						this.context = this.element.getContext("2d"),
						this.contextClone = this.elementClone.getContext("2d"),
						this.drawWidth = this.element.width,
						this.drawHeight = this.element.height,
						this.drawX = this.drawWidth / 2,
						this.drawY = this.drawHeight / 2,
						this.minSide = this.drawX < this.drawY ? this.drawX : this.drawY,
						this.elementClone.initialized = !1,
						this.contextClone.translate(this.drawX, this.drawY),
						this.contextClone.save(),
						this.context.translate(this.drawX, this.drawY),
						this.context.save(),
						this.context.max = this.contextClone.max = this.minSide,
						this.context.maxRadius = this.contextClone.maxRadius = null
					}
				}, {
					key : "destroy",
					value : function () {
						var t = e.collection.indexOf(this);
						~t && e.collection.splice(t, 1),
						this.context.clearRect(-this.drawX, -this.drawY, this.drawWidth, this.drawHeight),
						this.context.max = null,
						delete this.context.max,
						this.context.maxRadius = null,
						delete this.context.maxRadius,
						this.context = null,
						this.contextClone = null,
						this.elementClone = null,
						this.element = null,
						this.onRedraw = null
					}
				}, {
					key : "commit",
					value : function () {
						var t = e.pixelRatio;
						return 1 !== t && (this.contextClone.scale(t, t), this.contextClone.save()),
						this
					}
				}, {
					key : "redraw",
					value : function () {
						return this.init(),
						this.onRedraw && this.onRedraw(),
						this
					}
				}
			], [{
					key : "redraw",
					value : function () {
						for (var t = 0, i = e.collection.length; t < i; t++)
							e.collection[t].redraw()
					}
				}, {
					key : "pixelRatio",
					get : function () {
						return window.devicePixelRatio || 1
					}
				}
			]),
		e
	}
	();
	be.collection = [],
	window.matchMedia && window.matchMedia("screen and (min-resolution: 2dppx)").addListener(be.redraw);
	var ge = {
		renderTo : null,
		width : 0,
		height : 0,
		minValue : 0,
		maxValue : 100,
		value : 0,
		units : !1,
		exactTicks : !1,
		majorTicks : [0, 20, 40, 60, 80, 100],
		minorTicks : 10,
		strokeTicks : !0,
		animatedValue : !1,
		animateOnInit : !1,
		title : !1,
		borders : !0,
		numbersMargin : 1,
		listeners : null,
		valueInt : 3,
		valueDec : 2,
		majorTicksInt : 1,
		majorTicksDec : 0,
		animation : !0,
		animationDuration : 500,
		animationRule : "cycle",
		colorPlate : "#fff",
		colorPlateEnd : "",
		colorMajorTicks : "#444",
		colorMinorTicks : "#666",
		colorStrokeTicks : "",
		colorTitle : "#888",
		colorUnits : "#888",
		colorNumbers : "#444",
		colorNeedle : "rgba(240,128,128,1)",
		colorNeedleEnd : "rgba(255,160,122,.9)",
		colorValueText : "#444",
		colorValueTextShadow : "rgba(0,0,0,0.3)",
		colorBorderShadow : "rgba(0,0,0,0.5)",
		colorBorderOuter : "#ddd",
		colorBorderOuterEnd : "#aaa",
		colorBorderMiddle : "#eee",
		colorBorderMiddleEnd : "#f0f0f0",
		colorBorderInner : "#fafafa",
		colorBorderInnerEnd : "#ccc",
		colorValueBoxRect : "#888",
		colorValueBoxRectEnd : "#666",
		colorValueBoxBackground : "#babab2",
		colorValueBoxShadow : "rgba(0,0,0,1)",
		colorNeedleShadowUp : "rgba(2,255,255,0.2)",
		colorNeedleShadowDown : "rgba(188,143,143,0.45)",
		colorBarStroke : "#222",
		colorBar : "#ccc",
		colorBarProgress : "#888",
		colorBarShadow : "#000",
		fontNumbers : "Arial",
		fontTitle : "Arial",
		fontUnits : "Arial",
		fontValue : "Arial",
		fontNumbersSize : 25,
		fontTitleSize : 24,
		fontUnitsSize : 22,
		fontValueSize : 26,
		fontNumbersStyle : "normal",
		fontTitleStyle : "normal",
		fontUnitsStyle : "normal",
		fontValueStyle : "normal",
		fontNumbersWeight : "normal",
		fontTitleWeight : "normal",
		fontUnitsWeight : "normal",
		fontValueWeight : "normal",
		needle : !0,
		needleShadow : !0,
		needleType : "arrow",
		needleStart : 5,
		needleEnd : 85,
		needleWidth : 4,
		borderOuterWidth : 3,
		borderMiddleWidth : 3,
		borderInnerWidth : 3,
		borderShadowWidth : 3,
		valueBox : !0,
		valueBoxStroke : 5,
		valueBoxWidth : 0,
		valueText : "",
		valueTextShadow : !0,
		valueBoxBorderRadius : 2.5,
		highlights : [{
				from : 20,
				to : 60,
				color : "#eee"
			}, {
				from : 60,
				to : 80,
				color : "#ccc"
			}, {
				from : 80,
				to : 100,
				color : "#999"
			}
		],
		highlightsWidth : 15,
		barWidth : 20,
		barStrokeWidth : 0,
		barProgress : !0,
		barShadow : 0
	};
	l.prototype = Object.create(Array.prototype),
	l.prototype.constructor = l,
	l.prototype.get = function (e) {
		if ("string" == typeof e)
			for (var t = 0, i = this.length; t < i; t++) {
				var r = this[t].options.renderTo.tagName ? this[t].options.renderTo : document.getElementById(this[t].options.renderTo || "");
				if (r.getAttribute("id") === e)
					return this[t]
			}
		else if ("number" == typeof e)
			return this[e];
		return null
	};
	var pe = "2.1.4",
	we = Math.round,
	ke = Math.abs,
	ye = new l;
	ye.version = pe;
	var xe = function (t) {
		function n(t) {
			o(this, n);
			var r = i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this)),
			a = r.constructor.name;
			if ("BaseGauge" === a)
				throw new TypeError("Attempt to instantiate abstract class!");
			if (ye.push(r), t.listeners && Object.keys(t.listeners).forEach(function (e) {
					(t.listeners[e]instanceof Array ? t.listeners[e] : [t.listeners[e]]).forEach(function (t) {
						r.on(e, t)
					})
				}), r.version = pe, r.type = e[a] || n, r.initialized = !1, t.minValue = parseFloat(t.minValue), t.maxValue = parseFloat(t.maxValue), t.value = parseFloat(t.value) || 0, t.borders || (t.borderInnerWidth = t.borderMiddleWidth = t.borderOuterWidth = 0), !t.renderTo)
				throw TypeError("Canvas element was not specified when creating the Gauge object!");
			var l = t.renderTo.tagName ? t.renderTo : document.getElementById(t.renderTo);
			if (!(l instanceof HTMLCanvasElement))
				throw TypeError("Given gauge canvas element is invalid!");
			return t.width = parseFloat(t.width) || 0,
			t.height = parseFloat(t.height) || 0,
			t.width && t.height || (t.width || (t.width = l.parentNode ? l.parentNode.offsetWidth : l.offsetWidth), t.height || (t.height = l.parentNode ? l.parentNode.offsetHeight : l.offsetHeight)),
			r.options = t || {},
			r.options.animateOnInit && (r._value = r.options.value, r.options.value = r.options.minValue),
			r.canvas = new be(l, t.width, t.height),
			r.canvas.onRedraw = r.draw.bind(r),
			r.animation = new me(t.animationRule, t.animationDuration),
			r
		}
		return r(n, t),
		ce(n, [{
					key : "update",
					value : function (e) {
						return Object.assign(this.options, this.type.configure(e || {})),
						this.canvas.width = this.options.width,
						this.canvas.height = this.options.height,
						this.animation.rule = this.options.animationRule,
						this.animation.duration = this.options.animationDuration,
						this.canvas.redraw(),
						this
					}
				}, {
					key : "destroy",
					value : function () {
						var e = ye.indexOf(this);
						~e && ye.splice(e, 1),
						this.canvas.destroy(),
						this.canvas = null,
						this.animation.destroy(),
						this.animation = null,
						this.emit("destroy")
					}
				}, {
					key : "draw",
					value : function () {
						return this.options.animateOnInit && !this.initialized && (this.value = this._value, this.initialized = !0, this.emit("init")),
						this.emit("render"),
						this
					}
				}, {
					key : "value",
					set : function (e) {
						var t = this;
						e = n.ensureValue(e, this.options.minValue);
						var i = this.options.value;
						if (e !== i)
							if (this.options.animation) {
								if (this.animation.frame && (this.options.value = this._value, this._value === e))
									return this.animation.cancel(), void delete this._value;
								void 0 === this._value && (this._value = e),
								this.emit("animationStart"),
								this.animation.animate(function (r) {
									var o = i + (e - i) * r;
									t.options.animatedValue && t.emit("value", o, t.value),
									t.options.value = o,
									t.draw(),
									t.emit("animate", r, t.options.value)
								}, function () {
									void 0 !== t._value && (t.emit("value", t._value, t.value), t.options.value = t._value, delete t._value),
									t.draw(),
									t.emit("animationEnd")
								})
							} else
								this.emit("value", e, this.value), this.options.value = e, this.draw()
					},
					get : function () {
						return void 0 === this._value ? this.options.value : this._value
					}
				}
			], [{
					key : "configure",
					value : function (e) {
						return e
					}
				}, {
					key : "initialize",
					value : function (e, t) {
						return new ve(t, "canvas", e)
					}
				}, {
					key : "fromElement",
					value : function (e) {
						var t = ve.toCamelCase(e.getAttribute("data-type")),
						i = e.attributes,
						r = 0,
						o = i.length,
						n = {};
						if (t) {
							for (/Gauge$/.test(t) || (t += "Gauge"); r < o; r++)
								n[ve.toCamelCase(i[r].name.replace(/^data-/, ""), !1)] = ve.parse(i[r].value);
							new ve(n, e.tagName, t).process(e)
						}
					}
				}, {
					key : "ensureValue",
					value : function (e) {
						var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
						return e = parseFloat(e),
						!isNaN(e) && isFinite(e) || (e = parseFloat(t) || 0),
						e
					}
				}, {
					key : "version",
					get : function () {
						return pe
					}
				}
			]),
		n
	}
	(he);
	void 0 !== e && (e.BaseGauge = xe, e.gauges = (window.document || {}).gauges = ye);
	var Te = {
		roundRect : c,
		padValue : h,
		formatMajorTickNumber : u,
		radians : f,
		radialPoint : m,
		linearGradient : v,
		drawNeedleShadow : g,
		drawValueBox : y,
		verifyError : s,
		prepareTicks : d,
		drawShadow : b,
		font : p,
		normalizedValue : x
	},
	Se = Math.PI,
	We = Se / 2,
	Oe = Object.assign({}, ge, {
			ticksAngle : 270,
			startAngle : 45,
			colorNeedleCircleOuter : "#f0f0f0",
			colorNeedleCircleOuterEnd : "#ccc",
			colorNeedleCircleInner : "#e8e8e8",
			colorNeedleCircleInnerEnd : "#f5f5f5",
			needleCircleSize : 10,
			needleCircleInner : !0,
			needleCircleOuter : !0,
			needleStart : 20,
			animationTarget : "needle",
			useMinPath : !1,
			barWidth : 0
		}),
	Ve = function (e) {
		function t(e) {
			return o(this, t),
			e = Object.assign({}, Oe, e || {}),
			i(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, t.configure(e)))
		}
		return r(t, e),
		ce(t, [{
					key : "draw",
					value : function () {
						try {
							var e = this.canvas,
							i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
							r = i[0],
							o = i[1],
							n = i[2],
							a = i[3],
							l = this.options;
							if ("needle" === l.animationTarget) {
								if (!e.elementClone.initialized) {
									var s = e.contextClone;
									s.clearRect(r, o, n, a),
									s.save(),
									this.emit("beforePlate"),
									W(s, l),
									this.emit("beforeHighlights"),
									O(s, l),
									this.emit("beforeMinorTicks"),
									V(s, l),
									this.emit("beforeMajorTicks"),
									M(s, l),
									this.emit("beforeNumbers"),
									j(s, l),
									this.emit("beforeTitle"),
									C(s, l),
									this.emit("beforeUnits"),
									N(s, l),
									e.elementClone.initialized = !0
								}
								this.canvas.commit(),
								e.context.clearRect(r, o, n, a),
								e.context.save(),
								e.context.drawImage(e.elementClone, r, o, n, a),
								e.context.save(),
								this.emit("beforeProgressBar"),
								R(e.context, l),
								this.emit("beforeValueBox"),
								_(e.context, l, I(this)),
								this.emit("beforeNeedle"),
								E(e.context, l)
							} else {
								var d = -Te.radians((l.value - l.minValue) / (l.maxValue - l.minValue) * l.ticksAngle);
								if (e.context.clearRect(r, o, n, a), e.context.save(), this.emit("beforePlate"), W(e.context, l), e.context.rotate(d), this.emit("beforeHighlights"), O(e.context, l), this.emit("beforeMinorTicks"), V(e.context, l), this.emit("beforeMajorTicks"), M(e.context, l), this.emit("beforeNumbers"), j(e.context, l), this.emit("beforeProgressBar"), R(e.context, l), e.context.rotate(-d), e.context.save(), !e.elementClone.initialized) {
									var c = e.contextClone;
									c.clearRect(r, o, n, a),
									c.save(),
									this.emit("beforeTitle"),
									C(c, l),
									this.emit("beforeUnits"),
									N(c, l),
									this.emit("beforeNeedle"),
									E(c, l),
									e.elementClone.initialized = !0
								}
								e.context.drawImage(e.elementClone, r, o, n, a)
							}
							this.emit("beforeValueBox"),
							_(e.context, l, I(this)),
							se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "draw", this).call(this)
						} catch (e) {
							Te.verifyError(e)
						}
						return this
					}
				}, {
					key : "value",
					set : function (e) {
						e = xe.ensureValue(e, this.options.minValue),
						this.options.animation && 360 === this.options.ticksAngle && this.options.useMinPath && (this._value = e, e = this.options.value + ((e - this.options.value) % 360 + 540) % 360 - 180),
						de(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", e, this)
					},
					get : function () {
						return se(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), "value", this)
					}
				}
			], [{
					key : "configure",
					value : function (e) {
						return e.barWidth > 50 && (e.barWidth = 50),
						isNaN(e.startAngle) && (e.startAngle = 45),
						isNaN(e.ticksAngle) && (e.ticksAngle = 270),
						e.ticksAngle > 360 && (e.ticksAngle = 360),
						e.ticksAngle < 0 && (e.ticksAngle = 0),
						e.startAngle < 0 && (e.startAngle = 0),
						e.startAngle > 360 && (e.startAngle = 360),
						e
					}
				}
			]),
		t
	}
	(xe);
	void 0 !== e && (e.RadialGauge = Ve),
	xe.initialize("RadialGauge", Oe);
	var Pe = Object.assign({}, ge, {
			borderRadius : 0,
			barBeginCircle : 30,
			colorBarEnd : "",
			colorBarProgressEnd : "",
			needleWidth : 6,
			tickSide : "both",
			needleSide : "both",
			numberSide : "both",
			ticksWidth : 10,
			ticksWidthMinor : 5,
			ticksPadding : 5,
			barLength : 85,
			fontTitleSize : 26,
			highlightsWidth : 10
		}),
	Me = function (e) {
		function n(e) {
			return o(this, n),
			e = Object.assign({}, Pe, e || {}),
			i(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, n.configure(e)))
		}
		return r(n, e),
		ce(n, [{
					key : "draw",
					value : function () {
						try {
							var e = this.canvas,
							i = [-e.drawX, -e.drawY, e.drawWidth, e.drawHeight],
							r = i[0],
							o = i[1],
							a = i[2],
							l = i[3],
							s = this.options;
							if (!e.elementClone.initialized) {
								var d = e.contextClone;
								d.clearRect(r, o, a, l),
								d.save(),
								this.emit("beforePlate"),
								this.drawBox = L(d, s, r, o, a, l),
								this.emit("beforeBar"),
								X.apply(void 0, [d, s].concat(t(this.drawBox))),
								e.context.barDimensions = d.barDimensions,
								this.emit("beforeHighlights"),
								q(d, s),
								this.emit("beforeMinorTicks"),
								K(d, s),
								this.emit("beforeMajorTicks"),
								$(d, s),
								this.emit("beforeNumbers"),
								Q(d, s),
								this.emit("beforeTitle"),
								ee(d, s),
								this.emit("beforeUnits"),
								te(d, s),
								e.elementClone.initialized = !0
							}
							this.canvas.commit(),
							e.context.clearRect(r, o, a, l),
							e.context.save(),
							e.context.drawImage(e.elementClone, r, o, a, l),
							e.context.save(),
							this.emit("beforeProgressBar"),
							U.apply(void 0, [e.context, s].concat(t(this.drawBox))),
							this.emit("beforeNeedle"),
							ie(e.context, s),
							this.emit("beforeValueBox"),
							ae.apply(void 0, [e.context, s, s.animatedValue ? this.options.value : this.value].concat(t(this.drawBox))),
							se(n.prototype.__proto__ || Object.getPrototypeOf(n.prototype), "draw", this).call(this)
						} catch (e) {
							Te.verifyError(e)
						}
						return this
					}
				}
			], [{
					key : "configure",
					value : function (e) {
						return e.barStrokeWidth >= e.barWidth && (e.barStrokeWidth = we(e.barWidth / 2)),
						e.hasLeft = Y("right", e),
						e.hasRight = Y("left", e),
						e.value > e.maxValue && (e.value = e.maxValue),
						e.value < e.minValue && (e.value = e.minValue),
						xe.configure(e)
					}
				}
			]),
		n
	}
	(xe);
	void 0 !== e && (e.LinearGauge = Me),
	xe.initialize("LinearGauge", Pe),
	"undefined" != typeof module && Object.assign(e, {
		Collection : l,
		GenericOptions : ge,
		Animation : me,
		BaseGauge : xe,
		drawings : Te,
		SmartCanvas : be,
		DomObserver : ve,
		vendorize : n
	})
}

("undefined" != typeof module ? module.exports : window);



//******************************* TWEEN ************************************************
// tween.js r2 - http://github.com/sole/tween.js
var TWEEN=TWEEN||function(){var a,e,c,d,f=[];return{start:function(g){c=setInterval(this.update,1E3/(g||60))},stop:function(){clearInterval(c)},add:function(g){f.push(g)},getAll:function(){return f},removeAll:function(){f=[]},remove:function(g){a=f.indexOf(g);a!==-1&&f.splice(a,1)},update:function(){a=0;e=f.length;for(d=(new Date).getTime();a<e;)if(f[a].update(d))a++;else{f.splice(a,1);e--}}}}();
TWEEN.Tween=function(a){var e={},c={},d={},f=1E3,g=0,j=null,n=TWEEN.Easing.Linear.EaseNone,k=null,l=null,m=null;this.to=function(b,h){if(h!==null)f=h;for(var i in b)if(a[i]!==null)d[i]=b[i];return this};this.start=function(){TWEEN.add(this);j=(new Date).getTime()+g;for(var b in d)if(a[b]!==null){e[b]=a[b];c[b]=d[b]-a[b]}return this};this.stop=function(){TWEEN.remove(this);return this};this.delay=function(b){g=b;return this};this.easing=function(b){n=b;return this};this.chain=function(b){k=b};this.onUpdate=
function(b){l=b;return this};this.onComplete=function(b){m=b;return this};this.update=function(b){var h,i;if(b<j)return true;b=(b-j)/f;b=b>1?1:b;i=b;for(h in c)a[h]=e[h]+c[h]*i;l!==null&&l.call(a,i);if(b==1){m!==null&&m.call(a);k!==null&&k.start();return false}return true}};TWEEN.Easing={Linear:{},Quadratic:{},Cubic:{},Quartic:{},Quintic:{},Sinusoidal:{},Exponential:{},Circular:{},Elastic:{},Back:{},Bounce:{}};TWEEN.Easing.Linear.EaseNone=function(a){return a};
TWEEN.Easing.Quadratic.EaseIn=function(a){return a*a};TWEEN.Easing.Quadratic.EaseOut=function(a){return-a*(a-2)};TWEEN.Easing.Quadratic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a;return-0.5*(--a*(a-2)-1)};TWEEN.Easing.Cubic.EaseIn=function(a){return a*a*a};TWEEN.Easing.Cubic.EaseOut=function(a){return--a*a*a+1};TWEEN.Easing.Cubic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a;return 0.5*((a-=2)*a*a+2)};TWEEN.Easing.Quartic.EaseIn=function(a){return a*a*a*a};
TWEEN.Easing.Quartic.EaseOut=function(a){return-(--a*a*a*a-1)};TWEEN.Easing.Quartic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a;return-0.5*((a-=2)*a*a*a-2)};TWEEN.Easing.Quintic.EaseIn=function(a){return a*a*a*a*a};TWEEN.Easing.Quintic.EaseOut=function(a){return(a-=1)*a*a*a*a+1};TWEEN.Easing.Quintic.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*a*a*a;return 0.5*((a-=2)*a*a*a*a+2)};TWEEN.Easing.Sinusoidal.EaseIn=function(a){return-Math.cos(a*Math.PI/2)+1};
TWEEN.Easing.Sinusoidal.EaseOut=function(a){return Math.sin(a*Math.PI/2)};TWEEN.Easing.Sinusoidal.EaseInOut=function(a){return-0.5*(Math.cos(Math.PI*a)-1)};TWEEN.Easing.Exponential.EaseIn=function(a){return a==0?0:Math.pow(2,10*(a-1))};TWEEN.Easing.Exponential.EaseOut=function(a){return a==1?1:-Math.pow(2,-10*a)+1};TWEEN.Easing.Exponential.EaseInOut=function(a){if(a==0)return 0;if(a==1)return 1;if((a*=2)<1)return 0.5*Math.pow(2,10*(a-1));return 0.5*(-Math.pow(2,-10*(a-1))+2)};
TWEEN.Easing.Circular.EaseIn=function(a){return-(Math.sqrt(1-a*a)-1)};TWEEN.Easing.Circular.EaseOut=function(a){return Math.sqrt(1- --a*a)};TWEEN.Easing.Circular.EaseInOut=function(a){if((a/=0.5)<1)return-0.5*(Math.sqrt(1-a*a)-1);return 0.5*(Math.sqrt(1-(a-=2)*a)+1)};TWEEN.Easing.Elastic.EaseIn=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);return-(c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/d))};
TWEEN.Easing.Elastic.EaseOut=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);return c*Math.pow(2,-10*a)*Math.sin((a-e)*2*Math.PI/d)+1};
TWEEN.Easing.Elastic.EaseInOut=function(a){var e,c=0.1,d=0.4;if(a==0)return 0;if(a==1)return 1;d||(d=0.3);if(!c||c<1){c=1;e=d/4}else e=d/(2*Math.PI)*Math.asin(1/c);if((a*=2)<1)return-0.5*c*Math.pow(2,10*(a-=1))*Math.sin((a-e)*2*Math.PI/d);return c*Math.pow(2,-10*(a-=1))*Math.sin((a-e)*2*Math.PI/d)*0.5+1};TWEEN.Easing.Back.EaseIn=function(a){return a*a*(2.70158*a-1.70158)};TWEEN.Easing.Back.EaseOut=function(a){return(a-=1)*a*(2.70158*a+1.70158)+1};
TWEEN.Easing.Back.EaseInOut=function(a){if((a*=2)<1)return 0.5*a*a*(3.5949095*a-2.5949095);return 0.5*((a-=2)*a*(3.5949095*a+2.5949095)+2)};TWEEN.Easing.Bounce.EaseIn=function(a){return 1-TWEEN.Easing.Bounce.EaseOut(1-a)};TWEEN.Easing.Bounce.EaseOut=function(a){return(a/=1)<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375};
TWEEN.Easing.Bounce.EaseInOut=function(a){if(a<0.5)return TWEEN.Easing.Bounce.EaseIn(a*2)*0.5;return TWEEN.Easing.Bounce.EaseOut(a*2-1)*0.5+0.5};





//******************************* SCANBOT ************************************************
	/*
	let service, services, serviceName0, serviceName;
	let bluetoothGattServer; // {connected: true, device: BluetoothDevice, …}
	let characteristic;
	let bluetoothDevice;
	
	// primary service UUID
	const glmServiceUuid = ["02a6c0d0-0451-4000-b000-fb3210111989"]  //Copilot
	const characteristicUuid =  ["02a6c0d1-0451-4000-b000-fb3210111989"] 
	const filters = [ { services: [glmServiceUuid] }  ];//const filters = [ { namePrefix:"Bosch PLR"},{ services:[glmServiceUuid] }, ];

	function time(text) { console.log('[' + new Date().toJSON().substr(11, 8) + '] ' + text);}	
	
	// __________________________________ COMMANDs _____________________________________________________  
	let AutSyncEnabl = new Uint8Array([0xc0, 0x55, 0x02, 0x01, 0x00, 0x1a])	// [192, 85, 2, 1, 0, 26]
	let measureOn =    new Uint8Array([0xc0, 0x40, 0x01, 0x00, 0xfa])      	// 192  64  1  0  250 (Front edge) 
																			// 0: Front  1: Tripod  2: Rear  3: Pin
	let measureGet =   new Uint8Array([0xc0, 0x43, 0x00, 0x92])            	// 192  67  0  146
	let LaserOn =      new Uint8Array([0xc0, 0x41, 0x00, 0x96])      		// 192  65  0  150
	let LaserOff =     new Uint8Array([0xc0, 0x42, 0x00, 0x1E])      		// 192  66  0  30
	let BEEPOn =       new Uint8Array([0xc0, 0x45, 0x00, 0xd0]) 
	let BEEPOff =      new Uint8Array([0xc0, 0x46, 0x00, 0x58]) 		
	let backlightOn =  new Uint8Array([0xc0, 0x47, 0x00, 0x20])      		// 192  71  0  32 
	let backlightOff = new Uint8Array([0xc0, 0x48, 0x00, 0x62])      		// 192  72  0  98

	let GetDevName = new Uint8Array([0xc0, 0x05, 0x00, 0xC2]) 
	let GetDevicenfo = new Uint8Array([0xc0, 0x06, 0x00, 0x4A]) 

	//return characteristic.writeValue( measureOn );
	//function _3DSCAN(){try{setInterval(function () { console.log("->: measure"); return characteristic.writeValue( measureOn );}, 500);}	
	//catch(err){} }

	function setDeviceInfo(device) {
		let tableCells = document.querySelectorAll("#device-info td");
		tableCells[1].innerHTML = device.id;   //GjuBrRbmpPiPaVajqcSWKA==
		//tableCells[1].innerHTML = 'BlueTooth ' + (device.name).toString().substring(30,(device.name).length);     //device.name; //24:9f:89:41:3a:a0
		tableCells[2].innerHTML = device.name; // 'BlueTooth ' + (device.name).toString().substring((device.name).length-19,(device.name).length);     //device.name; //24:9f:89:41:3a:a0
		tableCells[3].innerHTML = device.gatt.connected; //2024-12-12T14:49:32.525Z
		tableCells[4].innerHTML = new Date().toISOString();
		console.log( '  serviceName/' + serviceName)
		console.log( '  serviceName/' + device.name)
		//console.log( '  serviceName0/' + serviceName0)
	}

	function longBeep() { console.log("Send: beep on, beep off");
		return characteristic.writeValue(new Uint8Array([0xc0, 0x45, 0x00, 0xd0]))          //turn beeper on
		.then(() => { return new Promise((resolve) => {
					  setTimeout(() => {  characteristic.writeValue(new Uint8Array([0xc0, 0x46, 0x00, 0x58])).then(resolve); }, 500);   });
		});
	}
	*/



	// let IP;
	// Add "https://api.ipify.org?format=json" to get the IP Address of user   // Displayin IP address on screen
	//$(document).ready(()=>{  $.getJSON("https://api.ipify.org?format=json",  function (data) {  // $("#gfg").html(data.ip);
	 			
				
				
	


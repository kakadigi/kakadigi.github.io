(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7406:function(e,t,i){"use strict";i.r(t);var r=i(5988),n=i(9008),s=i(5893);t.default=function(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{className:"jsx-1726086473",children:"Beranda - Karya Kami Digital"}),(0,s.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width",className:"jsx-1726086473"})]}),(0,s.jsx)(r.default,{id:"1726086473",children:["body.jsx-1726086473{font-size:80%;padding:20px;}","main.jsx-1726086473{height:80vh;width:60%;margin:0 auto;padding:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;resize:both;overflow:auto;}","main.jsx-1726086473 div.jsx-1726086473{width:50%;padding:20px;overflow:auto;}"]}),(0,s.jsx)("main",{className:"jsx-1726086473",children:(0,s.jsxs)("div",{className:"jsx-1726086473",children:[(0,s.jsx)("h1",{className:"jsx-1726086473",children:"Selamat Datang di Kakadigi!"}),(0,s.jsx)("em",{className:"jsx-1726086473",children:"Kami adalah tim pengembang Aplikasi Web dan Mobile Apps"})]})})]})}},3685:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(7406)}])},9008:function(e,t,i){e.exports=i(639)},4155:function(e){var t,i,r=e.exports={};function n(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(t===setTimeout)return setTimeout(e,0);if((t===n||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(i){try{return t.call(null,e,0)}catch(i){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:n}catch(e){t=n}try{i="function"===typeof clearTimeout?clearTimeout:s}catch(e){i=s}}();var u,c=[],a=!1,l=-1;function h(){a&&u&&(a=!1,u.length?c=u.concat(c):l=-1,c.length&&d())}function d(){if(!a){var e=o(h);a=!0;for(var t=c.length;t;){for(u=c,c=[];++l<t;)u&&u[l].run();l=-1,t=c.length}u=null,a=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===s||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function p(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];c.push(new f(e,t)),1!==c.length||a||o(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=p,r.addListener=p,r.once=p,r.off=p,r.removeListener=p,r.removeAllListeners=p,r.emit=p,r.prependListener=p,r.prependOnceListener=p,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},9887:function(e){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},4287:function(e,t,i){"use strict";var r=i(4155);function n(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var s="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},u=function(){function e(e){var t=void 0===e?{}:e,i=t.name,r=void 0===i?"stylesheet":i,n=t.optimizeForSpeed,u=void 0===n?s:n,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;c(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",c("boolean"===typeof u,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=u,this._isBrowser=l,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,i,r,u=e.prototype;return u.setOptimizeForSpeed=function(e){c("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),c(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},u.isOptimizeForSpeed=function(){return this._optimizeForSpeed},u.inject=function(){var e=this;if(c(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(s||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},u.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},u.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},u.insertRule=function(e,t){if(c(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(n){return s||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},u.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(n){s||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];c(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},u.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];c(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},u.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},u.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},u.makeStyleTag=function(e,t,i){t&&c(o(t),"makeStyleTag acceps only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var n=document.head||document.getElementsByTagName("head")[0];return i?n.insertBefore(r,i):n.appendChild(r),r},t=e,(i=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,i),r&&n(t,r),e}();function c(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=u},7884:function(e,t,i){"use strict";t.default=o;var r,n=i(7294);var s=new(((r=i(8122))&&r.__esModule?r:{default:r}).default);function o(e){return"undefined"===typeof window?(s.add(e),null):((0,n.useLayoutEffect)((function(){return s.add(e),function(){s.remove(e)}}),[e.id,String(e.dynamic)]),null)}o.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return s.computeId(t,i)})).join(" ")}},8122:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var r=s(i(9887)),n=s(i(4287));function s(e){return e&&e.__esModule?e:{default:e}}var o=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,r=void 0===i?null:i,s=t.optimizeForSpeed,o=void 0!==s&&s,u=t.isBrowser,c=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new n.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),r&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=c,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),r=i.styleId,n=i.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var s=n.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=s,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var r=this._fromServer&&this._fromServer[i];r?(r.parentNode.removeChild(r),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var n=String(i),s=t+n;return e[s]||(e[s]="jsx-"+(0,r.default)(t+"-"+n)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,r){this._isBrowser||(r=r.replace(/\/style/gi,"\\/style"));var n=i+r;return t[n]||(t[n]=r.replace(e,i)),t[n]}},t.getIdAndRules=function(e){var t=this,i=e.children,r=e.dynamic,n=e.id;if(r){var s=this.computeId(n,r);return{styleId:s,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,i)]}}return{styleId:this.computeId(n),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=o},5988:function(e,t,i){e.exports=i(7884)}},function(e){e.O(0,[774,888,179],(function(){return t=3685,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
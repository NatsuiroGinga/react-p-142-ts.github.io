var ut=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ft(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function C(){return C=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t},C.apply(this,arguments)}function F(t,n,i){return n in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function ct(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function K(t,n){for(var i=0;i<n.length;i++){var a=n[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function lt(t,n,i){return n&&K(t.prototype,n),i&&K(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function M(t,n){return M=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(a,l){return a.__proto__=l,a},M(t,n)}function st(t,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&M(t,n)}function T(t){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(i){return i.__proto__||Object.getPrototypeOf(i)},T(t)}function x(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function A(t){return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},A(t)}function tt(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function et(t,n){if(n&&(A(n)==="object"||typeof n=="function"))return n;if(n!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return tt(t)}function pt(t){var n=x();return function(){var a=T(t),l;if(n){var s=T(this).constructor;l=Reflect.construct(a,arguments,s)}else l=a.apply(this,arguments);return et(this,l)}}function U(t,n){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),i.push.apply(i,a)}return i}function ht(t){for(var n=1;n<arguments.length;n++){var i=arguments[n]!=null?arguments[n]:{};n%2?U(Object(i),!0).forEach(function(a){F(t,a,i[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):U(Object(i)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(i,a))})}return t}function rt(t,n){if(t==null)return{};var i={},a=Object.keys(t),l,s;for(s=0;s<a.length;s++)l=a[s],!(n.indexOf(l)>=0)&&(i[l]=t[l]);return i}function yt(t,n){if(t==null)return{};var i=rt(t,n),a,l;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(l=0;l<s.length;l++)a=s[l],!(n.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(i[a]=t[a]))}return i}function Y(t,n){(n==null||n>t.length)&&(n=t.length);for(var i=0,a=new Array(n);i<n;i++)a[i]=t[i];return a}function nt(t){if(Array.isArray(t))return Y(t)}function J(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function B(t,n){if(!!t){if(typeof t=="string")return Y(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return Y(t,n)}}function ot(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dt(t){return nt(t)||J(t)||B(t)||ot()}function it(){it=function(){return t};var t={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(o,e,r){o[e]=r.value},l=typeof Symbol=="function"?Symbol:{},s=l.iterator||"@@iterator",m=l.asyncIterator||"@@asyncIterator",v=l.toStringTag||"@@toStringTag";function h(o,e,r){return Object.defineProperty(o,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),o[e]}try{h({},"")}catch{h=function(r,u,f){return r[u]=f}}function P(o,e,r,u){var f=e&&e.prototype instanceof k?e:k,c=Object.create(f.prototype),p=new D(u||[]);return a(c,"_invoke",{value:X(o,r,p)}),c}function I(o,e,r){try{return{type:"normal",arg:o.call(e,r)}}catch(u){return{type:"throw",arg:u}}}t.wrap=P;var b={};function k(){}function S(){}function w(){}var G={};h(G,s,function(){return this});var R=Object.getPrototypeOf,L=R&&R(R(W([])));L&&L!==n&&i.call(L,s)&&(G=L);var j=w.prototype=k.prototype=Object.create(G);function H(o){["next","throw","return"].forEach(function(e){h(o,e,function(r){return this._invoke(e,r)})})}function E(o,e){function r(f,c,p,y){var d=I(o[f],o,c);if(d.type!=="throw"){var O=d.arg,g=O.value;return g&&A(g)=="object"&&i.call(g,"__await")?e.resolve(g.__await).then(function(_){r("next",_,p,y)},function(_){r("throw",_,p,y)}):e.resolve(g).then(function(_){O.value=_,p(O)},function(_){return r("throw",_,p,y)})}y(d.arg)}var u;a(this,"_invoke",{value:function(c,p){function y(){return new e(function(d,O){r(c,p,d,O)})}return u=u?u.then(y,y):y()}})}function X(o,e,r){var u="suspendedStart";return function(f,c){if(u==="executing")throw new Error("Generator is already running");if(u==="completed"){if(f==="throw")throw c;return z()}for(r.method=f,r.arg=c;;){var p=r.delegate;if(p){var y=$(p,r);if(y){if(y===b)continue;return y}}if(r.method==="next")r.sent=r._sent=r.arg;else if(r.method==="throw"){if(u==="suspendedStart")throw u="completed",r.arg;r.dispatchException(r.arg)}else r.method==="return"&&r.abrupt("return",r.arg);u="executing";var d=I(o,e,r);if(d.type==="normal"){if(u=r.done?"completed":"suspendedYield",d.arg===b)continue;return{value:d.arg,done:r.done}}d.type==="throw"&&(u="completed",r.method="throw",r.arg=d.arg)}}}function $(o,e){var r=o.iterator[e.method];if(r===void 0){if(e.delegate=null,e.method==="throw"){if(o.iterator.return&&(e.method="return",e.arg=void 0,$(o,e),e.method==="throw"))return b;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var u=I(r,o.iterator,e.arg);if(u.type==="throw")return e.method="throw",e.arg=u.arg,e.delegate=null,b;var f=u.arg;return f?f.done?(e[o.resultName]=f.value,e.next=o.nextLoc,e.method!=="return"&&(e.method="next",e.arg=void 0),e.delegate=null,b):f:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function Z(o){var e={tryLoc:o[0]};1 in o&&(e.catchLoc=o[1]),2 in o&&(e.finallyLoc=o[2],e.afterLoc=o[3]),this.tryEntries.push(e)}function N(o){var e=o.completion||{};e.type="normal",delete e.arg,o.completion=e}function D(o){this.tryEntries=[{tryLoc:"root"}],o.forEach(Z,this),this.reset(!0)}function W(o){if(o){var e=o[s];if(e)return e.call(o);if(typeof o.next=="function")return o;if(!isNaN(o.length)){var r=-1,u=function f(){for(;++r<o.length;)if(i.call(o,r))return f.value=o[r],f.done=!1,f;return f.value=void 0,f.done=!0,f};return u.next=u}}return{next:z}}function z(){return{value:void 0,done:!0}}return S.prototype=w,a(j,"constructor",{value:w,configurable:!0}),a(w,"constructor",{value:S,configurable:!0}),S.displayName=h(w,v,"GeneratorFunction"),t.isGeneratorFunction=function(o){var e=typeof o=="function"&&o.constructor;return!!e&&(e===S||(e.displayName||e.name)==="GeneratorFunction")},t.mark=function(o){return Object.setPrototypeOf?Object.setPrototypeOf(o,w):(o.__proto__=w,h(o,v,"GeneratorFunction")),o.prototype=Object.create(j),o},t.awrap=function(o){return{__await:o}},H(E.prototype),h(E.prototype,m,function(){return this}),t.AsyncIterator=E,t.async=function(o,e,r,u,f){f===void 0&&(f=Promise);var c=new E(P(o,e,r,u),f);return t.isGeneratorFunction(e)?c:c.next().then(function(p){return p.done?p.value:c.next()})},H(j),h(j,v,"Generator"),h(j,s,function(){return this}),h(j,"toString",function(){return"[object Generator]"}),t.keys=function(o){var e=Object(o),r=[];for(var u in e)r.push(u);return r.reverse(),function f(){for(;r.length;){var c=r.pop();if(c in e)return f.value=c,f.done=!1,f}return f.done=!0,f}},t.values=W,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(N),!e)for(var r in this)r.charAt(0)==="t"&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if(e.type==="throw")throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function u(O,g){return p.type="throw",p.arg=e,r.next=O,g&&(r.method="next",r.arg=void 0),!!g}for(var f=this.tryEntries.length-1;f>=0;--f){var c=this.tryEntries[f],p=c.completion;if(c.tryLoc==="root")return u("end");if(c.tryLoc<=this.prev){var y=i.call(c,"catchLoc"),d=i.call(c,"finallyLoc");if(y&&d){if(this.prev<c.catchLoc)return u(c.catchLoc,!0);if(this.prev<c.finallyLoc)return u(c.finallyLoc)}else if(y){if(this.prev<c.catchLoc)return u(c.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return u(c.finallyLoc)}}}},abrupt:function(e,r){for(var u=this.tryEntries.length-1;u>=0;--u){var f=this.tryEntries[u];if(f.tryLoc<=this.prev&&i.call(f,"finallyLoc")&&this.prev<f.finallyLoc){var c=f;break}}c&&(e==="break"||e==="continue")&&c.tryLoc<=r&&r<=c.finallyLoc&&(c=null);var p=c?c.completion:{};return p.type=e,p.arg=r,c?(this.method="next",this.next=c.finallyLoc,b):this.complete(p)},complete:function(e,r){if(e.type==="throw")throw e.arg;return e.type==="break"||e.type==="continue"?this.next=e.arg:e.type==="return"?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):e.type==="normal"&&r&&(this.next=r),b},finish:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var u=this.tryEntries[r];if(u.finallyLoc===e)return this.complete(u.completion,u.afterLoc),N(u),b}},catch:function(e){for(var r=this.tryEntries.length-1;r>=0;--r){var u=this.tryEntries[r];if(u.tryLoc===e){var f=u.completion;if(f.type==="throw"){var c=f.arg;N(u)}return c}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,u){return this.delegate={iterator:W(e),resultName:r,nextLoc:u},this.method==="next"&&(this.arg=void 0),b}},t}function q(t,n,i,a,l,s,m){try{var v=t[s](m),h=v.value}catch(P){i(P);return}v.done?n(h):Promise.resolve(h).then(a,l)}function vt(t){return function(){var n=this,i=arguments;return new Promise(function(a,l){var s=t.apply(n,i);function m(h){q(s,a,l,m,v,"next",h)}function v(h){q(s,a,l,m,v,"throw",h)}m(void 0)})}}function Q(t){if(Array.isArray(t))return t}function V(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(t){return Q(t)||J(t)||B(t)||V()}function at(t,n){var i=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(i!=null){var a=[],l=!0,s=!1,m,v;try{for(i=i.call(t);!(l=(m=i.next()).done)&&(a.push(m.value),!(n&&a.length===n));l=!0);}catch(h){s=!0,v=h}finally{try{!l&&i.return!=null&&i.return()}finally{if(s)throw v}}return a}}function mt(t,n){return Q(t)||at(t,n)||B(t,n)||V()}export{A as _,ht as a,yt as b,mt as c,F as d,C as e,dt as f,st as g,pt as h,ct as i,lt as j,tt as k,bt as l,it as m,ut as n,vt as o,ft as p};

!function(){"use strict";function e(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},n(e,t)}var t=Array.isArray;function r(e){var n=typeof e;return"string"===n||"number"===n}function o(e){return void 0===e||null===e}function i(e){return null===e||!1===e||!0===e||void 0===e}function a(e){return"function"===typeof e}function l(e){return"string"===typeof e}function u(e){return null===e}function s(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function c(e){return!u(e)&&"object"===typeof e}var f={},p=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(e){return e.substring(2).toLowerCase()}function v(e,n){e.appendChild(n)}function h(e,n,t){u(t)?v(e,n):e.insertBefore(n,t)}function m(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function g(e,n,t){e.replaceChild(n,t)}function y(e,n){e.removeChild(n)}function b(e){for(var n=0;n<e.length;n++)e[n]()}function k(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function w(e,n){for(var t;e;){if(1521&(t=e.flags))return e.dom;e=k(e,n,t)}return null}function $(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&a(n)&&n()}))}function C(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var r=e[t];h(r.parent,r.dom,r.next)}e.splice(0,e.length)}function A(e,n,t){do{var r=e.flags;if(1521&r)return void(t&&e.dom.parentNode!==n||y(n,e.dom));var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var i=0,a=o.length;i<a;++i)A(o[i],n,!1);return}e=o}}while(e)}function x(e,n){return function(){A(e,n,!0)}}function S(e,n,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,x(e,n)):A(e,n,!1)}function I(e,n,t,r,o,i,a,l){e.componentWillMove.push({dom:r,fn:function(){4&a?t.componentWillMove(n,o,r,l):8&a&&t.onComponentWillMove(n,o,r,l)},next:i,parent:o})}function T(e,n,t,r,i){var l,u,s=n.flags;do{var c=n.flags;if(1521&c)return void(o(l)||!a(l.componentWillMove)&&!a(l.onComponentWillMove)?h(t,n.dom,r):I(i,e,l,n.dom,t,r,s,u));var f=n.children;if(4&c)l=n.children,u=n.props,n=f.$LI;else if(8&c)l=n.ref,u=n.props,n=f;else if(8192&c){if(2!==n.childFlags){for(var p=0,d=f.length;p<d;++p)T(e,f[p],t,r,i);return}n=f}}while(n)}function P(e,n,t){if(e.constructor.getDerivedStateFromProps)return s(t,e.constructor.getDerivedStateFromProps(n,t));return t}var N={v:!1},D={componentComparator:null,createVNode:null,renderComplete:null};function E(e,n){e.textContent=n}function F(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function L(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function U(e,n){return!!a(e)&&(e(n),!0)}var M="$";function V(e,n,t,r,o,i,a,l){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===i?null:i,this.ref=void 0===a?null:a,this.type=l}function W(e,n,t,r,o,i,a,l){var u=void 0===o?1:o,s=new V(u,r,t,e,a,i,l,n);return 0===u&&z(s,s.children),s}function R(e,n,t){if(4&e)return t;var r=(32768&e?n.render:n).defaultHooks;if(o(r))return t;if(o(t))return r;return L(t,r)}function _(e,n,t){var r=(32768&e?n.render:n).defaultProps;if(o(r))return t;if(o(t))return s(r,null);return L(t,r)}function O(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function B(e,n,t,r,o){return new V(1,null,null,e=O(e,n),r,_(e,n,t),R(e,n,o),n)}function j(e,n){return new V(1,o(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function G(e,n,t){var r=W(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=q(),r.childFlags=2;break;case 16:r.children=[j(e)],r.childFlags=4}return r}function H(e){var n=e.children,t=e.childFlags;return G(2===t?K(n):n.map(K),t,e.key)}function K(e){var n=-16385&e.flags,t=e.props;if(14&n&&!u(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new V(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return H(e)}function q(){return j("",null)}function Q(e,n,o,a){for(var s=e.length;o<s;o++){var c=e[o];if(!i(c)){var f=a+M+o;if(t(c))Q(c,n,0,f);else{if(r(c))c=j(c,f);else{var p=c.key,d=l(p)&&p[0]===M;(81920&c.flags||d)&&(c=K(c)),c.flags|=65536,d?p.substring(0,a.length)!==a&&(c.key=a+p):u(p)?c.key=f:c.key=a+p}n.push(c)}}}}function X(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case"$F":return 8192;default:return 1}}function z(e,n){var o,a=1;if(i(n))o=n;else if(r(n))a=16,o=n;else if(t(n)){for(var s=n.length,c=0;c<s;++c){var f=n[c];if(i(f)||t(f)){o=o||n.slice(0,c),Q(n,o,c,"");break}if(r(f))(o=o||n.slice(0,c)).push(j(f,M+c));else{var p=f.key,d=(81920&f.flags)>0,v=u(p),h=l(p)&&p[0]===M;d||v||h?(o=o||n.slice(0,c),(d||h)&&(f=K(f)),(v||h)&&(f.key=M+c),o.push(f)):o&&o.push(f),f.flags|=65536}}a=0===(o=o||n).length?1:8}else(o=n).flags|=65536,81920&n.flags&&(o=K(n)),a=2;return e.children=o,e.childFlags=a,e}function Z(e){if(i(e)||r(e))return j(e,null);if(t(e))return G(e,0,null);return 16384&e.flags?K(e):e}var J="http://www.w3.org/1999/xlink",Y="http://www.w3.org/XML/1998/namespace",ee={"xlink:actuate":J,"xlink:arcrole":J,"xlink:href":J,"xlink:role":J,"xlink:show":J,"xlink:title":J,"xlink:type":J,"xml:base":Y,"xml:lang":Y,"xml:space":Y};function ne(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var te=ne(0),re=ne(null),oe=ne(!0);function ie(e,n){var t=n.$EV;return t||(t=n.$EV=ne(null)),t[e]||1===++te[e]&&(re[e]=me(e)),t}function ae(e,n){var t=n.$EV;t&&t[e]&&(0===--te[e]&&(document.removeEventListener(d(e),re[e]),re[e]=null),t[e]=null)}function le(e,n,t,r){if(a(t))ie(e,r)[e]=t;else if(c(t)){if(F(n,t))return;ie(e,r)[e]=t}else ae(e,r)}function ue(e){return a(e.composedPath)?e.composedPath()[0]:e.target}function se(e,n,t,r){var o=ue(e);do{if(n&&o.disabled)return;var i=o.$EV;if(i){var a=i[t];if(a&&(r.dom=o,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}o=o.parentNode}while(!u(o))}function ce(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function fe(){return this.defaultPrevented}function pe(){return this.cancelBubble}function de(e){var n={dom:document};return e.isDefaultPrevented=fe,e.isPropagationStopped=pe,e.stopPropagation=ce,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function ve(e){return function(n){if(0!==n.button)return void n.stopPropagation();se(n,!0,e,de(n))}}function he(e){return function(n){se(n,!1,e,de(n))}}function me(e){var n="onClick"===e||"onDblClick"===e?ve(e):he(e);return document.addEventListener(d(e),n),n}function ge(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ye(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function be(e,n){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||f,i=r.dom;if(l(e))ye(o,e,t);else for(var u=0;u<e.length;++u)ye(o,e[u],t);if(a(n)){var s=this.$V,c=s.props||f;n(c,i,!1,s)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ke(e,n,t){var r="$"+n,o=e[r];if(o){if(o[1].wrapped)return;e.removeEventListener(o[0],o[1]),e[r]=null}a(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function we(e){return"checkbox"===e||"radio"===e}var $e=be("onInput",Se),Ce=be(["onClick","onChange"],Se);function Ae(e){e.stopPropagation()}function xe(e,n){we(n.type)?(ke(e,"change",Ce),ke(e,"click",Ae)):ke(e,"input",$e)}function Se(e,n){var t=e.type,r=e.value,i=e.checked,a=e.multiple,l=e.defaultValue,u=!o(r);t&&t!==n.type&&n.setAttribute("type",t),o(a)||a===n.multiple||(n.multiple=a),o(l)||u||(n.defaultValue=l+""),we(t)?(u&&(n.value=r),o(i)||(n.checked=i)):u&&n.value!==r?(n.defaultValue=r,n.value=r):o(i)||(n.checked=i)}function Ie(e,n){if("option"===e.type)Te(e,n);else{var t=e.children,r=e.flags;if(4&r)Ie(t.$LI,n);else if(8&r)Ie(t,n);else if(2===e.childFlags)Ie(t,n);else if(12&e.childFlags)for(var o=0,i=t.length;o<i;++o)Ie(t[o],n)}}function Te(e,n){var r=e.props||f,i=e.dom;i.value=r.value,r.value===n||t(n)&&-1!==n.indexOf(r.value)?i.selected=!0:o(n)&&o(r.selected)||(i.selected=r.selected||!1)}Ae.wrapped=!0;var Pe=be("onChange",De);function Ne(e){ke(e,"change",Pe)}function De(e,n,t,r){var i=Boolean(e.multiple);o(e.multiple)||i===n.multiple||(n.multiple=i);var a=e.selectedIndex;if(-1===a&&(n.selectedIndex=-1),1!==r.childFlags){var l=e.value;"number"===typeof a&&a>-1&&n.options[a]&&(l=n.options[a].value),t&&o(l)&&(l=e.defaultValue),Ie(r,l)}}var Ee,Fe,Le=be("onInput",Ve),Ue=be("onChange");function Me(e,n){ke(e,"input",Le),n.onChange&&ke(e,"change",Ue)}function Ve(e,n,t){var r=e.value,i=n.value;if(o(r)){if(t){var a=e.defaultValue;o(a)||a===i||(n.defaultValue=a,n.value=a)}}else i!==r&&(n.defaultValue=r,n.value=r)}function We(e,n,t,r,o,i){64&e?Se(r,t):256&e?De(r,t,o,n):128&e&&Ve(r,t,o),i&&(t.$V=n)}function Re(e,n,t){64&e?xe(n,t):256&e?Ne(n):128&e&&Me(n,t)}function _e(e){return e.type&&we(e.type)?!o(e.checked):!o(e.value)}function Oe(e){e&&!U(e,null)&&e.current&&(e.current=null)}function Be(e,n,t){e&&(a(e)||void 0!==e.current)&&t.push((function(){U(e,n)||void 0===e.current||(e.current=n)}))}function je(e,n,t){Ge(e,t),S(e,n,t)}function Ge(e,n){var t,r=e.flags,i=e.children;if(481&r){t=e.ref;var l=e.props;Oe(t);var s=e.childFlags;if(!u(l))for(var c=Object.keys(l),d=0,v=c.length;d<v;d++){var h=c[d];oe[h]&&ae(h,e.dom)}12&s?He(i,n):2===s&&Ge(i,n)}else if(i)if(4&r){a(i.componentWillUnmount)&&i.componentWillUnmount();var m=n;a(i.componentWillDisappear)&&(m=new p,Xe(n,i,i.$LI.dom,r,void 0)),Oe(e.ref),i.$UN=!0,Ge(i.$LI,m)}else if(8&r){var g=n;if(!o(t=e.ref)){var y=null;a(t.onComponentWillUnmount)&&(y=w(e,!0),t.onComponentWillUnmount(y,e.props||f)),a(t.onComponentWillDisappear)&&(g=new p,Xe(n,t,y=y||w(e,!0),r,e.props))}Ge(i,g)}else 1024&r?je(i,e.ref,n):8192&r&&12&e.childFlags&&He(i,n)}function He(e,n){for(var t=0,r=e.length;t<r;++t)Ge(e[t],n)}function Ke(e,n){return function(){if(n)for(var t=0;t<e.length;t++)A(e[t],n,!1)}}function qe(e,n,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,Ke(n,e)):e.textContent=""}function Qe(e,n,t,r){He(t,r),8192&n.flags?S(n,e,r):qe(e,t,r)}function Xe(e,n,t,r,o){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,o,e)}))}function ze(e){var n=e.event;return function(t){n(e.data,t)}}function Ze(e,n,t,r){if(c(t)){if(F(n,t))return;t=ze(t)}ke(r,d(e),t)}function Je(e,n,t){if(o(n))return void t.removeAttribute("style");var r,i,a=t.style;if(l(n))return void(a.cssText=n);if(o(e)||l(e))for(r in n)i=n[r],a.setProperty(r,i);else{for(r in n)(i=n[r])!==e[r]&&a.setProperty(r,i);for(r in e)o(n[r])&&a.removeProperty(r)}}function Ye(e,n,t,r,i){var a=e&&e.__html||"",l=n&&n.__html||"";a!==l&&(o(l)||ge(r,l)||(u(t)||(12&t.childFlags?He(t.children,i):2===t.childFlags&&Ge(t.children,i),t.children=null,t.childFlags=1),r.innerHTML=l))}function en(e,n,t,r,i,a,l,u){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(a&&"value"===e)break;var s=o(t)?"":t;r[e]!==s&&(r[e]=s);break;case"style":Je(n,t,r);break;case"dangerouslySetInnerHTML":Ye(n,t,l,r,u);break;default:oe[e]?le(e,n,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ze(e,n,t,r):o(t)?r.removeAttribute(e):i&&ee[e]?r.setAttributeNS(ee[e],e,t):r.setAttribute(e,t)}}function nn(e,n,t,r,o,i){var a=!1,l=(448&n)>0;for(var u in l&&(a=_e(t))&&Re(n,r,t),t)en(u,null,t[u],r,o,a,null,i);l&&We(n,e,r,t,!0,a)}function tn(e,n,t){var r=Z(e.render(n,e.state,t)),o=t;return a(e.getChildContext)&&(o=s(t,e.getChildContext())),e.$CX=o,r}function rn(e,n,t,r,o,i){var l=new n(t,r),s=l.$N=Boolean(n.getDerivedStateFromProps||l.getSnapshotBeforeUpdate);if(l.$SVG=o,l.$L=i,e.children=l,l.$BS=!1,l.context=r,l.props===f&&(l.props=t),s)l.state=P(l,t,l.state);else if(a(l.componentWillMount)){l.$BR=!0,l.componentWillMount();var c=l.$PS;if(!u(c)){var p=l.state;if(u(p))l.state=c;else for(var d in c)p[d]=c[d];l.$PS=null}l.$BR=!1}return l.$LI=tn(l,t,r),l}function on(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function an(e,n,t,r,o,i,a){var l=e.flags|=16384;481&l?cn(e,n,t,r,o,i,a):4&l?pn(e,n,t,r,o,i,a):8&l?dn(e,n,t,r,o,i,a):16&l?sn(e,n,o):8192&l?un(e,t,n,r,o,i,a):1024&l&&ln(e,t,n,o,i,a)}function ln(e,n,t,r,o,i){an(e.children,e.ref,n,!1,null,o,i);var a=q();sn(a,t,r),e.dom=a.dom}function un(e,n,t,r,o,i,a){var l=e.children,u=e.childFlags;12&u&&0===l.length&&(u=e.childFlags=2,l=e.children=q()),2===u?an(l,t,n,r,o,i,a):fn(l,t,n,r,o,i,a)}function sn(e,n,t){var r=e.dom=document.createTextNode(e.children);u(n)||h(n,r,t)}function cn(e,n,t,r,i,a,l){var s=e.flags,c=e.props,f=e.className,p=e.childFlags,d=e.dom=m(e.type,r=r||(32&s)>0),v=e.children;if(o(f)||""===f||(r?d.setAttribute("class",f):d.className=f),16===p)E(d,v);else if(1!==p){var g=r&&"foreignObject"!==e.type;2===p?(16384&v.flags&&(e.children=v=K(v)),an(v,d,t,g,null,a,l)):8!==p&&4!==p||fn(v,d,t,g,null,a,l)}u(n)||h(n,d,i),u(c)||nn(e,s,c,d,r,l),Be(e.ref,d,a)}function fn(e,n,t,r,o,i,a){for(var l=0;l<e.length;++l){var u=e[l];16384&u.flags&&(e[l]=u=K(u)),an(u,n,t,r,o,i,a)}}function pn(e,n,t,r,o,i,l){var u=rn(e,e.type,e.props||f,t,r,i),s=l;a(u.componentDidAppear)&&(s=new p),an(u.$LI,n,u.$CX,r,o,i,s),mn(e.ref,u,i,l)}function dn(e,n,t,r,i,l,u){var s=e.ref,c=u;!o(s)&&a(s.onComponentDidAppear)&&(c=new p),an(e.children=Z(on(e,t)),n,t,r,i,l,c),yn(e,l,u)}function vn(e){return function(){e.componentDidMount()}}function hn(e,n,t,r,o){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,o)}))}function mn(e,n,t,r){Be(e,n,t),a(n.componentDidMount)&&t.push(vn(n)),a(n.componentDidAppear)&&hn(r,n,n.$LI.dom,4,void 0)}function gn(e,n){return function(){e.onComponentDidMount(w(n,!0),n.props||f)}}function yn(e,n,t){var r=e.ref;o(r)||(U(r.onComponentWillMount,e.props||f),a(r.onComponentDidMount)&&n.push(gn(r,e)),a(r.onComponentDidAppear)&&hn(t,r,w(e,!0),8,e.props))}function bn(e,n,t,r,o,i,a){Ge(e,a),0!==(n.flags&e.flags&1521)?(an(n,null,r,o,null,i,a),g(t,n.dom,e.dom)):(an(n,t,r,o,w(e,!0),i,a),S(e,t,a))}function kn(e,n,t,r,o,i,a,l){var u=n.flags|=16384;e.flags!==u||e.type!==n.type||e.key!==n.key||2048&u?16384&e.flags?bn(e,n,t,r,o,a,l):an(n,t,r,o,i,a,l):481&u?xn(e,n,r,o,u,a,l):4&u?Nn(e,n,t,r,o,i,a,l):8&u?Dn(e,n,t,r,o,i,a,l):16&u?En(e,n):8192&u?Cn(e,n,t,r,o,a,l):An(e,n,r,a,l)}function wn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:E(t,n))}function $n(e,n){e.textContent!==n&&(e.textContent=n)}function Cn(e,n,t,r,o,i,a){var l=e.children,u=n.children,s=e.childFlags,c=n.childFlags,f=null;12&c&&0===u.length&&(c=n.childFlags=2,u=n.children=q());var p=0!==(2&c);if(12&s){var d=l.length;(8&s&&8&c||p||!p&&u.length>d)&&(f=w(l[d-1],!1).nextSibling)}In(s,c,l,u,t,r,o,f,e,i,a)}function An(e,n,t,r,o){var a=e.ref,l=n.ref,u=n.children;if(In(e.childFlags,n.childFlags,e.children,u,a,t,!1,null,e,r,o),n.dom=e.dom,a!==l&&!i(u)){var s=u.dom;y(a,s),v(l,s)}}function xn(e,n,t,r,i,a,l){var u,s=n.dom=e.dom,c=e.props,p=n.props,d=!1,v=!1;if(r=r||(32&i)>0,c!==p){var h=c||f;if((u=p||f)!==f)for(var m in(d=(448&i)>0)&&(v=_e(u)),u){var g=h[m],y=u[m];g!==y&&en(m,g,y,s,r,v,e,l)}if(h!==f)for(var b in h)o(u[b])&&!o(h[b])&&en(b,h[b],null,s,r,v,e,l)}var k=n.children,w=n.className;e.className!==w&&(o(w)?s.removeAttribute("class"):r?s.setAttribute("class",w):s.className=w),4096&i?$n(s,k):In(e.childFlags,n.childFlags,e.children,k,s,t,r&&"foreignObject"!==n.type,null,e,a,l),d&&We(i,n,s,u,!1,v);var $=n.ref,C=e.ref;C!==$&&(Oe(C),Be($,s,a))}function Sn(e,n,t,r,o,i,a){Ge(e,a),fn(n,t,r,o,w(e,!0),i,a),S(e,t,a)}function In(e,n,t,r,o,i,a,l,u,s,c){switch(e){case 2:switch(n){case 2:kn(t,r,o,i,a,l,s,c);break;case 1:je(t,o,c);break;case 16:Ge(t,c),E(o,r);break;default:Sn(t,r,o,i,a,s,c)}break;case 1:switch(n){case 2:an(r,o,i,a,l,s,c);break;case 1:break;case 16:E(o,r);break;default:fn(r,o,i,a,l,s,c)}break;case 16:switch(n){case 16:wn(t,r,o);break;case 2:qe(o,t,c),an(r,o,i,a,l,s,c);break;case 1:qe(o,t,c);break;default:qe(o,t,c),fn(r,o,i,a,l,s,c)}break;default:switch(n){case 16:He(t,c),E(o,r);break;case 2:Qe(o,u,t,c),an(r,o,i,a,l,s,c);break;case 1:Qe(o,u,t,c);break;default:var f=0|t.length,p=0|r.length;0===f?p>0&&fn(r,o,i,a,l,s,c):0===p?Qe(o,u,t,c):8===n&&8===e?Ln(t,r,o,i,a,f,p,l,u,s,c):Fn(t,r,o,i,a,f,p,l,s,c)}}}function Tn(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}function Pn(e,n,t,r,o,i,l,u,c,f){var p=e.state,d=e.props,v=Boolean(e.$N),h=a(e.shouldComponentUpdate);if(v&&(n=P(e,t,n!==p?s(p,n):n)),l||!h||h&&e.shouldComponentUpdate(t,n,o)){!v&&a(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var m=null,g=tn(e,t,o);v&&a(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(d,p)),kn(e.$LI,g,r,e.$CX,i,u,c,f),e.$LI=g,a(e.componentDidUpdate)&&Tn(e,d,p,m,c)}else e.props=t,e.state=n,e.context=o}function Nn(e,n,t,r,o,i,l,c){var p=n.children=e.children;if(u(p))return;p.$L=l;var d=n.props||f,v=n.ref,h=e.ref,m=p.state;if(!p.$N){if(a(p.componentWillReceiveProps)){if(p.$BR=!0,p.componentWillReceiveProps(d,r),p.$UN)return;p.$BR=!1}u(p.$PS)||(m=s(m,p.$PS),p.$PS=null)}Pn(p,m,d,t,r,o,!1,i,l,c),h!==v&&(Oe(h),Be(v,p,l))}function Dn(e,n,t,r,i,l,u,s){var c=!0,p=n.props||f,d=n.ref,v=e.props,h=!o(d),m=e.children;if(h&&a(d.onComponentShouldUpdate)&&(c=d.onComponentShouldUpdate(v,p)),!1!==c){h&&a(d.onComponentWillUpdate)&&d.onComponentWillUpdate(v,p);var g=Z(on(n,r));kn(m,g,t,r,i,l,u,s),n.children=g,h&&a(d.onComponentDidUpdate)&&d.onComponentDidUpdate(v,p)}else n.children=m}function En(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function Fn(e,n,t,r,o,i,a,l,u,s){for(var c,f,p=i>a?a:i,d=0;d<p;++d)c=n[d],f=e[d],16384&c.flags&&(c=n[d]=K(c)),kn(f,c,t,r,o,l,u,s),e[d]=c;if(i<a)for(d=p;d<a;++d)16384&(c=n[d]).flags&&(c=n[d]=K(c)),an(c,t,r,o,l,u,s);else if(i>a)for(d=p;d<i;++d)je(e[d],t,s)}function Ln(e,n,t,r,o,i,a,l,u,s,c){var f,p,d=i-1,v=a-1,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=K(g)),kn(m,g,t,r,o,l,s,c),e[h]=g,++h>d||h>v)break e;m=e[h],g=n[h]}for(m=e[d],g=n[v];m.key===g.key;){if(16384&g.flags&&(n[v]=g=K(g)),kn(m,g,t,r,o,l,s,c),e[d]=g,v--,h>--d||h>v)break e;m=e[d],g=n[v]}}if(h>d){if(h<=v)for(p=(f=v+1)<a?w(n[f],!0):l;h<=v;)16384&(g=n[h]).flags&&(n[h]=g=K(g)),++h,an(g,t,r,o,p,s,c)}else if(h>v)for(;h<=d;)je(e[h++],t,c);else Un(e,n,r,i,a,d,v,h,t,o,l,u,s,c)}function Un(e,n,t,r,o,i,a,l,u,s,c,f,p,d){var v,h,m=0,g=0,y=l,b=l,k=i-l+1,$=a-l+1,A=new Int32Array($+1),x=k===r,S=!1,I=0,P=0;if(o<4||(k|$)<32)for(g=y;g<=i;++g)if(v=e[g],P<$){for(l=b;l<=a;l++)if(h=n[l],v.key===h.key){if(A[l-b]=g+1,x)for(x=!1;y<g;)je(e[y++],u,d);I>l?S=!0:I=l,16384&h.flags&&(n[l]=h=K(h)),kn(v,h,u,t,s,c,p,d),++P;break}!x&&l>a&&je(v,u,d)}else x||je(v,u,d);else{var N={};for(g=b;g<=a;++g)N[n[g].key]=g;for(g=y;g<=i;++g)if(v=e[g],P<$)if(void 0!==(l=N[v.key])){if(x)for(x=!1;g>y;)je(e[y++],u,d);A[l-b]=g+1,I>l?S=!0:I=l,16384&(h=n[l]).flags&&(n[l]=h=K(h)),kn(v,h,u,t,s,c,p,d),++P}else x||je(v,u,d);else x||je(v,u,d)}if(x)Qe(u,f,e,d),fn(n,u,t,s,c,p,d);else if(S){var D=Vn(A);for(l=D.length-1,g=$-1;g>=0;g--)0===A[g]?(16384&(h=n[I=g+b]).flags&&(n[I]=h=K(h)),an(h,u,t,s,(m=I+1)<o?w(n[m],!0):c,p,d)):l<0||g!==D[l]?T(f,h=n[I=g+b],u,(m=I+1)<o?w(n[m],!0):c,d):l--;d.componentWillMove.length>0&&C(d.componentWillMove)}else if(P!==$)for(g=$-1;g>=0;g--)0===A[g]&&(16384&(h=n[I=g+b]).flags&&(n[I]=h=K(h)),an(h,u,t,s,(m=I+1)<o?w(n[m],!0):c,p,d))}var Mn=0;function Vn(e){var n=0,t=0,r=0,o=0,i=0,a=0,l=0,u=e.length;for(u>Mn&&(Mn=u,Ee=new Int32Array(u),Fe=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Ee[o]]<n){Fe[t]=r,Ee[++o]=t;continue}for(i=0,a=o;i<a;)e[Ee[l=i+a>>1]]<n?i=l+1:a=l;n<e[Ee[i]]&&(i>0&&(Fe[t]=Ee[i-1]),Ee[i]=t)}i=o+1;var s=new Int32Array(i);for(a=Ee[i-1];i-- >0;)s[i]=a,a=Fe[a],Ee[i]=0;return s}function Wn(e,n,t,r){var i=[],l=new p,u=n.$V;N.v=!0,o(u)?o(e)||(16384&e.flags&&(e=K(e)),an(e,n,r,!1,null,i,l),n.$V=e,u=e):o(e)?(je(u,n,l),n.$V=null):(16384&e.flags&&(e=K(e)),kn(u,e,n,r,!1,null,i,l),u=n.$V=e),b(i),$(l.componentDidAppear),N.v=!1,a(t)&&t(),a(D.renderComplete)&&D.renderComplete(u,n)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Rn=[],_n="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(e){window.setTimeout(e,0)},On=!1;function Bn(e,n,t,r){var i=e.$PS;if(a(n)&&(n=n(i?s(e.state,i):e.state,e.props,e.context)),o(i))e.$PS=n;else for(var l in n)i[l]=n[l];if(e.$BR)a(t)&&e.$L.push(t.bind(e));else{if(!N.v&&0===Rn.length)return Hn(e,r),void(a(t)&&t.call(e));if(-1===Rn.indexOf(e)&&Rn.push(e),r&&(e.$F=!0),On||(On=!0,_n(Gn)),a(t)){var u=e.$QU;u||(u=e.$QU=[]),u.push(t)}}}function jn(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Gn(){var e;for(On=!1;e=Rn.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,Hn(e,n),e.$QU&&jn(e)}}function Hn(e,n){if(n||!e.$BR){var t=e.$PS;e.$PS=null;var r=[],o=new p;N.v=!0,Pn(e,s(e.state,t),e.props,w(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,r,o),b(r),$(o.componentDidAppear),N.v=!1}else e.state=e.$PS,e.$PS=null}var Kn=function(e,n){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||f,this.context=n||f};function qn(e){return void 0===e||null===e}function Qn(e){return"string"===typeof e}function Xn(e){return void 0===e}Kn.prototype.forceUpdate=function(e){if(this.$UN)return;Bn(this,{},e,!0)},Kn.prototype.setState=function(e,n){if(this.$UN)return;this.$BS||Bn(this,e,n,!1)},Kn.prototype.render=function(e,n,t){return null};var zn={onComponentDidAppear:1,onComponentDidMount:1,onComponentDidUpdate:1,onComponentShouldUpdate:1,onComponentWillDisappear:1,onComponentWillMount:1,onComponentWillUnmount:1,onComponentWillUpdate:1};function Zn(e,n,t){var r,o,i=arguments,a=null,l=null,u=null,s=0,c=arguments.length-2;if(1===c)r=t;else if(c>1)for(r=[];c-- >0;)r[c]=i[c+2];if(!Qn(e)){if(s=2,Xn(r)||(n||(n={}),n.children=r),!qn(n))for(var f in o={},n)"key"===f?l=n.key:"ref"===f?a=n.ref:1===zn[f]?(a||(a={}),a[f]=n[f]):o[f]=n[f];return B(s,e,o,l,a)}if(s=X(e),!qn(n))for(var p in o={},n)"className"===p||"class"===p?u=n[p]:"key"===p?l=n.key:"children"===p&&Xn(r)?r=n.children:"ref"===p?a=n.ref:("contenteditable"===p&&(s|=4096),o[p]=n[p]);if(8192&s)return G(1===c?[r]:r,0,l);return W(s,e,u,r,0,o,l,a)}function Jn(e){return void 0===e||null===e}function Yn(e){return""!==e}function et(e){return e.split(" ").filter(Yn)}function nt(e,n){for(var t=et(n),r=0;r<t.length;r++)e.classList.add(t[r])}function tt(e,n){for(var t=et(n),r=0;r<t.length;r++)e.classList.remove(t[r])}function rt(){return document.body.clientHeight}function ot(e){e.style||e.removeAttribute("style")}function it(e){var n=e.style.getPropertyValue("display"),t="none"===window.getComputedStyle(e).getPropertyValue("display");t&&e.style.setProperty("display","block");var r=e.getBoundingClientRect();return t&&(e.style.setProperty("display",n),ot(e)),{height:r.height,width:r.width,x:r.x,y:r.y}}function at(e,n,t,r,o){void 0===r&&(r=1),void 0===o&&(o=1),1!==r||1!==o?(e.style.transformOrigin="0 0",e.style.transform="translate("+n+"px, "+t+"px) scale("+r+", "+o+")"):e.style.transform="translate("+n+"px, "+t+"px)"}function lt(e){e.style.transform="",e.style.transformOrigin=""}function ut(e,n,t){e.style.width=n+"px",e.style.height=t+"px"}function st(e){e.style.width=e.style.height=""}function ct(e){for(var n=0,t=0,r=0;r<e.length;r++){var o=e[r];if(!o)continue;var i=window.getComputedStyle(o),a=i.getPropertyValue("transition-duration").split(","),l=i.getPropertyValue("transition-delay").split(","),u=i.getPropertyValue("transition-property").split(",");for(var s in u){var c=s.trim();if("-"===c[0]){var f=c.split("-").splice(2).join("-");c.indexOf(f)>=0&&n--}}for(var p=0,d=0;d<a.length;d++){var v=a[d],h=l[d],m=parseFloat(v)+parseFloat(h);m>p&&(p=m)}n+=a.length,p>t&&(t=p)}return{maxDuration:t,nrofTransitions:n}}var ft,pt=function(){if("undefined"===typeof document)return"";var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var t in n)if(void 0!==e[t])return n[t]}();function dt(e,n,t){"IMG"!==n.nodeName||n.complete?setTimeout((function(){return e({target:n,timeout:!0})}),0===t?0:Math.round(1e3*t)+100):n.addEventListener("load",(function(){setTimeout((function(){return e({target:n,timeout:!0})}),0===t?0:Math.round(1e3*t)+100)}))}function vt(e,n){var t=e[0],r=ct(e),o=r.maxDuration,i=r.nrofTransitions,a=!1,l=function r(o){if(!o||a)return;if(!o.timeout){for(var l=!1,u=0;u<e.length;u++)if(void 0!==e[u]&&o.target===e[u]){l=!0;break}if(!l)return;if(--i>0)return}a=!0,t.removeEventListener(pt,r,!1),"function"===typeof n&&n()};t.addEventListener(pt,l,!1),dt(l,t,o)}!function(e){e[e.INITIALIZE=0]="INITIALIZE",e[e.MEASURE=1]="MEASURE",e[e.SET_START_STATE=2]="SET_START_STATE",e[e.ACTIVATE_TRANSITIONS=3]="ACTIVATE_TRANSITIONS",e[e.REGISTER_LISTENERS=4]="REGISTER_LISTENERS",e[e.ACTIVATE_ANIMATION=5]="ACTIVATE_ANIMATION",e[e.length=6]="length"}(ft||(ft={}));var ht={};function mt(){var e=!1;for(var n in ht)--ht[n].ticks<0?delete ht[n]:e=!0;e&&requestAnimationFrame(mt)}var gt=[],yt=[],bt=0,kt=0;function wt(){kt=0;var e=yt;yt=[];for(var n=0;n<e.length;n++)e[n](5)}function $t(){bt=0;var e=gt;gt=[];for(var n=0;n<6;n++){var t=n;if(5===t)yt=yt.concat(e),0===kt&&(kt=requestAnimationFrame(wt));else{3===t&&rt();for(var r=0;r<e.length;r++)e[r](t)}}}function Ct(e){gt.push(e),0===bt&&(bt=requestAnimationFrame($t))}function At(e,n){var t;if(Jn(e)||"object"!==typeof e){var r=(e||"inferno-animation")+n;t={active:r+"-active",end:r+"-end",start:r}}else t=e;return t}function xt(e,n){var t,r,o,i,a,l=At(n.animation,"-enter"),u={},s=(r="none",(o=(t=e).style.getPropertyValue("display"))!==r&&t.style.setProperty("display",r),o),c=void 0===n.globalAnimationKey?null:(i=n.globalAnimationKey,void 0!==(a=ht[i])&&delete ht[i],a);Ct((function(n){return It(n,e,l,u,s,c)}))}function St(e,n){return function(){st(e),tt(e,n.active+" "+n.end)}}function It(e,n,t,r,o,i){switch(e){case 0:return l=n,void(void 0!==(u=o)?l.style.setProperty("display",u):(l.style.removeProperty("display"),ot(l)));case 1:if("IMG"!==n.tagName||n.complete){var a=it(n);r.x=a.x,r.y=a.y,r.width=a.width,r.height=a.height}else rt();return;case 2:return Jn(i)||0===r.width||0===r.height||at(n,i.x-r.x,i.y-r.y,i.width/r.width,i.height/r.height),void nt(n,t.start);case 3:return void nt(n,t.active);case 4:return void vt([n],St(n,t));case 5:return Jn(i)||0===r.width||0===r.height||lt(n),ut(n,r.width,r.height),tt(n,t.start),void nt(n,t.end)}var l,u}function Tt(e,n,t){var r,o,i=At(n.animation,"-leave"),a=it(e);Ct((function(n){return Pt(n,e,t,i,a)})),void 0!==n.globalAnimationKey&&(r=n.globalAnimationKey,(o=a).ticks=5,ht[r]=o,null===mt&&requestAnimationFrame(mt),e.style.setProperty("visibility","hidden"))}function Pt(e,n,t,r,o){switch(e){case 1:return ut(n,o.width,o.height),void nt(n,r.start);case 3:return void nt(n,r.active);case 4:return void vt([n],t);case 5:return nt(n,r.end),tt(n,r.start),void st(n)}}var Nt=function(n){function t(){return n.apply(this,arguments)||this}e(t,n);var r=t.prototype;return r.componentDidAppear=function(e){this._innerEl=this.props.innerRef.current,xt(this._innerEl,{animation:"inner"})},r.componentWillDisappear=function(e,n){Tt(this._innerEl,{animation:"inner"},n)},r.render=function(){var e=this;return Zn("div",{className:"page"},Zn("div",{className:"random-wrapper"},[Zn("h3",null,"Page "+this.props.step),Zn("img",{width:"120px",height:"120px",src:"avatar.png"}),Zn("p",null,"The entire page is swapped, but we are only animating div.inner. This gives the apperance of only swapping the box below."),Zn("p",null,"In order not to hide the incoming content we can't set background on div.page. The background needs to be provided by a backdrop in the wizard component."),Zn("div",{ref:this.props.innerRef,className:"inner"},[Zn("h2",null,"Step "+this.props.step),Zn("button",{onClick:function(n){n.preventDefault(),e.props.onNext()}},"Next")])]))},t}(Kn),Dt=function(n){function t(){var e;(e=n.call(this)||this).doGoNext=function(){e.setState({showStepIndex:(e.state.showStepIndex+1)%3})},e._innerAnimRefs=[];for(var t=0;t<3;t++)e._innerAnimRefs.push({current:null});return e.state={showStepIndex:0},e}return e(t,n),t.prototype.render=function(){var e=this.state.showStepIndex;return Zn(Nt,{key:"page_"+e,step:e+1,innerRef:this._innerAnimRefs[e],onNext:this.doGoNext})},t}(Kn);document.addEventListener("DOMContentLoaded",(function(){var e,n,t,r=document.querySelector("#App1");e=Zn(Dt),void 0===n&&(n=null),void 0===t&&(t=f),Wn(e,r,n,t)}))}();

import{r as i,P as A}from"./app-9ed5fd40.js";import{D as y,C as E,u as T,O as s,m as B,T as R,d as F}from"./button.esm-736ff94c.js";function g(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function M(r){if(Array.isArray(r))return g(r)}function N(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function C(r,t){if(r){if(typeof r=="string")return g(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(r,t)}}function U(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z(r){return M(r)||N(r)||C(r)||U()}var u={DEFAULT_MASKS:{pint:/[\d]/,int:/[\d\-]/,pnum:/[\d\.]/,money:/[\d\.\s,]/,num:/[\d\-\.]/,hex:/[0-9a-f]/i,email:/[a-z0-9_\.\-@]/i,alpha:/[a-z_]/i,alphanum:/[a-z0-9_]/i},getRegex:function(t){return u.DEFAULT_MASKS[t]?u.DEFAULT_MASKS[t]:t},onBeforeInput:function(t,n,e){e||!y.isAndroid()||this.validateKey(t,t.data,n)},onKeyPress:function(t,n,e){e||y.isAndroid()||t.ctrlKey||t.altKey||this.validateKey(t,t.key,n)},onPaste:function(t,n,e){if(!e){var o=this.getRegex(n),l=t.clipboardData.getData("text");z(l).forEach(function(m){if(!o.test(m))return t.preventDefault(),!1})}},validateKey:function(t,n,e){if(n!=null){var o=n.length===1;if(o){var l=this.getRegex(e);l.test(n)||t.preventDefault()}}},validate:function(t,n){var e=t.target.value,o=!0,l=this.getRegex(n);return e&&!l.test(e)&&(o=!1),o}};function d(){return d=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},d.apply(this,arguments)}function f(r){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(r)}function H(r,t){if(f(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(f(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function L(r){var t=H(r,"string");return f(t)==="symbol"?t:String(t)}function k(r,t,n){return t=L(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}var V={root:function(t){var n=t.props,e=t.isFilled;return F("p-inputtext p-component",{"p-disabled":n.disabled,"p-filled":e},n.className)}},c=E.extend({defaultProps:{__TYPE:"InputText",__parentMetadata:null,keyfilter:null,validateOnly:!1,tooltip:null,tooltipOptions:null,onBeforeInput:null,onInput:null,onKeyDown:null,onPaste:null,children:void 0},css:{classes:V}});function O(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),n.push.apply(n,e)}return n}function h(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(e){k(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var $=i.memo(i.forwardRef(function(r,t){var n=i.useContext(A),e=c.getProps(r,n),o=c.setMetaData(h(h({props:e},e.__parentMetadata),{},{context:{disabled:e.disabled}})),l=o.ptm,m=o.cx,x=o.isUnstyled;T(c.css.styles,x,{name:"inputtext",styled:!0});var p=i.useRef(t),I=function(a){e.onKeyDown&&e.onKeyDown(a),e.keyfilter&&u.onKeyPress(a,e.keyfilter,e.validateOnly)},S=function(a){e.onBeforeInput&&e.onBeforeInput(a),e.keyfilter&&u.onBeforeInput(a,e.keyfilter,e.validateOnly)},_=function(a){var b=a.target,P=!0;e.keyfilter&&e.validateOnly&&(P=u.validate(a,e.keyfilter)),e.onInput&&e.onInput(a,P),s.isNotEmpty(b.value)?y.addClass(b,"p-filled"):y.removeClass(b,"p-filled")},K=function(a){e.onPaste&&e.onPaste(a),e.keyfilter&&u.onPaste(a,e.keyfilter,e.validateOnly)};i.useEffect(function(){s.combinedRefs(p,t)},[p,t]);var w=i.useMemo(function(){return s.isNotEmpty(e.value)||s.isNotEmpty(e.defaultValue)},[e.value,e.defaultValue]),D=s.isNotEmpty(e.tooltip),j=B({className:m("root",{isFilled:w}),onBeforeInput:S,onInput:_,onKeyDown:I,onPaste:K},c.getOtherProps(e),l("root"));return i.createElement(i.Fragment,null,i.createElement("input",d({ref:p},j)),D&&i.createElement(R,d({target:p,content:e.tooltip},e.tooltipOptions,{pt:l("tooltip")})))}));$.displayName="InputText";export{$ as I};

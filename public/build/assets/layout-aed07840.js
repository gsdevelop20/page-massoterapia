import{j as i,r as a,f as ne,L as ae,P as J,a as U,l as Fe,R as Ve}from"./app-d1d2beaf.js";import{d as w,R as be,C as he,u as ye,D as E,O as _,b as se,m as C,T as Ee,g as ge,a as fe,Z as V,e as Ne,P as Ke,c as He,B as xe}from"./button.esm-9b855ce3.js";import{a as Ue,C as Ze,T as We}from"./index.esm-6421ebbf.js";const ze=()=>i.jsxs("div",{className:"layout-footer",children:[i.jsxs("span",{children:["Made with ",i.jsx("span",{className:"text-red-500",children:"❤️"})," by"]}),i.jsx("span",{className:"font-medium ml-2",children:"boadusamuel & team"})]}),Ie=a.createContext({}),qe=({children:r})=>{const[t,n]=a.useState(""),e={activeMenu:t,setActiveMenu:n};return i.jsx(Ie.Provider,{value:e,children:r})},Ae=r=>{const t=route(route().current()),n="",{activeMenu:e,setActiveMenu:d}=a.useContext(Ie),s=r.item,c=r.parentKey?r.parentKey+"-"+r.index:String(r.index),f=s.to&&t===s.to,u=e===c||e.startsWith(c+"-"),p=g=>{s.to&&s.to===g&&d(c)};a.useEffect(()=>{p(t)},[t,n]);const m=g=>{if(s.disabled){g.preventDefault();return}s.command&&s.command({originalEvent:g,item:s}),s.items?d(u?r.parentKey:c):d(c)},x=s.items&&s.visible!==!1&&i.jsx(Ue,{timeout:{enter:1e3,exit:450},classNames:"layout-submenu",in:r.root?!0:u,children:i.jsx("ul",{children:s.items.map((g,l)=>i.jsx(Ae,{item:g,index:l,className:g.badgeClass,parentKey:c},g.label))})},s.label);return i.jsxs("li",{className:w({"layout-root-menuitem":r.root,"active-menuitem":u}),children:[r.root&&s.visible!==!1&&i.jsx("div",{className:"layout-menuitem-root-text",children:s.label}),(!s.to||s.items)&&s.visible!==!1?i.jsxs("a",{href:s.url,onClick:g=>m(g),className:w(s.class,"p-ripple"),target:s.target,tabIndex:0,children:[i.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),i.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&i.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),i.jsx(be,{})]}):null,s.to&&!s.items&&s.visible!==!1?i.jsxs(ne,{href:s.to,replace:s.replaceUrl,target:s.target,onClick:g=>m(g),className:w(s.class,"p-ripple",{"active-route":f}),tabIndex:0,children:[i.jsx("i",{className:w("layout-menuitem-icon",s.icon)}),i.jsx("span",{className:"layout-menuitem-text",children:s.label}),s.items&&i.jsx("i",{className:"pi pi-fw pi-angle-down layout-submenu-toggler"}),i.jsx(be,{})]}):null,x]})},Ge=()=>{a.useContext(ae);const r=[{label:"Home",items:[{label:"Dashboard",icon:"pi pi-fw pi-home",to:route("dashboard")},{label:"Button",icon:"pi pi-fw pi-id-card",to:route("button")}]}];return i.jsx(qe,{children:i.jsx("ul",{className:"layout-menu",children:r.map((t,n)=>t!=null&&t.seperator?i.jsx("li",{className:"menu-separator"}):i.jsx(Ae,{item:t,root:!0,index:n},t.label))})})},Je=()=>i.jsx(Ge,{}),Re=a.forwardRef((r,t)=>{const{layoutConfig:n,layoutState:e,onMenuToggle:d,showProfileSidebar:s}=a.useContext(ae),c=a.useRef(null),f=a.useRef(null),u=a.useRef(null);return a.useImperativeHandle(t,()=>({menubutton:c.current,topbarmenu:f.current,topbarmenubutton:u.current})),i.jsxs("div",{className:"layout-topbar",children:[i.jsx(ne,{href:"/",className:"layout-topbar-logo",children:i.jsx("img",{src:`/images/logo/-${n.colorScheme!=="light"?"white":"dark"}.svg`,width:"100.22px",height:"35px",alt:"logo"})}),i.jsx("button",{ref:c,type:"button",className:"p-link layout-menu-button layout-topbar-button",onClick:d,children:i.jsx("i",{className:"pi pi-bars"})}),i.jsx("button",{ref:u,type:"button",className:"p-link layout-topbar-menu-button layout-topbar-button",onClick:s,children:i.jsx("i",{className:"pi pi-user"})}),i.jsxs("div",{ref:f,className:w("layout-topbar-menu",{"layout-topbar-menu-mobile-active":e.profileSidebarVisible}),children:[i.jsxs(ne,{href:route("profile.edit"),className:"p-link layout-topbar-button",children:[i.jsx("i",{className:"pi pi-user"}),i.jsx("span",{children:"Profile"})]}),i.jsxs(ne,{href:route("logout"),method:"post",as:"button",className:"p-link layout-topbar-button",children:[i.jsx("i",{className:"pi pi-lock"}),i.jsx("span",{children:"Logout"})]})]})]})});Re.displayName="AppTopbar";function Z(){return Z=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},Z.apply(this,arguments)}function z(r){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(r)}function Xe(r,t){if(z(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(z(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function Ye(r){var t=Xe(r,"string");return z(t)==="symbol"?t:String(t)}function Qe(r,t,n){return t=Ye(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function et(r){if(Array.isArray(r))return r}function tt(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var e,d,s,c,f=[],u=!0,p=!1;try{if(s=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=s.call(n)).done)&&(f.push(e.value),f.length!==t);u=!0);}catch(m){p=!0,d=m}finally{try{if(!u&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(p)throw d}}return f}}function ke(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function nt(r,t){if(r){if(typeof r=="string")return ke(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ke(r,t)}}function rt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function it(r,t){return et(r)||tt(r,t)||nt(r,t)||rt()}var at={root:function(t){var n=t.props,e=t.focusedState,d=t.checked;return w("p-inputswitch p-component",{"p-inputswitch-checked":d,"p-disabled":n.disabled,"p-focus":e})},slider:"p-inputswitch-slider"},st=`
@layer primereact {
    .p-inputswitch {
        position: relative;
        display: inline-block;
    }
    
    .p-inputswitch-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border: 1px solid transparent;
    }
    
    .p-inputswitch-slider:before {
        position: absolute;
        content: "";
        top: 50%;
    }
}
`,ee=he.extend({defaultProps:{__TYPE:"InputSwitch",autoFocus:!1,checked:!1,className:null,disabled:!1,falseValue:!1,id:null,inputId:null,inputRef:null,name:null,onBlur:null,onChange:null,onFocus:null,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,trueValue:!0,children:void 0},css:{classes:at,styles:st}});function je(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),n.push.apply(n,e)}return n}function ot(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?je(Object(n),!0).forEach(function(e){Qe(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var Me=a.memo(a.forwardRef(function(r,t){var n=a.useContext(J),e=ee.getProps(r,n),d=a.useState(!1),s=it(d,2),c=s[0],f=s[1],u=ee.setMetaData({props:e,state:{focused:c}}),p=u.ptm,m=u.cx,x=u.isUnstyled;ye(ee.css.styles,x,{name:"inputswitch"});var g=a.useRef(null),l=a.useRef(e.inputRef),h=e.checked===e.trueValue,N=function(v){e.disabled||(O(v),E.focus(l.current),v.preventDefault())},O=function(v){if(e.onChange){var k=h?e.falseValue:e.trueValue;e.onChange({originalEvent:v,value:k,stopPropagation:function(){v.stopPropagation()},preventDefault:function(){v.preventDefault()},target:{name:e.name,id:e.id,value:k}})}},o=function(v){f(!0),e.onFocus&&e.onFocus(v)},y=function(v){f(!1),e.onBlur&&e.onBlur(v)};a.useImperativeHandle(t,function(){return{props:e,focus:function(){return E.focus(l.current)},getElement:function(){return g.current},getInput:function(){return l.current}}}),a.useEffect(function(){_.combinedRefs(l,e.inputRef)},[l,e.inputRef]),se(function(){e.autoFocus&&E.focus(l.current,e.autoFocus)});var P=_.isNotEmpty(e.tooltip),D=ee.getOtherProps(e),A=_.reduceKeys(D,E.ARIA_PROPS),R=C({className:w(e.className,m("root",{focusedState:c,checked:h})),style:e.style,onClick:N,role:"checkbox","aria-checked":h},p("root")),M=C({className:"p-hidden-accessible"},p("hiddenInputWrapper")),L=C(ot({type:"checkbox",id:e.inputId,name:e.name,checked:h,onChange:O,onFocus:o,onBlur:y,disabled:e.disabled,role:"switch",tabIndex:e.tabIndex,"aria-checked":h},A),p("hiddenInput")),$=C({className:m("slider")},p("slider"));return a.createElement(a.Fragment,null,a.createElement("div",Z({id:e.id,ref:g},R),a.createElement("div",M,a.createElement("input",Z({ref:l},L))),a.createElement("span",$)),P&&a.createElement(Ee,Z({target:g,content:e.tooltip},e.tooltipOptions,{pt:p("tooltip")})))}));Me.displayName="InputSwitch";function W(){return W=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},W.apply(this,arguments)}function q(r){"@babel/helpers - typeof";return q=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(r)}function lt(r,t){if(q(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(q(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function ct(r){var t=lt(r,"string");return q(t)==="symbol"?t:String(t)}function ut(r,t,n){return t=ct(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function pt(r){if(Array.isArray(r))return r}function dt(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var e,d,s,c,f=[],u=!0,p=!1;try{if(s=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=s.call(n)).done)&&(f.push(e.value),f.length!==t);u=!0);}catch(m){p=!0,d=m}finally{try{if(!u&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(p)throw d}}return f}}function Se(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function mt(r,t){if(r){if(typeof r=="string")return Se(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Se(r,t)}}function ft(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bt(r,t){return pt(r)||dt(r,t)||mt(r,t)||ft()}var gt={root:function(t){var n=t.props,e=t.focusedState;return w("p-radiobutton p-component",{"p-radiobutton-checked":n.checked,"p-radiobutton-disabled":n.disabled,"p-radiobutton-focused":e})},input:function(t){var n=t.props,e=t.focusedState;return w("p-radiobutton-box",{"p-highlight":n.checked,"p-disabled":n.disabled,"p-focus":e})},icon:"p-radiobutton-icon"},ht=`
@layer primereact {
    .p-radiobutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        vertical-align: bottom;
    }
    
    .p-radiobutton-box {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .p-radiobutton-icon {
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        transform: translateZ(0) scale(.1);
        border-radius: 50%;
        visibility: hidden;
    }
    
    .p-radiobutton-box.p-highlight .p-radiobutton-icon {
        transform: translateZ(0) scale(1.0, 1.0);
        visibility: visible;
    }
}
`,K=he.extend({defaultProps:{__TYPE:"RadioButton",autoFocus:!1,checked:!1,className:null,disabled:!1,id:null,inputId:null,inputRef:null,name:null,onChange:null,onClick:null,required:!1,style:null,tabIndex:null,tooltip:null,tooltipOptions:null,value:null,children:void 0},css:{classes:gt,styles:ht}});function Ce(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),n.push.apply(n,e)}return n}function yt(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ce(Object(n),!0).forEach(function(e){ut(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var H=a.memo(a.forwardRef(function(r,t){var n=a.useContext(J),e=K.getProps(r,n),d=a.useState(!1),s=bt(d,2),c=s[0],f=s[1],u=a.useRef(null),p=a.useRef(e.inputRef),m=K.setMetaData({props:e,state:{focused:c}}),x=m.ptm,g=m.cx,l=m.isUnstyled;ye(K.css.styles,l,{name:"radiobutton",styled:!0});var h=function(k){N(k)},N=function(k){if(!e.disabled&&(e.onChange||e.onClick)){var B=e.checked,oe=k.target instanceof HTMLDivElement,le=k.target===p.current,X=le&&k.target.checked!==B,Y=oe&&(E.hasClass(u.current,"p-radiobutton-checked")===B?!B:!1);if(X||Y){var F=!B,Q={originalEvent:k,value:e.value,checked:F,stopPropagation:function(){k.stopPropagation()},preventDefault:function(){k.preventDefault()},target:{type:"radio",name:e.name,id:e.id,value:e.value,checked:F}};if(e.onClick&&e.onClick(Q),k.defaultPrevented)return;e.onChange&&e.onChange(Q),Y&&(p.current.checked=F)}E.focus(p.current),k.preventDefault()}},O=function(){f(!0)},o=function(){f(!1)},y=function(k){(k.code==="Space"||k.key===" ")&&N(k)};a.useEffect(function(){p.current&&(p.current.checked=e.checked)},[e.checked]),a.useEffect(function(){_.combinedRefs(p,e.inputRef)},[p,e.inputRef]),se(function(){e.autoFocus&&E.focus(p.current,e.autoFocus)}),a.useImperativeHandle(t,function(){return{props:e,select:h,focus:function(){return E.focus(p.current)},getElement:function(){return u.current},getInput:function(){return p.current}}});var P=_.isNotEmpty(e.tooltip),D=K.getOtherProps(e),A=_.reduceKeys(D,E.ARIA_PROPS),R=C({className:w(e.className,g("root",{focusedState:c})),style:e.style,onClick:N},K.getOtherProps(e),x("root")),M=C({className:"p-hidden-accessible"},x("hiddenInputWrapper")),L=C(yt({type:"radio",name:e.name,defaultChecked:e.checked,onFocus:O,onBlur:o,onKeyDown:y,disabled:e.disabled,required:e.required,tabIndex:e.tabIndex},A),x("hiddenInput")),$=C({className:g("input",{focusedState:c})},x("input")),I=C({className:g("icon")},x("icon"));return a.createElement(a.Fragment,null,a.createElement("div",W({id:e.id,ref:u},R),a.createElement("div",M,a.createElement("input",W({id:e.inputId,ref:p},L))),a.createElement("div",$,a.createElement("div",I))),P&&a.createElement(Ee,W({target:u,content:e.tooltip},e.tooltipOptions,{pt:x("tooltip")})))}));H.displayName="RadioButton";function ie(){return ie=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(r[e]=n[e])}return r},ie.apply(this,arguments)}function G(r){"@babel/helpers - typeof";return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},G(r)}function vt(r,t){if(G(r)!=="object"||r===null)return r;var n=r[Symbol.toPrimitive];if(n!==void 0){var e=n.call(r,t||"default");if(G(e)!=="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function xt(r){var t=vt(r,"string");return G(t)==="symbol"?t:String(t)}function kt(r,t,n){return t=xt(t),t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function jt(r){if(Array.isArray(r))return r}function St(r,t){var n=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(n!=null){var e,d,s,c,f=[],u=!0,p=!1;try{if(s=(n=n.call(r)).next,t===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(e=s.call(n)).done)&&(f.push(e.value),f.length!==t);u=!0);}catch(m){p=!0,d=m}finally{try{if(!u&&n.return!=null&&(c=n.return(),Object(c)!==c))return}finally{if(p)throw d}}return f}}function we(r,t){(t==null||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function Ct(r,t){if(r){if(typeof r=="string")return we(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);if(n==="Object"&&r.constructor&&(n=r.constructor.name),n==="Map"||n==="Set")return Array.from(r);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return we(r,t)}}function wt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function re(r,t){return jt(r)||St(r,t)||Ct(r,t)||wt()}var Pe=function(t){var n=a.useRef(void 0);return a.useEffect(function(){n.current=t}),n.current},Pt=function(t){return a.useEffect(function(){return t},[])},Ot=function(t){var n=t.target,e=n===void 0?"document":n,d=t.type,s=t.listener,c=t.options,f=t.when,u=f===void 0?!0:f,p=a.useRef(null),m=a.useRef(null),x=Pe(s),g=Pe(c),l=function(){var O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_.isNotEmpty(O.target)&&(h(),(O.when||u)&&(p.current=E.getTargetElement(O.target))),!m.current&&p.current&&(m.current=function(o){return s&&s(o)},p.current.addEventListener(d,m.current,c))},h=function(){m.current&&(p.current.removeEventListener(d,m.current,c),m.current=null)};return a.useEffect(function(){u?p.current=E.getTargetElement(e):(h(),p.current=null)},[e,u]),a.useEffect(function(){m.current&&(""+x!=""+s||g!==c)&&(h(),u&&l())},[s,c,u]),Pt(function(){h()}),[l,h]},Et=function(t,n,e){var d=function(m){(m.key==="Esc"||m.key==="Escape")&&(m.stopImmediatePropagation(),e(m))},s=Ot({type:"keydown",listener:d}),c=re(s,2),f=c[0],u=c[1];return a.useEffect(function(){if(n&&t.current)return f(),function(){u()}}),[t,e]},Nt={closeButton:"p-sidebar-close p-sidebar-icon p-link",closeIcon:"p-sidebar-close-icon",mask:function(t){var n=t.props,e=t.maskVisibleState,d=["left","right","top","bottom"],s=d.find(function(c){return c===n.position});return w("p-sidebar-mask",s?"p-sidebar-".concat(s):"",{"p-component-overlay p-component-overlay-enter":n.modal,"p-sidebar-mask-scrollblocker":n.blockScroll,"p-sidebar-visible":e,"p-sidebar-full":n.fullScreen},n.maskClassName)},header:function(t){var n=t.props;return w("p-sidebar-header",{"p-sidebar-custom-header":n.header})},content:"p-sidebar-content",icons:"p-sidebar-icons",root:function(t){var n=t.props,e=t.context;return w("p-sidebar p-component",n.className,{"p-input-filled":e&&e.inputStyle==="filled"||U.inputStyle==="filled","p-ripple-disabled":e&&e.ripple===!1||U.ripple===!1})},transition:"p-sidebar"},It=`
@layer primereact {
    .p-sidebar-mask {
        display: none;
        justify-content: center;
        align-items: center;
        pointer-events: none;
        background-color: transparent;
        transition-property: background-color;
    }
    
    .p-sidebar-visible {
        display: flex;
    }
    
    .p-sidebar-mask.p-component-overlay {
        pointer-events: auto;
    }
    
    .p-sidebar {
        display: flex;
        flex-direction: column;
        pointer-events: auto;
        transform: translate3d(0px, 0px, 0px);
        position: relative;
    }
    
    .p-sidebar-content {
        overflow-y: auto;
        flex-grow: 1;
    }
    
    .p-sidebar-header {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    
    .p-sidebar-custom-header {
        justify-content: space-between;
    }
    
    .p-sidebar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
    
    .p-sidebar-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
    }
    
    .p-sidebar-full .p-sidebar {
        transition: none;
        transform: none;
        width: 100vw !important;
        height: 100vh !important;
        max-height: 100%;
        top: 0px !important;
        left: 0px !important;
    }
    
    /* Animation */
    /* Top, Bottom, Left and Right */
    .p-sidebar-top .p-sidebar-enter,
    .p-sidebar-top .p-sidebar-exit-active {
        transform: translate3d(0px, -100%, 0px);
    }
    
    .p-sidebar-bottom .p-sidebar-enter,
    .p-sidebar-bottom .p-sidebar-exit-active {
        transform: translate3d(0px, 100%, 0px);
    }
    
    .p-sidebar-left .p-sidebar-enter,
    .p-sidebar-left .p-sidebar-exit-active {
        transform: translate3d(-100%, 0px, 0px);
    }
    
    .p-sidebar-right .p-sidebar-enter,
    .p-sidebar-right .p-sidebar-exit-active {
        transform: translate3d(100%, 0px, 0px);
    }
    
    .p-sidebar-top .p-sidebar-enter-active,
    .p-sidebar-bottom .p-sidebar-enter-active,
    .p-sidebar-left .p-sidebar-enter-active,
    .p-sidebar-right .p-sidebar-enter-active {
        transform: translate3d(0px, 0px, 0px);
        transition: all 0.3s;
    }
    
    .p-sidebar-top .p-sidebar-enter-done,
    .p-sidebar-bottom .p-sidebar-enter-done,
    .p-sidebar-left .p-sidebar-enter-done,
    .p-sidebar-right .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-top .p-sidebar-exit-active,
    .p-sidebar-bottom .p-sidebar-exit-active,
    .p-sidebar-left .p-sidebar-exit-active,
    .p-sidebar-right .p-sidebar-exit-active {
        transition: all 0.3s;
    }
    
    /* Full */
    .p-sidebar-full .p-sidebar-enter {
        opacity: 0;
        transform: scale(0.5);
    }
    
    .p-sidebar-full .p-sidebar-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: all 0.15s cubic-bezier(0, 0, 0.2, 1);
    }
    
    .p-sidebar-full .p-sidebar-enter-done {
        transform: none;
    }
    
    .p-sidebar-full .p-sidebar-exit-active {
        opacity: 0;
        transform: scale(0.5);
        transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Size */
    .p-sidebar-left .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-right .p-sidebar {
        width: 20rem;
        height: 100%;
    }
    
    .p-sidebar-top .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-bottom .p-sidebar {
        height: 10rem;
        width: 100%;
    }
    
    .p-sidebar-left .p-sidebar-sm,
    .p-sidebar-right .p-sidebar-sm {
        width: 20rem;
    }
    
    .p-sidebar-left .p-sidebar-md,
    .p-sidebar-right .p-sidebar-md {
        width: 40rem;
    }
    
    .p-sidebar-left .p-sidebar-lg,
    .p-sidebar-right .p-sidebar-lg {
        width: 60rem;
    }
    
    .p-sidebar-top .p-sidebar-sm,
    .p-sidebar-bottom .p-sidebar-sm {
        height: 10rem;
    }
    
    .p-sidebar-top .p-sidebar-md,
    .p-sidebar-bottom .p-sidebar-md {
        height: 20rem;
    }
    
    .p-sidebar-top .p-sidebar-lg,
    .p-sidebar-bottom .p-sidebar-lg {
        height: 30rem;
    }
    
    .p-sidebar-left .p-sidebar-view,
    .p-sidebar-right .p-sidebar-view,
    .p-sidebar-top .p-sidebar-view,
    .p-sidebar-bottom .p-sidebar-view {
        width: 100%;
        height: 100%;
    }
    
    .p-sidebar-left .p-sidebar-content,
    .p-sidebar-right .p-sidebar-content,
    .p-sidebar-top .p-sidebar-content,
    .p-sidebar-bottom .p-sidebar-content {
        width: 100%;
        height: 100%;
    }
    
    @media screen and (max-width: 64em) {
        .p-sidebar-left .p-sidebar-lg,
        .p-sidebar-left .p-sidebar-md,
        .p-sidebar-right .p-sidebar-lg,
        .p-sidebar-right .p-sidebar-md {
            width: 20rem;
        }
    }        
}
`,At={mask:function(t){var n=t.props;return{position:"fixed",height:"100%",width:"100%",left:0,top:0,display:"flex",justifyContent:n.position==="left"?"flex-start":n.position==="right"?"flex-end":"center",alignItems:n.position==="top"?"flex-start":n.position==="bottom"?"flex-end":"center"}}},te=he.extend({defaultProps:{__TYPE:"Sidebar",id:null,style:null,className:null,maskStyle:null,maskClassName:null,visible:!1,position:"left",fullScreen:!1,blockScroll:!1,baseZIndex:0,dismissable:!0,showCloseIcon:!0,closeIcon:null,ariaCloseLabel:null,closeOnEscape:!0,icons:null,modal:!0,appendTo:null,transitionOptions:null,onShow:null,onHide:null,children:void 0},css:{classes:Nt,styles:It,inlineStyles:At}});function Oe(r,t){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);t&&(e=e.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),n.push.apply(n,e)}return n}function Rt(r){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Oe(Object(n),!0).forEach(function(e){kt(r,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(n,e))})}return r}var De=a.forwardRef(function(r,t){var n=a.useContext(J),e=te.getProps(r,n),d=a.useState(!1),s=re(d,2),c=s[0],f=s[1],u=a.useState(!1),p=re(u,2),m=p[0],x=p[1],g=te.setMetaData({props:e,state:{containerVisible:c}}),l=g.ptm,h=g.cx,N=g.sx,O=g.isUnstyled;ye(te.css.styles,O,{name:"sidebar"});var o=a.useRef(null),y=a.useRef(null),P=a.useRef(null);Et(y,e.closeOnEscape,function(j){V.get(y.current)===V.getCurrent("modal",n&&n.autoZIndex||U.autoZIndex)&&v(j)});var D=ge({type:"click",listener:function(S){S.button===0&&L(S)&&v(S)}}),A=re(D,2),R=A[0],M=A[1],L=function(S){return o&&o.current&&!o.current.contains(S.target)},$=function(){var S=document.activeElement,T=S&&o&&o.current.contains(S);!T&&e.showCloseIcon&&P.current.focus()},I=function(S){e.dismissable&&e.modal&&y.current===S.target&&v(S)},v=function(S){e.onHide(),S.preventDefault()},k=function(){e.onShow&&e.onShow(),$(),le()},B=function(){e.modal&&E.addClass(y.current,"p-component-overlay-leave")},oe=function(){V.clear(y.current),f(!1),X()},le=function(){e.dismissable&&!e.modal&&R(),e.blockScroll&&E.blockBodyScroll()},X=function(){M(),e.blockScroll&&E.unblockBodyScroll()};a.useImperativeHandle(t,function(){return{props:e,getElement:function(){return o.current},gteMask:function(){return y.current},getCloseIcon:function(){return P.current}}}),se(function(){e.visible&&f(!0)}),fe(function(){e.visible&&!c&&f(!0),e.visible!==m&&c&&x(e.visible)}),fe(function(){c&&(V.set("modal",y.current,n&&n.autoZIndex||U.autoZIndex,e.baseZIndex||n&&n.zIndex.modal||U.zIndex.modal),x(!0))},[c]),fe(function(){m&&(M(),e.dismissable&&!e.modal&&R())},[e.dismissable,e.modal,m]),Ne(function(){X(),y.current&&V.clear(y.current)});var Y=function(){var S=C({type:"button",ref:P,className:h("closeButton"),onClick:function(me){return v(me)},"aria-label":de},l("closeButton")),T=C({className:h("closeIcon")},l("closeIcon")),ue=e.closeIcon||a.createElement(We,T),pe=He.getJSXIcon(ue,Rt({},T),{props:e}),de=e.ariaCloseLabel||Fe("close");return e.showCloseIcon?a.createElement("button",S,pe,a.createElement(be,null)):null},F=function(){return e.header?_.getJSXElement(e.header,e):null},Q=function(){return e.icons?_.getJSXElement(e.icons,e):null},ce=function(){var S=Y(),T=Q(),ue=F(),pe={enter:e.fullScreen?150:300,exit:e.fullScreen?150:300},de=C({ref:y,style:N("mask"),className:h("mask",{maskVisibleState:c}),onMouseDown:function(Te){return I(Te)}},l("mask")),ve=C({id:e.id,className:h("root",{context:n}),style:e.style,role:"complementary"},te.getOtherProps(e),l("root")),me=C({className:h("header")},l("header")),_e=C({className:h("content")},l("content")),$e=C({className:h("icons")},l("icons")),Be=C({classNames:h("transition"),in:m,timeout:pe,options:e.transitionOptions,unmountOnExit:!0,onEntered:k,onExiting:B,onExited:oe},l("transition"));return a.createElement("div",de,a.createElement(Ze,ie({nodeRef:o},Be),a.createElement("div",ie({ref:o},ve),a.createElement("div",me,ue,a.createElement("div",$e,T,S)),a.createElement("div",_e,e.children))))},Le=function(){var S=ce();return a.createElement(Ke,{element:S,appendTo:e.appendTo,visible:!0})};return c&&Le()});De.displayName="Sidebar";function b({onClick:r,img:t,imgAlt:n}){return i.jsx("div",{className:"col-3",children:i.jsx("button",{className:"p-link w-2rem h-2rem",onClick:r,children:i.jsx("img",{src:t,className:"w-2rem h-2rem",alt:n})})})}const Mt=r=>{const[t]=a.useState([12,13,14,15,16]),{layoutConfig:n,setLayoutConfig:e,layoutState:d,setLayoutState:s}=a.useContext(ae),{setRipple:c,changeTheme:f}=a.useContext(J),u=()=>{s(o=>({...o,configSidebarVisible:!0}))},p=()=>{s(o=>({...o,configSidebarVisible:!1}))},m=o=>{e(y=>({...y,inputStyle:o.value}))},x=o=>{c(o.value),e(y=>({...y,ripple:o.value}))},g=o=>{e(y=>({...y,menuMode:o.value}))},l=(o,y)=>{f==null||f(n.theme,o,"theme-css",()=>{e(P=>({...P,theme:o,colorScheme:y}))})},h=()=>{e(o=>({...o,scale:o.scale-1}))},N=()=>{e(o=>({...o,scale:o.scale+1}))},O=()=>{document.documentElement.style.fontSize=n.scale+"px"};return a.useEffect(()=>{O()},[n.scale]),i.jsxs(i.Fragment,{children:[i.jsx("button",{className:"layout-config-button config-link",type:"button",onClick:u,children:i.jsx("i",{className:"pi pi-cog"})}),i.jsxs(De,{visible:d.configSidebarVisible,onHide:p,position:"right",className:"layout-config-sidebar w-20rem",children:[!r.simple&&i.jsxs(i.Fragment,{children:[i.jsx("h5",{children:"Scale"}),i.jsxs("div",{className:"flex align-items-center",children:[i.jsx(xe,{icon:"pi pi-minus",type:"button",onClick:h,rounded:!0,text:!0,className:"w-2rem h-2rem mr-2",disabled:n.scale===t[0]}),i.jsx("div",{className:"flex gap-2 align-items-center",children:t.map(o=>i.jsx("i",{className:w("pi pi-circle-fill",{"text-primary-500":o===n.scale,"text-300":o!==n.scale})},o))}),i.jsx(xe,{icon:"pi pi-plus",type:"button",onClick:N,rounded:!0,text:!0,className:"w-2rem h-2rem ml-2",disabled:n.scale===t[t.length-1]})]}),i.jsx("h5",{children:"Menu Type"}),i.jsxs("div",{className:"flex",children:[i.jsxs("div",{className:"field-radiobutton flex-1",children:[i.jsx(H,{name:"menuMode",value:"static",checked:n.menuMode==="static",onChange:o=>g(o),inputId:"mode1"}),i.jsx("label",{htmlFor:"mode1",children:"Static"})]}),i.jsxs("div",{className:"field-radiobutton flex-1",children:[i.jsx(H,{name:"menuMode",value:"overlay",checked:n.menuMode==="overlay",onChange:o=>g(o),inputId:"mode2"}),i.jsx("label",{htmlFor:"mode2",children:"Overlay"})]})]}),i.jsx("h5",{children:"Input Style"}),i.jsxs("div",{className:"flex",children:[i.jsxs("div",{className:"field-radiobutton flex-1",children:[i.jsx(H,{name:"inputStyle",value:"outlined",checked:n.inputStyle==="outlined",onChange:o=>m(o),inputId:"outlined_input"}),i.jsx("label",{htmlFor:"outlined_input",children:"Outlined"})]}),i.jsxs("div",{className:"field-radiobutton flex-1",children:[i.jsx(H,{name:"inputStyle",value:"filled",checked:n.inputStyle==="filled",onChange:o=>m(o),inputId:"filled_input"}),i.jsx("label",{htmlFor:"filled_input",children:"Filled"})]})]}),i.jsx("h5",{children:"Ripple Effect"}),i.jsx(Me,{checked:n.ripple,onChange:o=>x(o)})]}),i.jsx("h5",{children:"Bootstrap"}),i.jsxs("div",{className:"grid",children:[i.jsx(b,{img:"/images/layout/themes/bootstrap4-light-blue.svg",imgAlt:"Bootstrap Light Blue",onClick:()=>l("bootstrap4-light-blue","light")}),i.jsx(b,{img:"/images/layout/themes/bootstrap4-light-purple.svg",imgAlt:"Bootstrap Light Purple",onClick:()=>l("bootstrap4-light-purple","light")}),i.jsx(b,{img:"/images/layout/themes/bootstrap4-dark-blue.svg",imgAlt:"Bootstrap Dark Blue",onClick:()=>l("bootstrap4-dark-blue","dark")}),i.jsx(b,{img:"/images/layout/themes/bootstrap4-dark-purple.svg",imgAlt:"Bootstrap Dark Purple",onClick:()=>l("bootstrap4-dark-purple","dark")})]}),i.jsx("h5",{children:"Material Design"}),i.jsxs("div",{className:"grid",children:[i.jsx(b,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>l("md-light-indigo","light")}),i.jsx(b,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light DeepPurple",onClick:()=>l("md-light-deeppurple","light")}),i.jsx(b,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>l("md-dark-indigo","dark")}),i.jsx(b,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark DeepPurple",onClick:()=>l("md-dark-deeppurple","dark")})]}),i.jsx("h5",{children:"Material Design Compact"}),i.jsxs("div",{className:"grid",children:[i.jsx(b,{img:"/images/layout/themes/md-light-indigo.svg",imgAlt:"Material Light Indigo",onClick:()=>l("mdc-light-indigo","light")}),i.jsx(b,{img:"/images/layout/themes/md-light-deeppurple.svg",imgAlt:"Material Light Deep Purple",onClick:()=>l("mdc-light-deeppurple","light")}),i.jsx(b,{img:"/images/layout/themes/md-dark-indigo.svg",imgAlt:"Material Dark Indigo",onClick:()=>l("mdc-dark-indigo","dark")}),i.jsx(b,{img:"/images/layout/themes/md-dark-deeppurple.svg",imgAlt:"Material Dark Deep Purple",onClick:()=>l("mdc-dark-deeppurple","dark")})]}),i.jsx("h5",{children:"Tailwind"}),i.jsx("div",{className:"grid",children:i.jsx(b,{img:"/images/layout/themes/tailwind-light.png",imgAlt:"Tailwind Light",onClick:()=>l("tailwind-light","light")})}),i.jsx("h5",{children:"Fluent UI"}),i.jsx("div",{className:"grid",children:i.jsx(b,{img:"/images/layout/themes/fluent-light.png",imgAlt:"Fluent Light",onClick:()=>l("fluent-light","light")})}),i.jsx("h5",{children:"PrimeOne Design - 2022"}),i.jsxs("div",{className:"grid",children:[i.jsx(b,{img:"/images/layout/themes/lara-light-indigo.png",imgAlt:"Lara Light Indigo",onClick:()=>l("lara-light-indigo","light")}),i.jsx(b,{img:"/images/layout/themes/lara-light-blue.png",imgAlt:"Lara Light Blue",onClick:()=>l("lara-light-blue","light")}),i.jsx(b,{img:"/images/layout/themes/lara-light-purple.png",imgAlt:"Lara Light Purple",onClick:()=>l("lara-light-purple","light")}),i.jsx(b,{img:"/images/layout/themes/lara-light-teal.png",imgAlt:"Lara Light Teal",onClick:()=>l("lara-light-teal","light")}),i.jsx(b,{img:"/images/layout/themes/lara-dark-indigo.png",imgAlt:"Lara Dark Indigo",onClick:()=>l("lara-dark-indigo","dark")}),i.jsx(b,{img:"/images/layout/themes/lara-dark-blue.png",imgAlt:"Lara Dark Blue",onClick:()=>l("lara-dark-blue","dark")}),i.jsx(b,{img:"/images/layout/themes/lara-dark-purple.png",imgAlt:"Lara Dark Purple",onClick:()=>l("lara-dark-purple","dark")}),i.jsx(b,{img:"/images/layout/themes/lara-dark-teal.png",imgAlt:"Lara Dark Teal",onClick:()=>l("lara-dark-teal","dark")})]}),i.jsx("h5",{children:"PrimeOne Design - 2021"}),i.jsxs("div",{className:"grid",children:[i.jsx(b,{img:"/images/layout/themes/saga-blue.png",imgAlt:"Saga Blue",onClick:()=>l("saga-blue","light")}),i.jsx(b,{img:"/images/layout/themes/saga-green.png",imgAlt:"Saga Green",onClick:()=>l("saga-green","light")}),i.jsx(b,{img:"/images/layout/themes/saga-orange.png",imgAlt:"Saga Orange",onClick:()=>l("saga-orange","dark")}),i.jsx(b,{img:"/images/layout/themes/saga-purple.png",imgAlt:"Saga Purple",onClick:()=>l("saga-purple","light")}),i.jsx(b,{img:"/images/layout/themes/vela-blue.png",imgAlt:"Vela Blue",onClick:()=>l("vela-blue","dark")}),i.jsx(b,{img:"/images/layout/themes/vela-green.png",imgAlt:"Vela Green",onClick:()=>l("vela-green","dark")}),i.jsx(b,{img:"/images/layout/themes/vela-orange.png",imgAlt:"Vela Orange",onClick:()=>l("vela-orange","dark")}),i.jsx(b,{img:"/images/layout/themes/vela-purple.png",imgAlt:"Vela Purple",onClick:()=>l("vela-purple","dark")}),i.jsx(b,{img:"/images/layout/themes/arya-blue.png",imgAlt:"Arya Blue",onClick:()=>l("arya-blue","dark")}),i.jsx(b,{img:"/images/layout/themes/arya-green.png",imgAlt:"Arya Green",onClick:()=>l("arya-green","dark")}),i.jsx(b,{img:"/images/layout/themes/arya-orange.png",imgAlt:"Arya Orange",onClick:()=>l("arya-orange","dark")}),i.jsx(b,{img:"/images/layout/themes/arya-purple.png",imgAlt:"Arya Purple",onClick:()=>l("arya-purple","dark")})]})]})]})},Dt=({children:r})=>{const{layoutConfig:t,layoutState:n,setLayoutState:e}=a.useContext(ae),{setRipple:d}=a.useContext(J),s=a.useRef(null),c=a.useRef(null),[f,u]=ge({type:"click",listener:o=>{var P,D,A,R,M,L;!((P=c.current)!=null&&P.isSameNode(o.target)||(D=c.current)!=null&&D.contains(o.target)||(R=(A=s.current)==null?void 0:A.menubutton)!=null&&R.isSameNode(o.target)||(L=(M=s.current)==null?void 0:M.menubutton)!=null&&L.contains(o.target))&&g()}}),p=route().current();a.useEffect(()=>{g(),l()},[p]);const[m,x]=ge({type:"click",listener:o=>{var P,D,A,R,M,L,$,I;!((D=(P=s.current)==null?void 0:P.topbarmenu)!=null&&D.isSameNode(o.target)||(R=(A=s.current)==null?void 0:A.topbarmenu)!=null&&R.contains(o.target)||(L=(M=s.current)==null?void 0:M.topbarmenubutton)!=null&&L.isSameNode(o.target)||(I=($=s.current)==null?void 0:$.topbarmenubutton)!=null&&I.contains(o.target))&&l()}}),g=()=>{e(o=>({...o,overlayMenuActive:!1,staticMenuMobileActive:!1,menuHoverActive:!1})),u(),N()},l=()=>{e(o=>({...o,profileSidebarVisible:!1})),x()},h=()=>{document.body.classList?document.body.classList.add("blocked-scroll"):document.body.className+=" blocked-scroll"},N=()=>{document.body.classList?document.body.classList.remove("blocked-scroll"):document.body.className=document.body.className.replace(new RegExp("(^|\\b)"+"blocked-scroll".split(" ").join("|")+"(\\b|$)","gi")," ")};se(()=>{d(t.ripple)}),a.useEffect(()=>{(n.overlayMenuActive||n.staticMenuMobileActive)&&f(),n.staticMenuMobileActive&&h()},[n.overlayMenuActive,n.staticMenuMobileActive]),a.useEffect(()=>{n.profileSidebarVisible&&m()},[n.profileSidebarVisible]),Ne(()=>{u(),x()});const O=w("layout-wrapper",{"layout-overlay":t.menuMode==="overlay","layout-static":t.menuMode==="static","layout-static-inactive":n.staticMenuDesktopInactive&&t.menuMode==="static","layout-overlay-active":n.overlayMenuActive,"layout-mobile-active":n.staticMenuMobileActive,"p-input-filled":t.inputStyle==="filled","p-ripple-disabled":!t.ripple});return i.jsx(Ve.Fragment,{children:i.jsxs("div",{className:O,children:[i.jsx(Re,{ref:s}),i.jsx("div",{ref:c,className:"layout-sidebar",children:i.jsx(Je,{})}),i.jsxs("div",{className:"layout-main-container",children:[i.jsx("div",{className:"layout-main",children:r}),i.jsx(ze,{})]}),i.jsx(Mt,{}),i.jsx("div",{className:"layout-mask"})]})})},Tt=Dt;export{Tt as L};

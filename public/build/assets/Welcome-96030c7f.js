import{R as i,r as d,j as e,c as v,d as w,s as y,_ as u}from"./app-fd4c70a8.js";var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},g=i.createContext&&i.createContext(b),N=["attr","size","title"];function O(a,t){if(a==null)return{};var s=C(a,t),r,n;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);for(n=0;n<o.length;n++)r=o[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(a,r)&&(s[r]=a[r])}return s}function C(a,t){if(a==null)return{};var s={};for(var r in a)if(Object.prototype.hasOwnProperty.call(a,r)){if(t.indexOf(r)>=0)continue;s[r]=a[r]}return s}function m(){return m=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(a[r]=s[r])}return a},m.apply(this,arguments)}function f(a,t){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable})),s.push.apply(s,r)}return s}function h(a){for(var t=1;t<arguments.length;t++){var s=arguments[t]!=null?arguments[t]:{};t%2?f(Object(s),!0).forEach(function(r){P(a,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach(function(r){Object.defineProperty(a,r,Object.getOwnPropertyDescriptor(s,r))})}return a}function P(a,t,s){return t=z(t),t in a?Object.defineProperty(a,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):a[t]=s,a}function z(a){var t=_(a,"string");return typeof t=="symbol"?t:t+""}function _(a,t){if(typeof a!="object"||!a)return a;var s=a[Symbol.toPrimitive];if(s!==void 0){var r=s.call(a,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(a)}function j(a){return a&&a.map((t,s)=>i.createElement(t.tag,h({key:s},t.attr),j(t.child)))}function c(a){return t=>i.createElement(S,m({attr:h({},a.attr)},t),j(a.child))}function S(a){var t=s=>{var{attr:r,size:n,title:o}=a,p=O(a,N),x=n||s.size||"1em",l;return s.className&&(l=s.className),a.className&&(l=(l?l+" ":"")+a.className),i.createElement("svg",m({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},s.attr,r,p,{className:l,style:h(h({color:a.color||s.color},s.style),a.style),height:x,width:x,xmlns:"http://www.w3.org/2000/svg"}),o&&i.createElement("title",null,o),a.children)};return g!==void 0?i.createElement(g.Consumer,null,s=>t(s)):t(b)}function E(a){return c({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(a)}function A(a){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(a)}function B(a){return c({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"},child:[]}]})(a)}function I(a){return c({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"},child:[]}]})(a)}function L(a){return c({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"},child:[]}]})(a)}const M=i.lazy(()=>u(()=>import("./HeaderComponent-c4765bcb.js"),["assets/HeaderComponent-c4765bcb.js","assets/app-fd4c70a8.js","assets/app-04931554.css","assets/HeaderComponent-9bf857a0.css"])),D=i.lazy(()=>u(()=>import("./Carousel2-48352081.js"),["assets/Carousel2-48352081.js","assets/app-fd4c70a8.js","assets/app-04931554.css","assets/Carousel2-3c729d31.css"])),R=i.lazy(()=>u(()=>import("./ProductsComponent-7c2e1370.js"),["assets/ProductsComponent-7c2e1370.js","assets/app-fd4c70a8.js","assets/app-04931554.css","assets/index-60c20a7d.js"])),k=i.lazy(()=>u(()=>import("./Cards-054a169c.js"),["assets/Cards-054a169c.js","assets/app-fd4c70a8.js","assets/app-04931554.css","assets/index-60c20a7d.js"])),q=[{title:"Atestado Admissional",description:"",imageSrc:"/images/home/icons/estetoscopio.png"},{title:"Exames laboratóriais",description:"",imageSrc:"/images/home/icons/estetoscopio.png"},{title:"Consultas Médicas",description:"",imageSrc:"/images/home/icons/estetoscopio.png"}],F=[{title:"Ortopedia ",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"},{title:"Dermatologia",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"},{title:"Pediatria",description:"",imageSrc:"/images/home/icons/simbolo-de-medicina.png"}];function T({auth:a,laravelVersion:t,phpVersion:s}){const[r,n]=d.useState(1),o=d.useMemo(()=>({position:"fixed",bottom:"20px",right:"20px",zIndex:9999,width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#25D366",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${r})`}),[r]),p=d.useMemo(()=>({position:"fixed",bottom:"120px",right:"20px",zIndex:9999,width:"80px",height:"80px",borderRadius:"50%",backgroundColor:"#ff387f",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${r})`}),[r]);return e.jsx(e.Fragment,{children:e.jsx(v,{children:e.jsxs(w,{children:[e.jsx(y,{title:"Clínica Amor Brasil"}),e.jsx("a",{href:"#main-content",className:"skip-link hidden",children:"Pular para o conteúdo principal"}),e.jsxs(d.Suspense,{fallback:e.jsx("div",{children:"Carregando..."}),children:[e.jsx("header",{children:e.jsx(M,{auth:a})}),e.jsxs("main",{id:"main-content",children:[e.jsx("section",{"aria-labelledby":"banner-heading",children:e.jsx("div",{className:"w-full banner flex justify-content-center flex-wrap gap-8",style:{backgroundImage:'url("/images/home/banners.jpg")'},role:"img","aria-label":"Banner da Clínica Amor Brasil com imagem de fundo",children:e.jsxs("div",{className:"container flex flex-column md:flex-row justify-content-center align-items-center gap-5",children:[e.jsx("img",{src:"/images/home/medica.webp",alt:"Médica sorridente representando a Clínica",width:400}),e.jsxs("div",{className:"d-flex flex-column justify-content-center align-items-center gap-5",children:[e.jsx("h1",{id:"banner-heading",className:"tile text-center font-bold text-white",children:"A melhor clínica da região, com qualidade excepcional e preços acessíveis."}),e.jsx("a",{href:"#contato",className:"btn w-full md:w-13rem","aria-label":"Entre em contato",children:"Entre em contato"})]})]})})}),e.jsxs("section",{className:"w-full mt-8","aria-labelledby":"about-us-heading",children:[e.jsx("h2",{id:"about-us-heading",className:"font-bold text-center",children:"Sobre Nós"}),e.jsxs("div",{className:"container flex-column md:flex-row rounded about-us p-5 md:p-8 flex justify-content-center align-items-center gap-8",children:[e.jsx("div",{children:e.jsx("img",{className:"rounded",src:"/images/home/medical.jpg",width:400,alt:"Equipe médica em ação",loading:"lazy"})}),e.jsxs("div",{className:"w-full",children:[e.jsx("p",{className:"w-full",children:"Na Amor Saúde, acreditamos que o cuidado com a saúde vai além de exames e tratamentos. Nosso compromisso é com o bem-estar completo de nossos pacientes, oferecendo um atendimento humanizado, acolhedor e personalizado. Nossa missão é proporcionar uma experiência de saúde em que você se sinta valorizado, escutado e, acima de tudo, cuidado com carinho e respeito."}),e.jsx("p",{className:"w-full",children:"Com uma equipe de profissionais altamente qualificados e infraestrutura moderna, buscamos sempre as melhores soluções para sua saúde, com um olhar atento e dedicado a cada necessidade. Na Amor Saúde, entendemos que a saúde é um ato de amor, e estamos aqui para cuidar de você com a máxima atenção e competência."}),e.jsx("a",{href:"#contato",className:"btn w-full","aria-label":"Entre em contato",children:"Entre em contato"})]})]})]}),e.jsxs("section",{className:"w-full mt-5 banner banner-2 flex justify-content-center align-items-center caroucel-slider","aria-labelledby":"services-heading",style:{backgroundImage:'url("/images/home/hospital.jpg")'},children:[e.jsx("h2",{id:"services-heading",className:"visually-hidden",style:{zIndex:1},children:"Nossos Serviços"}),e.jsxs("div",{className:"flex gap-5 flex-column md:flex-row align-items-center",style:{zIndex:1},children:[e.jsx(D,{}),e.jsx(R,{data:q})]})]}),e.jsx(k,{data:F}),e.jsx("section",{id:"contato",className:"contact-section mt-8","aria-labelledby":"contact-heading",children:e.jsxs("div",{className:"container",children:[e.jsx("h2",{id:"contact-heading",className:"text-center section-title",children:"Não perca tempo e agende sua consulta"}),e.jsxs("div",{className:"row",children:[e.jsx("div",{className:"col-md-6 mb-4",children:e.jsxs("div",{className:"contact-card p-4",children:[e.jsx("h4",{className:"mb-4",children:"Dados de Contato"}),e.jsxs("address",{children:[e.jsxs("p",{children:[e.jsx(I,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Endereço:"})," St. Res. Leste | Buritís Q 2 | - Planaltina, Brasília - DF"]}),e.jsxs("p",{children:[e.jsx(L,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Telefone:"})," (61) 99624-6801"]}),e.jsxs("p",{children:[e.jsx(A,{"aria-hidden":"true",className:"me-2"}),e.jsx("strong",{children:"Horário:"})," Segunda a Sexta: 8h - 19h e aos Sábados: 8h - 12h"]})]}),e.jsx("a",{href:"tel:5561996246801",className:"btn w-full mt-3 md:w-13rem","aria-label":"Ligar para a Clínica",children:"Ligue agora"})]})}),e.jsx("div",{className:"col-md-6",children:e.jsx("div",{className:"map-container rounded shadow",children:e.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.122347701234!2d-47.6478812!3d-15.6171571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a6d30aa79a461%3A0x811a9a4592f18913!2sCl%C3%ADnica%20Amor%20Brasil!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr",title:"Localização da Clínica Amor Brasil",frameBorder:"0",style:{border:0,width:"100%",height:"295px"},allowFullScreen:"",loading:"lazy"})})})]})]})})]}),e.jsx("a",{href:"https://wa.me/5561996246801",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:o,onMouseEnter:()=>n(1.1),onMouseLeave:()=>n(1),"aria-label":"Chat via WhatsApp",children:e.jsx("img",{src:"/images/home/icons/whatsapp.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsx("a",{href:"https://www.instagram.com/clinicaamorbrasil/",target:"_blank",rel:"noopener noreferrer",className:"float-btn",style:p,onMouseEnter:()=>n(1.1),onMouseLeave:()=>n(1),"aria-label":"Instagram",children:e.jsx("img",{src:"/images/home/icons/instagram.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsxs("footer",{className:"text-center mt-8 text-lg-start bg-body-tertiary text-muted",role:"contentinfo",children:[e.jsxs("section",{className:"d-flex justify-content-center justify-content-lg-between p-4 border-bottom","aria-label":"Redes sociais",children:[e.jsx("div",{className:"me-5 d-none d-lg-block",children:e.jsx("span",{children:"Conecte-se conosco nas redes sociais:"})}),e.jsx("div",{children:e.jsxs("a",{href:"https://www.instagram.com/clinicaamorbrasil/",className:"me-4 text-reset","aria-label":"Instagram",children:[e.jsx(E,{"aria-hidden":"true"}),e.jsx("span",{className:"sr-only",children:"Instagram"})]})})]}),e.jsx("section",{children:e.jsx("div",{className:"container text-center text-md-start mt-5",children:e.jsx("div",{className:"row mt-3",children:e.jsxs("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4",children:[e.jsxs("h6",{className:"text-uppercase fw-bold mb-4",children:[e.jsx(B,{"aria-hidden":"true",className:"me-3"}),"Clínica Amor Brasil"]}),e.jsx("p",{children:"A melhor clínica da região, com qualidade excepcional e preços acessíveis."})]})})})}),e.jsx("div",{className:"text-center p-4",style:{backgroundColor:"rgba(0, 0, 0, 0.05)"},children:e.jsx("div",{className:"text-reset fw-bold",children:"© 2025 Copyright: Clínica Amor Brasil"})})]})]})]})})})}export{T as default};

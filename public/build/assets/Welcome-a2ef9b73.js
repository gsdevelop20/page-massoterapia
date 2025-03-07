import{r as i,j as e,b as f,c as b,s as w,R as p,_ as u}from"./app-223da256.js";/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),x=(...r)=>r.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var y={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=i.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:a,iconNode:c,...m},g)=>i.createElement("svg",{ref:g,...y,width:t,height:t,stroke:r,strokeWidth:s?Number(n)*24/Number(t):n,className:x("lucide",o),...m},[...c.map(([l,h])=>i.createElement(l,h)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=(r,t)=>{const n=i.forwardRef(({className:s,...o},a)=>i.createElement(v,{ref:a,iconNode:t,className:x(`lucide-${j(r)}`,s),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.476.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],d=C("CircleCheckBig",N);const A=p.lazy(()=>u(()=>import("./Carousel-52f5accd.js"),["assets/Carousel-52f5accd.js","assets/app-223da256.js","assets/app-04931554.css","assets/pagination-f4c726af.js","assets/pagination-d66ac298.css","assets/Carousel-29aa3458.css"])),k=p.lazy(()=>u(()=>import("./Cards-f879bc51.js"),["assets/Cards-f879bc51.js","assets/app-223da256.js","assets/app-04931554.css","assets/pagination-f4c726af.js","assets/pagination-d66ac298.css","assets/Cards-cacea82d.css"])),S=[{title:"Liberação Miofascial",description:"",btnClass:"btn-mio",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Liberação Miofascial."},{title:"Drenagem Linfática",description:"",btnClass:"btn-dren",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Drenagem Linfática."},{title:"Massagem Desportiva",description:"",btnClass:"btn-desp",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Massagem Desportiva."},{title:"Massagem Shiatsu",description:"",btnClass:"btn-shi",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Massagem Shiatsu."},{title:"Auriculoterapia",description:"",btnClass:"btn-aur",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Auriculoterapia."},{title:"Massagem Relaxante",description:"",btnClass:"btn-relax",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Massagem Relaxante."},{title:"Acupuntura",description:"",btnClass:"btn-acu",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Acupuntura."},{title:"Massagem Terapêutica",description:"",btnClass:"btn-terap",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Massagem Terapêutica."},{title:"Pedras Quentes",description:"",btnClass:"btn-pedras",imageSrc:"/images/home/icons/massagem-facial.png",url:"https://wa.me/5561996246801?text=Olá, gostaria de agendar uma sessão de Pedras Quentes."}],F=[{title:"1,000+",description:"Pacientes Atendidos"},{title:"100+",description:"Planos de Saúde"},{title:"28+",description:"Anos de Experiência"},{title:"97%",description:"Pacientes Satisfeitos"}];function M({auth:r,laravelVersion:t,phpVersion:n}){const[s,o]=i.useState(1),a={section:{textAlign:"center",padding:"50px",backgroundColor:"#f9f5f0"},title:{color:"#ffffff",fontSize:"2em",fontWeight:"800"},description:{fontSize:"1.4em",color:"#ffffff",maxWidth:"800px"},list:{padding:0,fontSize:"1.1em",color:"#ffffff"},listItem:{display:"flex",alignItems:"center",gap:"10px",margin:"8px 0"},button:{display:"inline-flex",alignItems:"center",padding:"15px 25px",fontSize:"1.2em",color:"white",backgroundColor:"#d37435",textDecoration:"none",borderRadius:"5px",marginTop:"20px",border:"none",cursor:"pointer"}},c=i.useMemo(()=>({position:"fixed",bottom:"20px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#25D366",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${s})`}),[s]),m=i.useMemo(()=>({position:"fixed",bottom:"190px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${s})`}),[s]),g=i.useMemo(()=>({position:"fixed",bottom:"103px",right:"20px",zIndex:9999,width:"70px",height:"70px",borderRadius:"50%",backgroundColor:"#e5e5e5",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0px 4px 10px rgba(0, 0, 0, 0.3)",transition:"transform 0.6s ease-in-out",transform:`scale(${s})`}),[s]);return e.jsx(e.Fragment,{children:e.jsx(f,{children:e.jsxs(b,{children:[e.jsx(w,{title:"Massoterapia"}),e.jsx("a",{href:"#main-content",className:"skip-link hidden",children:"Pular para o conteúdo principal"}),e.jsxs(i.Suspense,{fallback:e.jsx("div",{children:"Carregando..."}),children:[e.jsxs("section",{className:"w-full position-relative section-header",style:{bottom:"2px",backgroundColor:"#537859",height:"45rem",backgroundImage:"url(/images/home/banner.jpg)"},children:[e.jsx("div",{className:"overlay"}),e.jsx("div",{className:"w-full mx-auto d-flexalign-items-center content",style:{background:"transparent"},children:e.jsxs("div",{className:"w-full flex mb-1 md:mb-4 justify-content-between align-items-center",children:[e.jsx("div",{children:e.jsx("img",{className:"p-5 logo",alt:"logo clinica Amor Brasil",src:"/images/logo/logo.webp"})}),e.jsx("div",{className:"bg-white w-full ml-4 mr-4",style:{height:"0.2rem"}})]})}),e.jsxs("div",{className:"w-full flex p-4 md:p-5 flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center",children:[e.jsxs("div",{className:"section-info d-flex flex-column",children:[e.jsxs("h2",{style:a.title,className:"",children:["Renove seu corpo e sua mente! ",e.jsx("br",{}),"Relaxe, alivie o estresse e recarregue suas energias com a massoterapia."]}),e.jsx("p",{className:"text-white",children:"Na Lévi, auxiliamos e direcionamos pacientes, em uma jornada leve pela busca do melhor potencial cognitivo, emocional e físico de cada indivíduo bem como da família."}),e.jsx("img",{className:"section-1-img-mobile w-100 mt-3 mb-3",style:{Width:"60%"},alt:" imagem de massagem",src:"/images/home/banner.png"}),e.jsx("button",{onClick:l=>window.open("https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?","_blank"),style:{fontSize:"22px",backgroundColor:"#01d758"},className:"btn-agendar mt-5 md:w-6 btn-pulse w-full text-white border-0 font-bold py-2 px-4 rounded",children:"AGENDAR AGORA"})]}),e.jsx("img",{className:"section-1-img ",width:700,style:{Width:"60%"},alt:"logo w-full  clinica Amor Brasil",src:"/images/home/banner.png"})]})]}),e.jsx(A,{data:S}),e.jsx("section",{className:"mt-2rem",style:{marginTop:"7rem"},children:e.jsxs("div",{className:"w-full flex p-4 md:p-5 flex-column-reverse md:flex-row overflow-hidden gap-8 align-items-center justify-content-center",style:{backgroundColor:"#537859",border:"solid 4px #537859"},children:[e.jsxs("div",{className:"section-info d-flex flex-column gap-3",children:[e.jsx("h2",{style:a.title,children:"Restaure Seu Bem-Estar!!"}),e.jsxs("ul",{style:a.list,className:"mt-5",children:[e.jsxs("li",{style:a.listItem,children:[e.jsx(d,{size:20,color:"#FFFFFF"})," ",e.jsx("strong",{children:"Alívio do estresse e ansiedade – Sinta-se mais leve e relaxado(a)"})]}),e.jsxs("li",{style:a.listItem,children:[e.jsx(d,{size:20,color:"#FFFFFF"})," ",e.jsx("strong",{children:"Diminuição de tensões e dores musculares – Ideal para quem sofre com rotina intensa"})]}),e.jsxs("li",{style:a.listItem,children:[e.jsx(d,{size:20,color:"#FFFFFF"})," ",e.jsx("strong",{children:"Melhoria na circulação sanguínea e qualidade do sono – Desperte mais revigorado(a)"})]}),e.jsxs("li",{style:a.listItem,children:[e.jsx(d,{size:20,color:"#FFFFFF"})," ",e.jsx("strong",{children:"Aumento da disposição e equilíbrio emocional – Mais energia para o seu dia a dia"})]})]}),e.jsx("button",{onClick:l=>window.open("https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?","_blank"),className:"btn-agendar-2 mt-3 md:w-6 w-full text-white border-0 font-bold py-2 px-4 rounded",style:{fontSize:"22px",backgroundColor:"#01d758"},children:"AGENDAR AGORA"})]}),e.jsx("video",{src:"/images/home/135151-761273523_tiny.mp4",className:"video",style:{borderRadius:"20px"},autoPlay:!0,muted:!0,loop:!0})]})}),e.jsx("section",{className:"about-us w-100 flex align-items-center",style:{backgroundColor:"#f7f7f7"},children:e.jsxs("div",{className:"flex flex-column gap-8 md:gap-0 md:flex-row align-items-center container mt-8 mb-8",children:[e.jsx(k,{data:F}),e.jsxs("div",{className:"abount-us-info  gap-1 flex flex-column w-75",children:[e.jsx("span",{className:"h3 font-bold",style:{color:"#537859"},children:" Atendimento humanizado interdisciplinar com foco no paciente e em sua transformação."}),e.jsx("p",{children:"O trabalho desenvolvido por nossas especialidades se dá de forma integrada e qualitativa, aqui temos a coragem em aceitar o desafio de olhar para a saúde com foco no bem estar e não na doença, buscando estratégias para lidar com a sua realidade."}),e.jsx("button",{onClick:l=>window.open("https://wa.me/55993845772?text=Olá,%20gostaria%20de%20agendar%20uma%20sessão%20de%20massoterapia.%20Poderia%20me%20informar%20os%20horários%20disponíveis?","_blank"),className:"btn-agendar-3 btn-pulse animate-pulse mt-3 md:w-6 w-full hover:bg-green-600 text-white border-0 font-bold py-2 px-4 rounded",style:{fontSize:"20px",backgroundColor:"#01d758"},children:"AGENDAR AGORA"})]})]})}),e.jsxs("section",{className:"mt-8",children:[e.jsx("h2",{id:"products-heading",className:"h1 font-bold text-center text-orange-600",children:"AVALIAÇÕES"}),e.jsx("iframe",{src:"https://widgets.sociablekit.com/google-reviews/iframe/25531714",frameBorder:"0",width:"100%",height:"400"})]}),e.jsx("a",{href:"https://wa.me/5561996246801?text=Olá, vim do site e gostaria de falar com o atendimento!",target:"_blank",rel:"noopener noreferrer",className:"float-btn btn-whats",style:c,onMouseEnter:()=>o(1.1),onMouseLeave:()=>o(1),"aria-label":"Chat via WhatsApp",children:e.jsx("img",{src:"/images/home/icons/whatsapp.png",width:50,alt:"Ícone do WhatsApp"})}),e.jsx("a",{href:"https://www.instagram.com/levisaudeintegrada/",target:"_blank",rel:"noopener noreferrer",className:"float-btn btn-inst",style:g,onMouseEnter:()=>o(1.1),onMouseLeave:()=>o(1),"aria-label":"Perfil no Instagram",children:e.jsx("img",{src:"/images/home/icons/instagram.png",width:50,alt:"Ícone do Instagram"})}),e.jsx("a",{href:"tel:5561996246801",target:"_blank",rel:"noopener noreferrer",className:"float-btn btn-cha",style:m,onMouseEnter:()=>o(1.1),onMouseLeave:()=>o(1),"aria-label":"Ligar para a Clínica",children:e.jsx("img",{src:"/images/home/icons/telefone.png",width:45,alt:"Ícone do Telefone"})}),e.jsx("footer",{className:"text-center text-lg-start bg-body-tertiary text-muted \\",role:"contentinfo",style:{marginTop:"15rem"},children:e.jsx("div",{className:"text-center p-4",style:{backgroundColor:"#c1c1c1"},children:e.jsxs("div",{className:"text-reset fw-bold text-white",children:["© 2025 Copyright: Feito por ",e.jsx("a",{className:"text-green-800",href:"https://zionpublicidade.com",children:"Zion Publicidade."})," Todos os direitos reservados."]})})})]})]})})})}export{M as default};

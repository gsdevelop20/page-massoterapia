import{r as s,j as e}from"./app-c39f8491.js";import{S as o,f as t,A as n}from"./autoplay-02fabbde.js";import{m as c}from"./pagination-103bc0e0.js";const m={hidden:{opacity:0,scale:.8},visible:{opacity:1,scale:1,transition:{duration:.8,ease:"easeOut"}}},d=s.memo(({image:a})=>e.jsx(c.div,{className:"image-card",variants:m,initial:"hidden",animate:"visible",whileHover:{scale:1.05},children:e.jsx("img",{src:a.src,alt:a.alt||"Imagem do Carrossel",className:"carousel-image",loading:"lazy"})})),j=s.memo(({images:a})=>{const i=s.useCallback((r,l)=>e.jsx(o,{children:e.jsx(d,{image:r})},l),[]);return e.jsx("section",{className:"carousel-container",children:e.jsx(t,{modules:[n],spaceBetween:20,slidesPerView:1,autoplay:{delay:4e3,disableOnInteraction:!1},loop:!0,breakpoints:{768:{slidesPerView:1},1024:{slidesPerView:1}},className:"carousel",children:a.map(i)})})});export{j as default};

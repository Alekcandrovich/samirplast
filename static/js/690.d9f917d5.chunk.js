"use strict";(self.webpackChunksamirplast=self.webpackChunksamirplast||[]).push([[690],{2320:(e,s,t)=>{t.d(s,{Z:()=>c});t(2791);const c=t.p+"static/media/icons.9784120f0f5742211888bd639fcfbbf8.svg"},9237:(e,s,t)=>{t.d(s,{Z:()=>i});var c=t(2791),o=t(7948),n=t.n(o),l=t(2320),a=(t(398),t(184));const i=e=>{let{imgSrc:s,isOpen:t,onRequestClose:o}=e;return(0,c.useEffect)((()=>{t?document.body.classList.add("modal-open"):document.body.classList.remove("modal-open")}),[t]),(0,a.jsxs)(n(),{isOpen:t,onRequestClose:o,contentLabel:"Image Modal",overlayClassName:"modal-overlay",className:"modal-content",children:[(0,a.jsx)("button",{onClick:o,className:"close-modal",children:(0,a.jsx)("svg",{className:"icon-modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#close")})})}),(0,a.jsx)("div",{className:"image-container",children:(0,a.jsx)("img",{src:s,alt:"\u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422",className:"modal-image"})})]})}},6394:(e,s,t)=>{t.d(s,{Z:()=>j});var c=t(2791),o=t(5717),n=(t(3037),t(8688),t(2320)),l=(t(398),t(184));const a=e=>{let{onClick:s}=e;return(0,l.jsx)("div",{className:"slide-arrow prev",onClick:s,children:(0,l.jsx)("svg",{className:"icon-modal",children:(0,l.jsx)("use",{xlinkHref:"".concat(n.Z,"#left")})})})},i=e=>{let{onClick:s}=e;return(0,l.jsx)("div",{className:"slide-arrow next",onClick:s,children:(0,l.jsx)("svg",{className:"icon-modal",children:(0,l.jsx)("use",{xlinkHref:"".concat(n.Z,"#right")})})})},r=e=>{let{images:s,closeModal:t}=e;(0,c.useEffect)((()=>{const e=e=>{"Escape"===e.key&&t()},s=e=>{e.target.classList.contains("modal-overlay")&&t()};return document.body.addEventListener("keydown",e),document.body.addEventListener("click",s),document.body.style.overflow="hidden",()=>{document.body.removeEventListener("keydown",e),document.body.removeEventListener("click",s),document.body.style.overflow="auto"}}),[t]);const r={dots:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,pauseOnHover:!1,prevArrow:(0,l.jsx)(a,{}),nextArrow:(0,l.jsx)(i,{})};return(0,l.jsx)("div",{className:"modal-overlay",onClick:t,children:(0,l.jsxs)("div",{className:"modal-product",onClick:e=>e.stopPropagation(),children:[(0,l.jsx)("button",{type:"button",className:"close-modal",onClick:t,children:(0,l.jsx)("svg",{className:"icon-modal",children:(0,l.jsx)("use",{xlinkHref:"".concat(n.Z,"#close")})})}),(0,l.jsx)(o.Z,{...r,children:s.map(((e,s)=>(0,l.jsxs)("div",{className:"slide",children:[(0,l.jsx)("img",{src:e.imageSrc,alt:"Slide ".concat(s+1)}),(0,l.jsx)("p",{style:{textAlign:"center",marginTop:"10px",width:"100%"},children:e.text.includes("(")?(0,l.jsxs)(l.Fragment,{children:[e.text.substring(0,e.text.indexOf("(")),(0,l.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:e.text.substring(e.text.indexOf("("))})]}):e.text})]},s)))})]})})},d=e=>{let{productImage:s,title:t,description:c,openSlider:o,sliderImages:n}=e;return(0,l.jsx)("section",{className:"section3",onClick:()=>o(n),children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"product_detail open-modal_product",children:[(0,l.jsx)("img",{className:"product_detail_image",src:s,alt:t}),(0,l.jsxs)("div",{className:"product_detail_info",children:[(0,l.jsx)("h2",{children:t}),(0,l.jsx)("p",{dangerouslySetInnerHTML:{__html:c}})]})]})})})},m=e=>{let{product:s}=e;const[t,o]=(0,c.useState)(!1),[n,a]=(0,c.useState)([]),i=e=>{o(!0),a(e)},m=(e,s)=>{const t=[];for(let c=1;c<=5;c++){const o=e["".concat(s).concat(c)],n=e["".concat(s.replace("Img","Text")).concat(c)];o&&t.push({imageSrc:"".concat("/samirplast").concat(o),text:n})}return t};return s?(0,l.jsxs)("main",{children:[(0,l.jsx)(d,{productImage:"/samirplast"+s.productImg_1,title:s.title_product_1,description:s.description_detail_1,openSlider:()=>i(m(s,"sliderImg_1_"))}),s.title_product_2&&(0,l.jsx)(d,{productImage:"/samirplast"+s.productImg_2,title:s.title_product_2,description:s.description_detail_2,openSlider:()=>i(m(s,"sliderImg_2_"))}),t&&(0,l.jsx)(r,{images:n,closeModal:()=>{o(!1),a([])}})]}):null},u=e=>{let{onClick:s}=e;return(0,l.jsx)("section",{className:"section4",children:(0,l.jsx)("div",{className:"button",children:(0,l.jsx)("button",{type:"button",className:"product_button open-modal_price",onClick:s,children:"\u041f\u041e\u0414\u0418\u0412\u0418\u0422\u0418\u0421\u042f \u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422"})})})};var p=t(9237),x=t(1475);const j=e=>{let{productName:s}=e;const[t,o]=(0,c.useState)(!1),[n,a]=(0,c.useState)(""),i=x.find((e=>e.productName===s));if(!i)return(0,l.jsx)("div",{children:"Product not found"});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m,{product:i}),(0,l.jsx)(u,{onClick:()=>{const e=window.location.pathname.split("/").pop();a("".concat("/samirplast","/prices/").concat(e,".jpg")),o(!0)}}),(0,l.jsx)(p.Z,{imgSrc:n,isOpen:t,onRequestClose:()=>{o(!1)}})]})}},7690:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});t(2791);var c=t(6394),o=t(184);const n=()=>(0,o.jsx)(c.Z,{productName:"mayka"})}}]);
//# sourceMappingURL=690.d9f917d5.chunk.js.map
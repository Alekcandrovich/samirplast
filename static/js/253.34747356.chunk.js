"use strict";(self.webpackChunksamirplast=self.webpackChunksamirplast||[]).push([[253],{9237:(e,s,t)=>{t.d(s,{Z:()=>l});var o=t(2791),c=t(2320),n=(t(398),t(184));const l=e=>{let{imgSrc:s,isOpen:t,onRequestClose:l}=e;const a=(0,o.useCallback)((()=>{l()}),[l]);(0,o.useEffect)((()=>{t?(document.body.classList.add("modal-open"),document.body.style.overflow="hidden"):(document.body.classList.remove("modal-open"),document.body.style.overflow="auto");const e=e=>{t&&"Escape"===e.key&&a()};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[t,a]);const i=t?"modal_overlay active":"modal_overlay",d=t?"modal_price active":"modal_price";return(0,n.jsx)("div",{className:i,id:"modalOverlay",onClick:a,children:(0,n.jsxs)("div",{className:d,onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("button",{onClick:a,className:"close_modal",children:(0,n.jsx)("svg",{className:"icon_modal",children:(0,n.jsx)("use",{xlinkHref:"".concat(c.Z,"#close")})})}),(0,n.jsx)("div",{className:"image_container",children:(0,n.jsx)("img",{src:s,alt:"\u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422",className:"modal_image"})})]})})}},6394:(e,s,t)=>{t.d(s,{Z:()=>v});var o=t(2791),c=t(5717),n=t(908),l=(t(3037),t(8688),t(2320)),a=(t(398),t(184));const i=e=>{let{onClick:s}=e;return(0,a.jsx)("div",{className:"slide_arrow prev",onClick:s,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#left")})})})},d=e=>{let{onClick:s}=e;return(0,a.jsx)("div",{className:"slide_arrow next",onClick:s,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#right")})})})},r=e=>{let{images:s,closeModal:t}=e;(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&t()},s=e=>{e.target.classList.contains("modal_overlay")&&t()};return document.body.addEventListener("keydown",e),document.body.addEventListener("click",s),document.body.style.overflow="hidden",()=>{document.body.removeEventListener("keydown",e),document.body.removeEventListener("click",s),document.body.style.overflow="auto"}}),[t]);const r={dots:!0,speed:1500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,pauseOnHover:!1,prevArrow:(0,a.jsx)(i,{}),nextArrow:(0,a.jsx)(d,{})};return(0,a.jsx)(n.ZP,{in:!0,children:e=>(0,a.jsx)("div",{className:"modal_overlay",onClick:t,children:(0,a.jsxs)("div",{className:"modal_product modal-".concat(e),onClick:e=>e.stopPropagation(),children:[(0,a.jsx)("button",{type:"button",className:"close_modal",onClick:t,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#close")})})}),(0,a.jsx)(c.Z,{...r,children:s.map(((e,s)=>(0,a.jsxs)("div",{className:"slide",children:[(0,a.jsx)("img",{className:"slide_img",src:e.imageSrc,alt:"Slide ".concat(s+1)}),(0,a.jsx)("p",{style:{textAlign:"center",marginTop:"10px",width:"100%"},children:e.text.includes("(")?(0,a.jsxs)(a.Fragment,{children:[e.text.substring(0,e.text.indexOf("(")),(0,a.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:e.text.substring(e.text.indexOf("("))})]}):e.text})]},s)))})]})})})},m=e=>{let{productImage:s,title:t,description:o,openSlider:c,sliderImages:n}=e;return(0,a.jsx)("section",{className:"section3",onClick:()=>c(n),children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"product_detail open-modal_product",children:[(0,a.jsx)("img",{className:"product_detail_image",src:s,alt:t}),(0,a.jsxs)("div",{className:"product_detail_info",children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})]})})})},u=e=>{let{product:s}=e;const[t,c]=(0,o.useState)(!1),[n,l]=(0,o.useState)([]),i=e=>{c(!0),l(e)},d=(e,s)=>{const t=[];for(let o=1;o<=5;o++){const c=e["".concat(s).concat(o)],n=e["".concat(s.replace("Img","Text")).concat(o)];c&&t.push({imageSrc:"".concat("/samirplast").concat(c),text:n})}return t};return s?(0,a.jsxs)("main",{children:[(0,a.jsx)(m,{productImage:"/samirplast"+s.productImg_1,title:s.title_product_1,description:s.description_detail_1,openSlider:()=>i(d(s,"sliderImg_1_"))}),s.title_product_2&&(0,a.jsx)(m,{productImage:"/samirplast"+s.productImg_2,title:s.title_product_2,description:s.description_detail_2,openSlider:()=>i(d(s,"sliderImg_2_"))}),t&&(0,a.jsx)(r,{images:n,closeModal:()=>{c(!1),l([])}})]}):null},p=e=>{let{onClick:s}=e;return(0,a.jsx)("section",{className:"section4",children:(0,a.jsx)("div",{className:"button",children:(0,a.jsx)("button",{type:"button",className:"product_button open-modal_price",onClick:s,children:"\u041f\u041e\u0414\u0418\u0412\u0418\u0422\u0418\u0421\u042f \u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422"})})})};var x=t(9237),j=t(1475);const v=e=>{let{productName:s}=e;const[t,c]=(0,o.useState)(!1),[n,l]=(0,o.useState)(""),i=j.find((e=>e.productName===s));if(!i)return(0,a.jsx)("div",{children:"Product not found"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u,{product:i}),(0,a.jsx)(p,{onClick:()=>{const e=window.location.pathname.split("/").pop();l("".concat("/samirplast","/prices/").concat(e,".jpg")),c(!0)}}),(0,a.jsx)(x.Z,{imgSrc:n,isOpen:t,onRequestClose:()=>{c(!1)}})]})}},2253:(e,s,t)=>{t.r(s),t.d(s,{default:()=>n});t(2791);var o=t(6394),c=t(184);const n=()=>(0,c.jsx)(o.Z,{productName:"zip"})}}]);
//# sourceMappingURL=253.34747356.chunk.js.map
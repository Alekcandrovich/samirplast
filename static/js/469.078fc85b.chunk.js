"use strict";(self.webpackChunksamirplast=self.webpackChunksamirplast||[]).push([[469],{9237:(e,s,t)=>{t.d(s,{Z:()=>a});var o=t(2791),c=t(2320),l=(t(398),t(184));const a=e=>{let{imgSrc:s,isOpen:t,onRequestClose:a}=e;const[n,i]=(0,o.useState)(!1),r=(0,o.useCallback)((()=>{i(!0),setTimeout((()=>a()),500)}),[a]);(0,o.useEffect)((()=>{const e=e=>t&&"Escape"===e.key&&r();return document.body.classList.toggle("modal-open",t),document.body.style.overflow=t?"hidden":"auto",document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto",i(!1)}}),[t,r]);const d=t?"modal_overlay active":"modal_overlay",m=n?"modal_price closing":t?"modal_price active":"modal_price";return(0,l.jsx)("div",{className:d,id:"modalOverlay",onClick:e=>{t&&e.stopPropagation()},children:(0,l.jsxs)("div",{className:m,children:[(0,l.jsx)("button",{onClick:r,className:"close_modal",children:(0,l.jsx)("svg",{className:"icon_modal",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#close")})})}),(0,l.jsx)("div",{className:"image_container",children:(0,l.jsx)("img",{src:s,alt:"\u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422",className:"modal_image"})})]})})}},6394:(e,s,t)=>{t.d(s,{Z:()=>j});var o=t(2791),c=t(5717),l=(t(3037),t(8688),t(2320)),a=(t(398),t(184));const n=e=>{let{onClick:s}=e;return(0,a.jsx)("div",{className:"slide_arrow prev",onClick:s,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#left")})})})},i=e=>{let{onClick:s}=e;return(0,a.jsx)("div",{className:"slide_arrow next",onClick:s,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#right")})})})},r=e=>{let{images:s,closeModal:t}=e;const[r,d]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!1),p=(0,o.useCallback)((()=>{u(!0),setTimeout((()=>{d(!1),t()}),500)}),[t]);(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&p()};return document.body.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.body.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[p]);const x={dots:!0,speed:1500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,pauseOnHover:!1,prevArrow:(0,a.jsx)(n,{}),nextArrow:(0,a.jsx)(i,{})};(0,o.useEffect)((()=>{d(!0)}),[]);const j=r?"modal_overlay active":"modal_overlay",_=m?"modal_product closing":r?"modal_product active":"modal_product";return(0,a.jsx)("div",{className:j,children:(0,a.jsxs)("div",{className:_,children:[(0,a.jsx)("button",{type:"button",className:"close_modal",onClick:p,children:(0,a.jsx)("svg",{className:"icon_modal",children:(0,a.jsx)("use",{xlinkHref:"".concat(l.Z,"#close")})})}),(0,a.jsx)(c.Z,{...x,children:s.map(((e,s)=>(0,a.jsxs)("div",{className:"slide",children:[(0,a.jsx)("img",{className:"slide_img",src:e.imageSrc,alt:"Slide ".concat(s+1)}),(0,a.jsx)("p",{style:{textAlign:"center",marginTop:"10px",width:"100%"},children:e.text.includes("(")?(0,a.jsxs)(a.Fragment,{children:[e.text.substring(0,e.text.indexOf("(")),(0,a.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:e.text.substring(e.text.indexOf("("))})]}):e.text})]},s)))})]})})},d=e=>{let{productImage:s,title:t,description:o,openSlider:c,sliderImages:l}=e;return(0,a.jsx)("section",{className:"section3",children:(0,a.jsx)("div",{className:"container",onClick:()=>c(l),children:(0,a.jsxs)("div",{className:"product_detail open-modal_product",children:[(0,a.jsx)("img",{className:"product_detail_image",src:s,alt:t}),(0,a.jsxs)("div",{className:"product_detail_info",children:[(0,a.jsx)("h2",{children:t}),(0,a.jsx)("p",{dangerouslySetInnerHTML:{__html:o}})]})]})})})},m=e=>{let{product:s}=e;const[t,c]=(0,o.useState)(!1),[l,n]=(0,o.useState)([]),i=e=>{c(!0),n(e)},m=(e,s)=>{const t=[];for(let o=1;o<=5;o++){const c=e["".concat(s).concat(o)],l=e["".concat(s.replace("Img","Text")).concat(o)];c&&t.push({imageSrc:"".concat("/samirplast").concat(c),text:l})}return t};return s?(0,a.jsxs)("main",{children:[(0,a.jsx)(d,{productImage:"/samirplast"+s.productImg_1,title:s.title_product_1,description:s.description_detail_1,openSlider:()=>i(m(s,"sliderImg_1_"))}),s.title_product_2&&(0,a.jsx)(d,{productImage:"/samirplast"+s.productImg_2,title:s.title_product_2,description:s.description_detail_2,openSlider:()=>i(m(s,"sliderImg_2_"))}),t&&(0,a.jsx)(r,{images:l,closeModal:()=>{c(!1),n([])}})]}):null},u=e=>{let{onClick:s}=e;return(0,a.jsx)("section",{className:"section4",children:(0,a.jsx)("div",{className:"button",children:(0,a.jsx)("button",{type:"button",className:"product_button open-modal_price",onClick:s,children:"\u041f\u041e\u0414\u0418\u0412\u0418\u0422\u0418\u0421\u042f \u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422"})})})};var p=t(9237),x=t(1475);const j=e=>{let{productName:s}=e;const[t,c]=(0,o.useState)(!1),[l,n]=(0,o.useState)(""),i=x.find((e=>e.productName===s));if(!i)return(0,a.jsx)("div",{children:"Product not found"});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m,{product:i}),(0,a.jsx)(u,{onClick:()=>{const e=window.location.pathname.split("/").pop();n("".concat("/samirplast","/prices/").concat(e,".jpg")),c(!0)}}),(0,a.jsx)(p.Z,{imgSrc:l,isOpen:t,onRequestClose:()=>{c(!1)}})]})}},9469:(e,s,t)=>{t.r(s),t.d(s,{default:()=>l});t(2791);var o=t(6394),c=t(184);const l=()=>(0,c.jsx)(o.Z,{productName:"baul"})}}]);
//# sourceMappingURL=469.078fc85b.chunk.js.map
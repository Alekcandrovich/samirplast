"use strict";(self.webpackChunksamirplast=self.webpackChunksamirplast||[]).push([[690],{9237:(e,t,s)=>{s.d(t,{Z:()=>n});var o=s(2791),c=s(2320),l=(s(398),s(184));const n=e=>{let{imgSrc:t,isOpen:s,onRequestClose:n}=e;const[a,i]=(0,o.useState)(!1),r=(0,o.useCallback)((()=>{i(!0),setTimeout((()=>n()),500)}),[n]);(0,o.useEffect)((()=>{const e=e=>s&&"Escape"===e.key&&r();return document.body.classList.toggle("modal-open",s),document.body.style.overflow=s?"hidden":"auto",document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e),document.body.style.overflow="auto",i(!1)}}),[s,r]);const d=s?"modal_overlay active":"modal_overlay",m=a?"modal_price closing":s?"modal_price active":"modal_price";return(0,l.jsx)("div",{className:"".concat(d),id:"modalOverlay",onClick:r,children:(0,l.jsxs)("div",{className:"".concat(m),onClick:e=>e.stopPropagation(),children:[(0,l.jsx)("button",{onClick:r,className:"close_modal",children:(0,l.jsx)("svg",{className:"icon_modal",children:(0,l.jsx)("use",{xlinkHref:"".concat(c.Z,"#close")})})}),(0,l.jsx)("div",{className:"image_container",children:(0,l.jsx)("img",{src:t,alt:"\u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422",className:"modal_image"})})]})})}},6394:(e,t,s)=>{s.d(t,{Z:()=>j});var o=s(2791),c=s(5717),l=(s(3037),s(8688),s(2320)),n=(s(398),s(184));const a=e=>{let{onClick:t}=e;return(0,n.jsx)("div",{className:"slide_arrow prev",onClick:t,children:(0,n.jsx)("svg",{className:"icon_modal",children:(0,n.jsx)("use",{xlinkHref:"".concat(l.Z,"#left")})})})},i=e=>{let{onClick:t}=e;return(0,n.jsx)("div",{className:"slide_arrow next",onClick:t,children:(0,n.jsx)("svg",{className:"icon_modal",children:(0,n.jsx)("use",{xlinkHref:"".concat(l.Z,"#right")})})})},r=e=>{let{images:t,closeModal:s}=e;const[r,d]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!1),p=(0,o.useCallback)((()=>{u(!0),setTimeout((()=>{d(!1),s()}),500)}),[s]);(0,o.useEffect)((()=>{const e=e=>{"Escape"===e.key&&p()};return document.body.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{document.body.removeEventListener("keydown",e),document.body.style.overflow="auto"}}),[p]);const x={dots:!0,speed:1500,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,infinite:!0,pauseOnHover:!1,prevArrow:(0,n.jsx)(a,{}),nextArrow:(0,n.jsx)(i,{})};(0,o.useEffect)((()=>{d(!0)}),[]);const j=r?"modal_overlay active":"modal_overlay",_=m?"modal_product closing":r?"modal_product active":"modal_product";return(0,n.jsx)("div",{className:"".concat(j),onClick:p,children:(0,n.jsxs)("div",{className:"".concat(_),onClick:e=>e.stopPropagation(),children:[(0,n.jsx)("button",{type:"button",className:"close_modal",onClick:p,children:(0,n.jsx)("svg",{className:"icon_modal",children:(0,n.jsx)("use",{xlinkHref:"".concat(l.Z,"#close")})})}),(0,n.jsx)(c.Z,{...x,children:t.map(((e,t)=>(0,n.jsxs)("div",{className:"slide",children:[(0,n.jsx)("img",{className:"slide_img",src:e.imageSrc,alt:"Slide ".concat(t+1)}),(0,n.jsx)("p",{style:{textAlign:"center",marginTop:"10px",width:"100%"},children:e.text.includes("(")?(0,n.jsxs)(n.Fragment,{children:[e.text.substring(0,e.text.indexOf("(")),(0,n.jsx)("span",{style:{fontWeight:"bold",color:"red"},children:e.text.substring(e.text.indexOf("("))})]}):e.text})]},t)))})]})})},d=e=>{let{productImage:t,title:s,description:c,openSlider:l,sliderImages:a}=e;const[i,r]=(0,o.useState)(!1),[d,m]=(0,o.useState)({x:0,y:0});return(0,n.jsx)("section",{className:"section3",onMouseEnter:e=>{r(!0),m({x:e.clientX,y:e.clientY})},onMouseLeave:()=>{r(!1)},children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"product_detail open-modal_product",children:[i&&(0,n.jsx)("div",{className:"hover-message",style:{top:d.y,left:d.x},children:"\u041d\u0430\u0436\u043c\u0438 \u0434\u043b\u044f \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0431\u043e\u043b\u044c\u0448\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0435"}),(0,n.jsx)("img",{className:"product_detail_image",src:t,alt:s}),(0,n.jsxs)("div",{className:"product_detail_info",children:[(0,n.jsx)("h2",{children:s}),(0,n.jsx)("p",{dangerouslySetInnerHTML:{__html:c}})]})]})})})},m=e=>{let{product:t}=e;const[s,c]=(0,o.useState)(!1),[l,a]=(0,o.useState)([]),i=e=>{c(!0),a(e)},m=(e,t)=>{const s=[];for(let o=1;o<=5;o++){const c=e["".concat(t).concat(o)],l=e["".concat(t.replace("Img","Text")).concat(o)];c&&s.push({imageSrc:"".concat("/samirplast").concat(c),text:l})}return s};return t?(0,n.jsxs)("main",{children:[(0,n.jsx)(d,{productImage:"/samirplast"+t.productImg_1,title:t.title_product_1,description:t.description_detail_1,openSlider:()=>i(m(t,"sliderImg_1_"))}),t.title_product_2&&(0,n.jsx)(d,{productImage:"/samirplast"+t.productImg_2,title:t.title_product_2,description:t.description_detail_2,openSlider:()=>i(m(t,"sliderImg_2_"))}),s&&(0,n.jsx)(r,{images:l,closeModal:()=>{c(!1),a([])}})]}):null},u=e=>{let{onClick:t}=e;return(0,n.jsx)("section",{className:"section4",children:(0,n.jsx)("div",{className:"button",children:(0,n.jsx)("button",{type:"button",className:"product_button open-modal_price",onClick:t,children:"\u041f\u041e\u0414\u0418\u0412\u0418\u0422\u0418\u0421\u042f \u041f\u0420\u0410\u0419\u0421 - \u041b\u0418\u0421\u0422"})})})};var p=s(9237),x=s(1475);const j=e=>{let{productName:t}=e;const[s,c]=(0,o.useState)(!1),[l,a]=(0,o.useState)(""),i=x.find((e=>e.productName===t));if(!i)return(0,n.jsx)("div",{children:"Product not found"});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(m,{product:i}),(0,n.jsx)(u,{onClick:()=>{const e=window.location.pathname.split("/").pop();a("".concat("/samirplast","/prices/").concat(e,".jpg")),c(!0)}}),(0,n.jsx)(p.Z,{imgSrc:l,isOpen:s,onRequestClose:()=>{c(!1)}})]})}},7690:(e,t,s)=>{s.r(t),s.d(t,{default:()=>l});s(2791);var o=s(6394),c=s(184);const l=()=>(0,c.jsx)(o.Z,{productName:"mayka"})}}]);
//# sourceMappingURL=690.36d75de0.chunk.js.map
// // ProductDetail.js
// import React, { useState } from 'react';
// import CreateImageSlider from '../Modal/ModalProduct';
// import './styles.css';

// const ProductDetail = ({ product }) => {
//   const {
//     productImg_1,
//     title_product_1,
//     description_detail_1,
//     sliderImg_1_1,
//     sliderText_1_1,
//     sliderImg_1_2,
//     sliderText_1_2,
//     sliderImg_1_3,
//     sliderText_1_3,
//     sliderImg_1_4,
//     sliderText_1_4,
//     sliderImg_1_5,
//     sliderText_1_5,
//     sliderImg_2_1,
//     sliderText_2_1,
//     sliderImg_2_2,
//     sliderText_2_2,
//     sliderImg_2_3,
//     sliderText_2_3,
//     sliderImg_2_4,
//     sliderText_2_4,
//     sliderImg_2_5,
//     sliderText_2_5,
//     productImg_2,
//     title_product_2,
//     description_detail_2,
//   } = product;

//   const openSlider = (images) => {
//     setIsModalOpen(true);
//     setImages(images);
//   };

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [images, setImages] = useState([]);

//   const closeModal = () => {
//     setIsModalOpen(false);
//     setImages([]);
//   };

//   return (
//     <main>
//       {description_detail_1 && (
//         <section
//           className="section3"
//           onClick={() =>
//             openSlider([
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_1_1,
//                 text: sliderText_1_1,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_1_2,
//                 text: sliderText_1_2,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_1_3,
//                 text: sliderText_1_3,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_1_4,
//                 text: sliderText_1_4,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_1_5,
//                 text: sliderText_1_5,
//               },
//             ])
//           }
//         >
//           <div className="container">
//             <div className="product_detail_1 open-modal_product">
//               <img
//                 className="product_detail_image"
//                 src={process.env.PUBLIC_URL + productImg_1}
//                 alt={title_product_1}
//               />
//               <div className="product_detail_info">
//                 <h2>{title_product_1}</h2>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: description_detail_1,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {description_detail_2 && (
//         <section
//           className="section3"
//           onClick={() =>
//             openSlider([
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_2_1,
//                 text: sliderText_2_1,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_2_2,
//                 text: sliderText_2_2,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_2_3,
//                 text: sliderText_2_3,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_2_4,
//                 text: sliderText_2_4,
//               },
//               {
//                 imageSrc: process.env.PUBLIC_URL + sliderImg_2_5,
//                 text: sliderText_2_5,
//               },
//             ])
//           }
//         >
//           <div className="container">
//             <div className="product_detail_2 open-modal_product">
//               <img
//                 className="product_detail_image"
//                 src={process.env.PUBLIC_URL + productImg_2}
//                 alt={title_product_2}
//               />
//               <div className="product_detail_info">
//                 <h2>{title_product_2}</h2>
//                 <p
//                   dangerouslySetInnerHTML={{
//                     __html: description_detail_2,
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>
//       )}

//       {isModalOpen && (
//         <CreateImageSlider images={images} closeModal={closeModal} />
//       )}
//     </main>
//   );
// };

// export default ProductDetail;







// ProductDetail.js
import React, { useState } from 'react';
import CreateImageSlider from '../Modal/ModalProduct';
import ProductDetailSection from './ProductDetailSection';
import './styles.css';

const ProductDetail = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [images, setImages] = useState([]);

  const openSlider = images => {
    setIsModalOpen(true);
    setImages(images);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setImages([]);
  };

  const createSliderImages = (product, prefix) => {
    const sliderImages = [];

    for (let index = 1; index <= 5; index++) {
      const imageSrc = product[`${prefix}${index}`];
      const text = product[`${prefix}Text_${index}`];

      if (imageSrc) {
        sliderImages.push({
          imageSrc: `${process.env.PUBLIC_URL}${imageSrc}`,
          text: `${text}`,
        });
      }
    }

    return sliderImages;
  };

  if (!product) {
    return null;
  }

  return (
    <main>
      <ProductDetailSection
        productImage={process.env.PUBLIC_URL + product.productImg_1}
        title={product.title_product_1}
        description={product.description_detail_1}
        openSlider={() =>
          openSlider(createSliderImages(product, 'sliderImg_1_'))
        }
      />
      {product.title_product_2 && (
        <ProductDetailSection
          productImage={process.env.PUBLIC_URL + product.productImg_2}
          title={product.title_product_2}
          description={product.description_detail_2}
          openSlider={() =>
            openSlider(createSliderImages(product, 'sliderImg_2_'))
          }
        />
      )}
      {isModalOpen && (
        <CreateImageSlider images={images} closeModal={closeModal} />
      )}
    </main>
  );
};

export default ProductDetail;

// import React from 'react';

// const ProductDetailSection = ({
//   productImage,
//   title,
//   description,
//   openSlider,
//   sliderImages,
// }) => {
//   return (
//     <section className="section3" onClick={() => openSlider(sliderImages)}>
//       <div className="container">
//         <div className="product_detail open-modal_product">
//           <img
//             className="product_detail_image"
//             src={productImage}
//             alt={title}
//           />
//           <div className="product_detail_info">
//             <h2>{title}</h2>
//             <p dangerouslySetInnerHTML={{ __html: description }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProductDetailSection;







import React, { useState } from 'react';

const ProductDetailSection = ({
  productImage,
  title,
  description,
  openSlider,
  sliderImages,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = e => {
    setIsHovered(true);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="section3"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
        <div className="product_detail open-modal_product">
          {isHovered && (
            <div
              className="hover-message"
              style={{ top: tooltipPosition.y, left: tooltipPosition.x }}
            >
              Нажми для получения больше информации о продукте
            </div>
          )}
          <img
            className="product_detail_image"
            src={productImage}
            alt={title}
          />
          <div className="product_detail_info">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;

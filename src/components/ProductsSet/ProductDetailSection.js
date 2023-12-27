// ProductDetailSection.js
import React from 'react';

const ProductDetailSection = ({
  productImage,
  title,
  description,
  openSlider,
  sliderImages,
}) => {
  return (
    <section className="section3" onClick={() => openSlider(sliderImages)}>
      <div className="container">
        <div className="product_detail open-modal_product">
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

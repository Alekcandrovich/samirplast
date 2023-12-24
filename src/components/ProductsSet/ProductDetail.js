import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + product.img} alt={product.title} />
      <h2>{product.title_product}</h2>
      <p dangerouslySetInnerHTML={{ __html: product.description_detail_1 }} />
    </div>
  );
};

export default ProductDetail;

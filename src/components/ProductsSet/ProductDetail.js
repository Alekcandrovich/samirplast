import React from 'react';
import './styles.css';

const ProductDetail = ({ product }) => {
  const {
    productImg_1,
    title_product_1,
    description_detail_1,
    productImg_2,
    title_product_2,
    description_detail_2,
  } = product;

  return (
    <main>
      {description_detail_1 && (
        <section className="section3">
          <div className="container">
            <div className="product_detail_1 open-modal_product">
              <img
                className="product_detail_image"
                src={process.env.PUBLIC_URL + productImg_1}
                alt={title_product_1}
              />
              <div className="product_detail_info">
                <h2>{title_product_1}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description_detail_1,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {description_detail_2 && (
        <section className="section3">
          <div className="container">
            <div className="product_detail_1 open-modal_product">
              <img
                className="product_detail_image"
                src={process.env.PUBLIC_URL + productImg_2}
                alt={title_product_2}
              />
              <div className="product_detail_info">
                <h2>{title_product_2}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: description_detail_2,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;


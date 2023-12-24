import React from 'react';

const ProductItem = ({ imageSrc, productName, productDescription }) => {
  const paragraphs = productDescription.split('<br />');

  return (
    <main>
      <section className="section3">
        <div className="container">
          <div className="product_detail_1 open-modal_product">
            <img
              className="product_detail_image"
              src={imageSrc}
              alt={productName}
            />
            <div className="product_detail_info">
              <h2>{productName}</h2>
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                ></p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductItem;


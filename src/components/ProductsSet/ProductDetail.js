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
      const textKey = `${prefix.replace('Img', 'Text')}${index}`;
      const text = product[textKey];

      if (imageSrc) {
        sliderImages.push({
          imageSrc: `${process.env.PUBLIC_URL}${imageSrc}`,
          text: text,
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

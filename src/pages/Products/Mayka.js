import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ButtonPrice from '../../components/ButtonPrice/ButtonPrice';
import ModalPrice from '../../components/Modal/ModalPrice';
import productData from '../../assets/productsData.json';

const Mayka = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const maykaProduct = productData.find(product => product.productName === 'mayka');

  if (!maykaProduct) {
    return <div>Product not found</div>;
  }

  const productDetails1 = {
    imageSrc: process.env.PUBLIC_URL + maykaProduct.productImg_1,
    productName: maykaProduct.title_product_1,
    productDescription: maykaProduct.description_detail_1,
  };

  const productDetails2 = {
    imageSrc: process.env.PUBLIC_URL + maykaProduct.productImg_2,
    productName: maykaProduct.title_product_2,
    productDescription: maykaProduct.description_detail_2,
  };

  const handleButtonPriceClick = () => {
    const currentPath = window.location.pathname;
    const imageName = currentPath.split('/').pop();

    setImgSrc(`${process.env.PUBLIC_URL}/prices/${imageName}.jpg`);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ProductItem {...productDetails1} />
      <ProductItem {...productDetails2} />
      <ButtonPrice onClick={handleButtonPriceClick} />
      <ModalPrice
        imgSrc={imgSrc}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default Mayka;

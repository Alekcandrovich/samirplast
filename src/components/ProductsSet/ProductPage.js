import React, { useState } from 'react';
import ProductDetails from './ProductDetail';
import ButtonPrice from '../../components/ButtonPrice/ButtonPrice';
import ModalPrice from '../../components/Modal/ModalPrice';
import productData from '../../assets/productsData.json';

const ProductPage = ({ productName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const product = productData.find(
    product => product.productName === productName
  );

  if (!product) {
    return <div>Product not found</div>;
  }

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
      <ProductDetails product={product} />
      <ButtonPrice onClick={handleButtonPriceClick} />
      <ModalPrice
        imgSrc={imgSrc}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </>
  );
};

export default ProductPage;
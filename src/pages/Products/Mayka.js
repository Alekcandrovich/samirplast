import React, { useState } from 'react';
import ProductItem from './ProductItem';
import ButtonPrice from '../../components/ButtonPrice/ButtonPrice';
import ModalPrice from '../../components/Modal/ModalPrice';
import mayka_1 from '../../images/mayka_1.jpg';
import mayka_2 from '../../images/mayka_2.jpg';

const Mayka = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const productDetails1 = {
    imageSrc: mayka_1,
    productName: 'ПАКЕТИ ТИПУ - МАЙКА',
    productDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Найдоступнiший за ціною варіант
      серед пакетів з ручками. Цей тип пакетів найчастіше
      використовується торгівельними i торгово-промисловими
      компаніями, магазинами и аптеками для упаковки покупок. Якісні
      характеристики i велике різноманіття за розмірами i товщиною
      стінок пакетів «майка» дозволили їм набути популярності, як у
      продавців, так i у покупців.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Основні характеристики:
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- низька вартість
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- велика вантажопідйомність
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- висока міцність
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- місткість за рахунок бічних
      складок
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- зручність використання
    `,
  };

  const productDetails2 = {
    imageSrc: mayka_2,
    productName: 'ОПИС ПАКЕТIВ ТИПУ - МАЙКА',
    productDescription: `
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Цей вид пакетів виготовляється з
      рукава поліетилену низького тиску. Особливістю підготовленого
      рукава є фальці (бічні складки), які після належної обробки
      формують ручки пакету.
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Всі пакети "майка" мають наступне
      стандартне позначення, наприклад: (28+8х2)х47/15, де:
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 28 - ширина пакету в сантиметрах
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 8 - ширина фальця (бічної
      складки) в сантиметрах
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 47 - повна висота пакету (від
      дна до краю ручки) в сантиметрах
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- 15 - товщина стінки пакету в
      мікронах
    `,
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

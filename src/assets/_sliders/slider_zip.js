import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/zip_1-1.jpg', text: 'Слайд 1 з 3 (Пакети з замком-слайдером)' },
    { imageSrc: '../images/zip_1-2.jpg', text: 'Слайд 2 з 3 (Пакети з замком-слайдером)' },
    { imageSrc: '../images/zip_1-3.jpg', text: 'Слайд 3 з 3 (Пакети з замком-слайдером)' },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/zip_2-1.jpg', text: 'Слайд 1 з 3 (Пакети з замком zip-lock)' },
    { imageSrc: '../images/zip_2-2.jpg', text: 'Слайд 2 з 3 (Пакети з замком zip-lock)' },
    { imageSrc: '../images/zip_2-3.jpg', text: 'Слайд 3 з 3 (Пакети з замком zip-lock)' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

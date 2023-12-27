import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images//meshki_1-1.jpg', text: 'Слайд 1 з 3 (Великі мішкі з поліетилену)' },
    { imageSrc: '../images//meshki_1-2.jpg', text: 'Слайд 2 з 3 (Великі мішкі з поліетилену)' },
    { imageSrc: '../images//meshki_1-3.jpg', text: 'Слайд 3 з 3 (Великі мішкі з поліетилену)' },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/meshki_2-1.jpg', text: 'Слайд 1 з 5 (30 літрів)' },
    { imageSrc: '../images/meshki_2-2.jpg', text: 'Слайд 2 з 5 (60 лiтрiв)' },
    { imageSrc: '../images/meshki_2-3.jpg', text: 'Слайд 3 з 5 (120 лiтрiв)' },
    { imageSrc: '../images/meshki_2-4.jpg', text: 'Слайд 4 з 5 (240 лiтрiв)' },
    { imageSrc: '../images/meshki_2-5.jpg', text: 'Слайд 5 з 5 (Рулон віддільних пакетів)' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

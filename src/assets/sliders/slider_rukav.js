import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/rukav_1-1.jpg', text: 'Слайд 1 з 3 (Плівка поліетиленова)' },
    { imageSrc: '../images/rukav_1-2.jpg', text: 'Слайд 2 з 3 (Плівка поліетиленова)' },
    { imageSrc: '../images/rukav_1-3.jpg', text: 'Слайд 3 з 3 (Плівка поліетиленова)' },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/rukav_2-1.jpg', text: 'Слайд 1 з 2 (Термоусадка)' },
    { imageSrc: '../images/rukav_2-2.jpg', text: 'Слайд 2 з 2 (Термоусадка)' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

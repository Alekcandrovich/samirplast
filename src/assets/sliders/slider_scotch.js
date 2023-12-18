import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/scotch_1-1.jpg', text: 'Слайд 1 з 2 (Скотч пакувальний)' },
    {
      imageSrc: '../images/scotch_1-2.jpg', text: 'Слайд 2 з 2 (Скотч пакувальний)',
    },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

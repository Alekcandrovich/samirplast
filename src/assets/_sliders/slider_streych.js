import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/streych_1-1.jpg', text: "Слайд 1 з 3 (Стрейч-плівка)" },
    { imageSrc: '../images/streych_1-2.jpg', text: "Слайд 2 з 3 (Стрейч-плівка)" },
    { imageSrc: '../images/streych_1-3.jpg', text: "Слайд 3 з 3 (Стрейч-плівка)" },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

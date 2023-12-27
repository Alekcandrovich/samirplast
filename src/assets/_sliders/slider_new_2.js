import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 1 з 3 (назва слайду)" },
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 2 з 3 (назва слайду)" },
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 3 з 3 (назва слайду)" },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 1 з 3 (назва слайду)" },
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 2 з 3 (назва слайду)" },
    { imageSrc: '../images/no_image_2.jpg', text: "Слайд 3 з 3 (назва слайду)" },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

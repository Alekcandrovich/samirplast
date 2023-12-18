import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    {
      imageSrc: '../images/trempel_1-1.jpg',
      text: "пластмасовий (дитячий 32см)"
    },
    {
      imageSrc: '../images/trempel_1-2.jpg',
      text: "пластмасовий (літо 38см)"
    },
    {
      imageSrc: '../images/trempel_1-3.jpg',
      text: "пластмасовий (весна 40см)"
    },
    {
      imageSrc: '../images/trempel_1-4.jpg',
      text: "пластмасовий (зима 40см)"
    },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    {
      imageSrc: '../images/trempel_2-1.jpg',
      text: "об'ємний з металевим гачком (ширина 38см)"
    },
    {
      imageSrc: '../images/trempel_2-2.jpg',
      text: "об'ємний з металевим гачком (ширина 40см)"
    },
    {
      imageSrc: '../images/trempel_2-3.jpg',
      text: "об'ємний з металевим гачком (ширина 42см)"
    },
    {
      imageSrc: '../images/trempel_2-4.jpg',
      text: "універсальний з металевим гачком (ширина 38см)",
    },
    {
      imageSrc: '../images/trempel_2-5.jpg',
      text: "універсальний з металевим гачком (ширина 40см)",
    },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

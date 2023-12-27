import createImageSlider from './modal_product.js';
import { closeModalFunction } from './modal_product.js';

const productDetail_1 = document.querySelector('.product_detail_1');

productDetail_1.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/mayka_1-1.jpg', text: 'Слайд 1 з 5 Майка у синю смужку (44+8х2)х70/15' },
    {
      imageSrc: '../images/mayka_1-2.jpg',
      text: 'Слайд 2 з 5 Майка чорна «Saeedoff» (38+8х2)х60/15',
    },
    { imageSrc: '../images/mayka_1-3.jpg', text: 'Слайд 3 з 5 Майка «Бджілка» (28+8х2)х47/15' },
    { imageSrc: '../images/mayka_1-4.jpg', text: 'Слайд 4 з 5 Майка «Козак» (22+8х2)х43/15' },
    { imageSrc: '../images/mayka_1-5.jpg', text: 'Слайд 5 з 5 Майка «Luxe» 200 шт (24х42)' },
  ];

  createImageSlider(images);
});

const productDetail_2 = document.querySelector('.product_detail_2');

productDetail_2.addEventListener('click', () => {
  const images = [
    { imageSrc: '../images/mayka_2-1.jpg', text: 'Слайд 1 з 4 (Пакети типу - «майка»)' },
    { imageSrc: '../images/mayka_2-2.jpg', text: 'Слайд 2 з 4 (Пакети типу - «майка»)' },
    { imageSrc: '../images/mayka_2-3.jpg', text: 'Слайд 3 з 4 (Пакети типу - «майка»)' },
    { imageSrc: '../images/mayka_2-4.jpg', text: 'Слайд 4 з 4 (Пакети типу - «майка»)' },
  ];

  createImageSlider(images);
});

window.addEventListener('load', () => {
  closeModalFunction(document.getElementById('modalProduct'));
});

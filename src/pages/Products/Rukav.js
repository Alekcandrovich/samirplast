import React from 'react';
import rukav_1 from '../../images/rukav_1.jpg';
import rukav_2 from '../../images/rukav_2.jpg';

const Meshki = () => {
  return (
  <main>
    <section className='section3'>
      <div className='container'>
        <div className='product_detail_1 open-modal_product'>
          <img className='product_detail_image' src={rukav_1} alt='ПЛІВКА ПОЛІЕТИЛЕНОВА (РУКАВ)' />
          <div className='product_detail_info'>
            <h2>ПЛІВКА ПОЛІЕТИЛЕНОВА (РУКАВ)</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Плівка поліетиленова (рукав) виготовляється з поліетилену високого
              тиску ПЕВТ. Цей матеріал має такі властивості, як м'якість, гнучкість, міцність, пластичність.
              Поліетиленовий рукав – це базова форма отримання поліетиленової плівки за
              технологією екструзії з роздуванням. При розрізанні його по одній зі сторін можна збільшити ширину
              плівки вдвічі (така форма називається напіврукав). При розрізанні з двох сторін – виходять два полотна.
              Виготовляється в рулонах різної ширини та метражу, намотаних на картонну шпулю. Споживач має можливість
              придбати саме той продукт, який найкраще підходить для вирішення його завдань. Застосовується для
              міцного пакування широкого асортименту товарів. Дана плівка підходить для роботи з будь-яким видом
              імпульсних запаювачів пакетів та плівок, крім запаювачів постійного нагріву. З рулонної плівки у
              «рукаві» зручно формувати пакети різної довжини, що дозволяє працювати з різною за розміром продукцією.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='section3'>
      <div className='container'>
        <div className='product_detail_2 open-modal_product'>
          <img className='product_detail_image' src={rukav_2} alt='ТЕРМОУСАДКА' />
          <div className='product_detail_info'>
            <h2>ТЕРМОУСАДКА</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;У сфері упаковки є види плівок, що при нагріванні здатні утискатися.
              Ця властивість притаманна тільки тим полімерним матеріалам, при виготовленні яких використовується
              спеціальна технологія із застосуванням форми пам'яті. Матеріал виготовляють необхідної форми з
              урахуванням розмірів, які він повинен прийняти після термоусадки.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='section4'>
      <div className='button'>
        <button type="button" className="product_button open-modal_price" data-pdf-src="../prices/rukav.pdf">
          ПОДИВИТИСЯ ПРАЙС - ЛИСТ
        </button>
      </div>
    </section>
  </main>
  );
};

export default Meshki;

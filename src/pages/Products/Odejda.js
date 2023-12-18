import React from 'react';
import odejda_1 from '../../images/odejda_1.jpg';
import odejda_2 from '../../images/odejda_2.jpg';

const Meshki = () => {
  return (
    <main>
    <section className='section3'>
      <div className='container'>
        <div className='product_detail_1 open-modal_product'>
          <img className='product_detail_image' src={odejda_1} alt='ПРОЗОРI ПАКЕТИ-ЧОХЛИ ДЛЯ ОДЯГУ' />
          <div className='product_detail_info'>
            <h2>ПРОЗОРI ПАКЕТИ-ЧОХЛИ ДЛЯ ОДЯГУ</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Чохли призначені для захисту одягу від потрапляння вологи, пилу i
              інших забруднень; від механічних пошкоджень при транспортуванні i зберіганні. Основними замовниками
              поліетиленових чохлів є швейні цехи, ател’є, пральні, хімчистки, а також торгові мережі, що продають
              одяг.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Зі всіх видів чохлів, поліетиленові користуються попитом найбільше, тому
              що вони дешевші, практичніші та эфективніші, ніж, наприклад, із тканини.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Чохли для одягу виготовляються з поліетилену високого тиску, тому що саме
              цей матеріал має необхідні властивості для даного типу продукції. Наше підприємство при виготовленні
              чохлів використовує сировину, виключно, європейських ведучих виробників, завдяки чому вони мають
              абсолютну прозорість, а також характерний блиск i еластичність.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='section3'>
      <div className='container'>
        <div className='product_detail_2 open-modal_product'>
          <img className='product_detail_image' src={odejda_2} alt='СТАНДАРТИ ВИГОТОВЛЕННЯ ЧОХЛІВ ДЛЯ ОДЯГУ' />
          <div className='product_detail_info'>
            <h2>СТАНДАРТИ ВИГОТОВЛЕННЯ ЧОХЛІВ ДЛЯ ОДЯГУ</h2>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Стандартні чохли для одягу виготовляються шириною 55 см у складеному
              вигляді i 65 см у розгорнутому вигляді (з двома бічними складками по 5 см з кожного боку), довжиною
              від 80 см до 150 см. Товщина стінки пакету варіюється від 15 мкм до 30 мкм.<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;В пакуванні 250 шт.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className='section4'>
      <div className='button'>
        <button type="button" className="product_button open-modal_price" data-pdf-src="../prices/odejda.pdf">
          ПОДИВИТИСЯ ПРАЙС - ЛИСТ
        </button>
      </div>
    </section>
  </main>
  );
};

export default Meshki;

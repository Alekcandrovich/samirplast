import React from 'react';
import streych_1 from '../../images/streych_1.jpg';

const Streych = () => {
  return (
    <main>
      <section className="section3">
        <div className="container">
          <div className="product_detail_1 open-modal_product">
            <img
              className="product_detail_image"
              src={streych_1}
              alt="СТРЕЙЧ-ПЛIВКА ПАКУВАЛЬНА"
            />
            <div className="product_detail_info">
              <h2>СТРЕЙЧ-ПЛIВКА ПАКУВАЛЬНА</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Стрейч-плівка призначена для
                обгортання різних матеріалів i предметів. Її унікальні
                властивості дозволяють використовувати її в широкому спектрі
                господарських потреб: для пакування (обмотки) великогабаритних
                предметів (палетів та інших предметів великих i неправильних
                форм), надійної фіксації вантажів, захисту речей від забруднень
                та пошкоджень, практично герметичне пакування для захисту від
                вологи та повітря.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ступінь розтягнення плівки: min:
                100%; max: 300%
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ширина: 500 мм
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Товщина: 20 мкм
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Довжина: 200м i 300м
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Вага: 1,5 кг та 2,0 кг
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="button">
          <button
            type="button"
            className="product_button open-modal_price"
            data-pdf-src="../prices/streych.pdf"
          >
            ПОДИВИТИСЯ ПРАЙС - ЛИСТ
          </button>
        </div>
      </section>
    </main>
  );
};

export default Streych;

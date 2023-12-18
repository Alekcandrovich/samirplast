import React from 'react';
import meshki_1 from '../../images/meshki_1.jpg';
import meshki_2 from '../../images/meshki_2.jpg';

const Meshki = () => {
  return (
    <main>
      <section className="section3">
        <div className="container">
          <div className="product_detail_1 open-modal_product">
            <img
              className="product_detail_image"
              src={meshki_1}
              alt="ВЕЛИКІ ПАКУВАЛЬНІ ПАКЕТИ З ПОЛІЕТИЛЕНУ"
            />
            <div className="product_detail_info">
              <h2>ВЕЛИКІ ПАКУВАЛЬНІ ПАКЕТИ З ПОЛІЕТИЛЕНУ</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;У кожній сфері промисловості чи
                торгівлі, а також у повсякденному житті постійно є потреба
                вирішувати проблеми з пакуванням будь-яких виробів, товарів i
                речей. I тут без місткого i міцного пакету просто не обійтись.
                Мішки різних розмірів i об’ємів використовують для
                транспортування i зберігання предметів побутового, промислового,
                медичного, будівельного i іншого призначення. Вони незамінні для
                гуртових продажів при формуванні партій відвантажень.
                Виготовлення таких пакетів здійснюється з використанням
                поліетилену высокого тиску. Сировина може використовуватись як
                первинна, так i вторинна. В останньому випадку мішки будуть
                дешевше, але при цьому частіше використовується комбінація із
                первинної i вторинної сировини.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Цей вид пакетів у вигляді великих
                мішків має декілька позитивних характеристик:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- висока міцність i надійність
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- висока еластичність (навіть при
                від’ємних температурах такий пакет буде зберігати еластичність)
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- дозволяє зберігати велику
                кількість товарів або речей, що є актуальним для великих
                підприємств
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- такі мішки достатньо
                универсальні, їх можно використовувати для будь чого.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section3">
        <div className="container">
          <div className="product_detail_2 open-modal_product">
            <img
              className="product_detail_image"
              src={meshki_2}
              alt="МІШКИ ДЛЯ СМІТТЯ"
            />
            <div className="product_detail_info">
              <h2>МІШКИ ДЛЯ СМІТТЯ</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Пакети для сміття це незамінний
                атрибут сучасного життя. Дозволяють зручно вирішувати проблему з
                сортуванням відходів.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ПАКЕТ ДЛЯ СМІТТЯ, 120 ЛІТРІВ:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Ширина 70 см
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- довжина 110 см
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- товщина 20 мкм
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- матеріал ПЕВТ II
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- у рулоні 10 шт
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
            data-pdf-src="../prices/meshki.pdf"
          >
            ПОДИВИТИСЯ ПРАЙС - ЛИСТ
          </button>
        </div>
      </section>
    </main>
  );
};

export default Meshki;

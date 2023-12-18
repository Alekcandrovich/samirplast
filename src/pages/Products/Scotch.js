import React from 'react';
import scotch_1 from '../../images/scotch_1.jpg';

const Scotch = () => {
  return (
    <main>
      <section class="section3">
        <div class="container">
          <div class="product_detail_1 open-modal_product">
            <img
              class="product_detail_image"
              src={scotch_1}
              alt="СКОТЧ ПАКУВАЛЬНИЙ ПРОЗОРИЙ (КЛЕЙКА СТРІЧКА)"
            />
            <div class="product_detail_info">
              <h2>СКОТЧ ПАКУВАЛЬНИЙ ПРОЗОРИЙ (КЛЕЙКА СТРІЧКА)</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Складно переоцінити важливість
                такого матеріалу, як скотч-плівка у сучасному світі. Справді,
                вона використовується всюди: фіксація предметів, пакування,
                ремонт чогось, канцелярські потреби, оздоблювальні роботи, тощо.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Пропонуємо вам високоякісну клейку
                стрічку, виготовлену з двухосноорієнтованого поліпропілену i
                підсиленого клейкого шару акрилу. Такий тип скотчу має безліч
                переваг, наприклад:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- висока
                міцність
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- стійкість до
                агресивного середовища
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- нетоксичність
                та безпека
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- може
                застосовуватись при коливаннях температури та вологості
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- висока
                універсальність – дуже широкий спектр застосування
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Клейка стрічка товщиною 40 мікрон
                забезпечує міцне запечатування тари малої та середньої ваги.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ширина 48 см,
                довжина 200/300 м, товщина 40 мкм
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <b>В ящику 36 шт.</b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="section4">
        <div class="button">
          <button
            type="button"
            class="product_button open-modal_price"
            data-pdf-src="../prices/scotch.pdf"
          >
            ПОДИВИТИСЯ ПРАЙС - ЛИСТ
          </button>
        </div>
      </section>
    </main>
  );
};

export default Scotch;

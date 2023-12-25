import React, { useState, useEffect } from 'react';
import ModalPrice from '../../components/Modal/ModalPrice';
import bopp_1 from '../../images/bopp_1.jpg';

const Bopp = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openModal = () => {
    const currentPath = window.location.pathname;
    const imageName = currentPath.split('/').pop();

    setImgSrc(`${process.env.PUBLIC_URL}/prices/${imageName}.jpg`);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const handlePathChange = () => {
      if (modalIsOpen) {
        openModal();
      }
    };

    window.addEventListener('popstate', handlePathChange);

    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, [modalIsOpen]);

  return (
    <main>
      <section className="section3">
        <div className="container">
          <div className="product_detail_1 open-modal_product">
            <img
              className="product_detail_image"
              src={bopp_1}
              alt="ПАКЕТ ПОЛІПРОПІЛЕНОВИЙ (БОПП) З КЛЕЙОВИМ КЛАПАНОМ"
            />
            <div className="product_detail_info">
              <h2>ПАКЕТ ПОЛІПРОПІЛЕНОВИЙ (БОПП) З КЛЕЙОВИМ КЛАПАНОМ</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Пакети БОПП з клейовим клапаном
                прозорі i виготовлені з поліпропілену високої міцності.
                Абревіатура БОПП (ВОРР) розшифровується як
                біоаксіально-орієнтована поліпропіленова плівка. Цей пакет буде
                надійним захистом для вашої продукції i, одночасно, завдяки
                прозорості, дозволить показати її зовнішній вигляд. Клейка
                стрічка, нанесена на край пакета, дозволяє помітно прискорити
                пакувальний процес. Кожний пакет має клапан 40 мм. Великий вибір
                пакетів БОПП дозволяє підібрати їх під різноманітний бізнес, а
                також використовувати в домашніх умовах. Пакети БОПП
                виготовляються тільки із первинної сировини, тому в них можна
                зберігати харчові продукти, але вони не підходять для
                заморожування.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Товщина:</b> 20 мкм
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Упаковка:</b> 250 шт
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
            onClick={openModal}
          >
            ПОДИВИТИСЯ ПРАЙС - ЛИСТ
          </button>
        </div>
      </section>

      <ModalPrice
        imgSrc={imgSrc}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </main>
  );
};

export default Bopp;
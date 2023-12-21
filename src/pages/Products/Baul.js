// import React, { useState } from 'react';
// import ModalPrice from '../../components/Modal/ModalPrice';
// import baul_1 from '../../images/baul_1.jpg';
// import baul_2 from '../../images/baul_2.jpg';

// const Baul = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [imgSrc, setImgSrc] = useState('');

//   const openModal = imgSrc => {
//     setImgSrc(imgSrc);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <main>
//       <section className="section3">
//         <div className="container">
//           <div className="product_detail_1 open-modal_product">
//             <img
//               className="product_detail_image"
//               src={baul_1}
//               alt="МІШКИ ПОЛІПРОПІЛЕНОВІ"
//             />
//             <div className="product_detail_info">
//               <h2>МІШКИ ПОЛІПРОПІЛЕНОВІ</h2>
//               <p>
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Останніми роками одним із
//                 найпоширеніших видів пакувального матеріалу на Українському
//                 ринку є мішки з поліпропілену. Цей вид упаковки за своїми
//                 якісно-експлуатаційними характеристиками не поступається лляним
//                 або джутовим мішкам, але є значно дешевшим. Наступною відмінною
//                 особливістю поліпропіленової тари є її підвищена механічна
//                 міцність. Це, в свою чергу, проявляється у стійкості до
//                 багаторазового згинання, до перепадів температур, до лужних
//                 речовин i води. Найважливіша характеристика ПП Мішка -
//                 экологічність i не токсичность матеріалу, що дозволяє
//                 використовувати цей вид упаковки у секторі харчової
//                 промисловості.
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поліпропіленові мішки - идеальне
//                 рішення для зберігання i транспортування продуктів харчування.
//                 Харчовий поліпропілен не містить токсичних речовин, безпечний
//                 для здоров’я людини, достатньо міцний, щоб витримувати заявлене
//                 навантаження.
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Мішки - білі, що свідчить про
//                 використання тканини першої категорії без використання вторинних
//                 матеріалів. Вони мають декілька варіантів щільності, в
//                 залежності від виробника. Щільність підбираєтся під різновид
//                 товару з урахуванням особливостей погрузки / розгрузки. Верх
//                 мішка порізаний термоножем, а низ прошивається подвійним швом,
//                 що перешкоджає розривам, пошкодженню та просипанню товару.
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Мішки під зерно, муку, цукор
//                 пропонуються у наступних конфігураціях:
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 5 кг - 30х45 см;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 10 кг - 40х55 см;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 25 кг – 50х75 см;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 50 кг - 55х105 см,
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 55 кг - 55х103 см.
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поліпропіленові мішки призначені
//                 для сортування, транспортування та зберігання продукції у різних
//                 галузях промисловості:
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• харчовій - для продуктів
//                 харчування, круп, фруктів та овочів;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• сільськогосподарській - для
//                 зерна, кормів для тварин;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• хімічній - для добрив,
//                 хімречовин, отрут та інсектицидів;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• будівельній - для фасування
//                 сипучих матеріалів (піску, цементу, алебастру, шпаклівки ), а
//                 також для будівельного сміття та вивозу побутових відходів;
//                 <br />
//                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• деревообробній - для збору
//                 тирси, стружки та інших відходів.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="section3">
//         <div className="container">
//           <div className="product_detail_2 open-modal_product">
//             <img
//               className="product_detail_image"
//               src={baul_2}
//               alt="БАУЛ ПОЛІПРОПІЛЕНОВИЙ БІЛИЙ"
//             />
//             <div className="product_detail_info">
//               <h2>БАУЛ ПОЛІПРОПІЛЕНОВИЙ БІЛИЙ</h2>
//               <p>
//                 &nbsp;&nbsp;&nbsp;Баул поліпропіленовий – дуже місткий великий
//                 мішок. Використовується, в основному, для транспортування i
//                 зберігання об’ємних вантажів. Легкий, місткий, достатньо міцний.
//                 Мішки з пропілену мають широкий спектр застосування, як у
//                 промисловості, торгівлі, будівництві, так i в сільському
//                 господарстві.
//                 <br />
//                 &nbsp;&nbsp;&nbsp;Ширина 100 см,
//                 <br />
//                 &nbsp;&nbsp;&nbsp;Довжина 150 см,
//                 <br />
//                 &nbsp;&nbsp;&nbsp;Матеріал - поліпропілен.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//       <section className="section4">
//         <div className="button">
//           <button
//             type="button"
//             className="product_button open-modal_price"
//             onClick={() =>
//               openModal(`${process.env.PUBLIC_URL}/prices/baul.jpg`)
//             }
//           >
//             ПОДИВИТИСЯ ПРАЙС - ЛИСТ
//           </button>
//         </div>
//       </section>

//       <ModalPrice
//         imgSrc={imgSrc}
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//       />
//     </main>
//   );
// };

// export default Baul;






import React, { useState, useEffect } from 'react';
import ModalPrice from '../../components/Modal/ModalPrice';
import baul_1 from '../../images/baul_1.jpg';
import baul_2 from '../../images/baul_2.jpg';

const Baul = () => {
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
              src={baul_1}
              alt="МІШКИ ПОЛІПРОПІЛЕНОВІ"
            />
            <div className="product_detail_info">
              <h2>МІШКИ ПОЛІПРОПІЛЕНОВІ</h2>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Останніми роками одним із
                найпоширеніших видів пакувального матеріалу на Українському
                ринку є мішки з поліпропілену. Цей вид упаковки за своїми
                якісно-експлуатаційними характеристиками не поступається лляним
                або джутовим мішкам, але є значно дешевшим. Наступною відмінною
                особливістю поліпропіленової тари є її підвищена механічна
                міцність. Це, в свою чергу, проявляється у стійкості до
                багаторазового згинання, до перепадів температур, до лужних
                речовин i води. Найважливіша характеристика ПП Мішка -
                экологічність i не токсичность матеріалу, що дозволяє
                використовувати цей вид упаковки у секторі харчової
                промисловості.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поліпропіленові мішки - идеальне
                рішення для зберігання i транспортування продуктів харчування.
                Харчовий поліпропілен не містить токсичних речовин, безпечний
                для здоров’я людини, достатньо міцний, щоб витримувати заявлене
                навантаження.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Мішки - білі, що свідчить про
                використання тканини першої категорії без використання вторинних
                матеріалів. Вони мають декілька варіантів щільності, в
                залежності від виробника. Щільність підбираєтся під різновид
                товару з урахуванням особливостей погрузки / розгрузки. Верх
                мішка порізаний термоножем, а низ прошивається подвійним швом,
                що перешкоджає розривам, пошкодженню та просипанню товару.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Мішки під зерно, муку, цукор
                пропонуються у наступних конфігураціях:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 5 кг - 30х45 см;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 10 кг - 40х55 см;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 25 кг – 50х75 см;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 50 кг - 55х105 см,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• 55 кг - 55х103 см.
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Поліпропіленові мішки призначені
                для сортування, транспортування та зберігання продукції у різних
                галузях промисловості:
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• харчовій - для продуктів
                харчування, круп, фруктів та овочів;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• сільськогосподарській - для
                зерна, кормів для тварин;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• хімічній - для добрив,
                хімречовин, отрут та інсектицидів;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• будівельній - для фасування
                сипучих матеріалів (піску, цементу, алебастру, шпаклівки ), а
                також для будівельного сміття та вивозу побутових відходів;
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• деревообробній - для збору
                тирси, стружки та інших відходів.
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
              src={baul_2}
              alt="БАУЛ ПОЛІПРОПІЛЕНОВИЙ БІЛИЙ"
            />
            <div className="product_detail_info">
              <h2>БАУЛ ПОЛІПРОПІЛЕНОВИЙ БІЛИЙ</h2>
              <p>
                &nbsp;&nbsp;&nbsp;Баул поліпропіленовий – дуже місткий великий
                мішок. Використовується, в основному, для транспортування i
                зберігання об’ємних вантажів. Легкий, місткий, достатньо міцний.
                Мішки з пропілену мають широкий спектр застосування, як у
                промисловості, торгівлі, будівництві, так i в сільському
                господарстві.
                <br />
                &nbsp;&nbsp;&nbsp;Ширина 100 см,
                <br />
                &nbsp;&nbsp;&nbsp;Довжина 150 см,
                <br />
                &nbsp;&nbsp;&nbsp;Матеріал - поліпропілен.
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

export default Baul;

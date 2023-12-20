import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalPrice from '../../components/Modal/ModalPrice';
import productsData from '../../assets/productsData.json';
import './styles.css';

const Product = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openModal = imgSrc => {
    setImgSrc(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <ul className="content">
        {productsData.map(
          ({ name, title, title_product, description, img }, id) => (
            <li key={id}>
              <Link to={`/products/${name.toLowerCase()}`}>
                <div className="content__clik">
                  <div className="overlay-thumb">
                    <img src={process.env.PUBLIC_URL + img} alt={title} />
                    <p className="overlay-text">{description}</p>
                  </div>
                  <div className="flex-grow">
                    <div className="card-port">
                      <h2
                        className="titel-port"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {title_product.replace(/<br \/>/g, '\n')}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="button">
                <button
                  type="button"
                  className="price_button open-modal_price"
                  onClick={() =>
                    openModal(
                      `${process.env.PUBLIC_URL}/prices/${name}.jpg`
                    )
                  }
                >
                  ПРАЙС - ЛИСТ
                </button>
              </div>
            </li>
          )
        )}
      </ul>

      <ModalPrice
        imgSrc={imgSrc}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default Product;








// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
// import { Document } from 'react-pdf';
// import productsData from '../../assets/productsData.json';
// import './styles.css';

// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import 'pdfjs-dist/build/pdf.worker.entry';

// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = null;

// Modal.setAppElement('#root');

// const Product = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [pdfSrc, setPdfSrc] = useState('');

//   const openModal = pdfSrc => {
//     setPdfSrc(pdfSrc);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="container">
//       <ul className="content">
//         {productsData.map(
//           ({ name, title, title_product, description, img }, id) => (
//             <li key={id}>
//               <Link to={`/products/${name.toLowerCase()}`}>
//                 <div className="content__clik">
//                   <div className="overlay-thumb">
//                     <img src={process.env.PUBLIC_URL + img} alt={title} />
//                     <p className="overlay-text">{description}</p>
//                   </div>
//                   <div className="flex-grow">
//                     <div className="card-port">
//                       <h2
//                         className="titel-port"
//                         style={{ whiteSpace: 'pre-line' }}
//                       >
//                         {title_product.replace(/<br \/>/g, '\n')}
//                       </h2>
//                     </div>
//                   </div>
//                 </div>
//               </Link>
//               <div className="button">
//                 <button
//                   type="button"
//                   className="price_button open-modal_price"
//                   onClick={() => openModal(`../../assets/prices/${name}.pdf`)}
//                 >
//                   ПРАЙС - ЛИСТ
//                 </button>
//               </div>
//             </li>
//           )
//         )}
//       </ul>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="PDF Modal"
//       >
//         <button onClick={closeModal}>Закрыть</button>
//         <Document file={pdfSrc} />
//       </Modal>
//     </div>
//   );
// };

// export default Product;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ModalPrice from '../../components/Modal/ModalPrice';

// import productsData from '../../assets/productsData.json';
// import './styles.css';

// const Product = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [pdfSrc, setPdfSrc] = useState('');

//   const openModal = (pdfSrc) => {
//     setPdfSrc(pdfSrc);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="container">
//       <ul className="content">
//         {productsData.map(({ name, title_product, description, img }, id) => (
//           <li key={id}>
//             <Link to={`/products/${name.toLowerCase()}`}>
//               <div className="content__clik">
//                 <div className="overlay-thumb">
//                   <img src={process.env.PUBLIC_URL + img} alt={name} />
//                   <p className="overlay-text">{description}</p>
//                 </div>
//                 <div className="flex-grow">
//                   <div className="card-port">
//                     <h2 className="titel-port" style={{ whiteSpace: 'pre-line' }}>
//                       {title_product.replace(/<br \/>/g, '\n')}
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//             <div className="button">
//               <button
//                 type="button"
//                 className="price_button open-modal_price"
//                 onClick={() => openModal(`../../assets/prices/${name}.pdf`)}
//               >
//                 ПРАЙС - ЛИСТ
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <ModalPrice pdfSrc={pdfSrc} isOpen={modalIsOpen} onRequestClose={closeModal} />
//     </div>
//   );
// };

// export default Product;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import ModalPrice from '../../components/Modal/ModalPrice';
// import productsData from '../../assets/productsData.json';
// import './styles.css';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// const Product = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [pdfSrc, setPdfSrc] = useState('');

//   const openModal = pdfSrc => {
//     setPdfSrc(pdfSrc);
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="container">
//       <ul className="content">
//         {productsData.map(({ name, title_product, description, img }, id) => (
//           <li key={id}>
//             <Link to={`/products/${name.toLowerCase()}`}>
//               <div className="content__clik">
//                 <div className="overlay-thumb">
//                   <img src={process.env.PUBLIC_URL + img} alt={name} />
//                   <p className="overlay-text">{description}</p>
//                 </div>
//                 <div className="flex-grow">
//                   <div className="card-port">
//                     <h2
//                       className="titel-port"
//                       style={{ whiteSpace: 'pre-line' }}
//                     >
//                       {title_product.replace(/<br \/>/g, '\n')}
//                     </h2>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//             <div className="button">
//               <button
//                 type="button"
//                 className="price_button open-modal_price"
//                 onClick={() => openModal(`../../assets/prices/${name}.pdf`)}
//               >
//                 ПРАЙС - ЛИСТ
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>

//       <ModalPrice
//         pdfSrc={pdfSrc}
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//       />
//     </div>
//   );
// };

// export default Product;

// import React, { useEffect } from 'react';
// import Modal from 'react-modal';
// import { Transition } from 'react-transition-group';
// import icons from './icons.svg';
// import './styles.css';

// const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('modal-open');
//     } else {
//       document.body.classList.remove('modal-open');
//     }
//   }, [isOpen]);

//   return (
//     <Transition in={isOpen}>
//       {state => (
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={onRequestClose}
//           contentLabel="Image Modal"
//           overlayClassName="modal_overlay"
//           className={`modal_price modal-${state}`}
//         >
//           <button onClick={onRequestClose} className="close_modal">
//             <svg className="icon_modal">
//               <use xlinkHref={`${icons}#close`} />
//             </svg>
//           </button>
//           <div className="image_container">
//             <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
//           </div>
//         </Modal>
//       )}
//     </Transition>
//   );
// };

// export default ModalPrice;








// import React, { useEffect } from 'react';
// import Modal from 'react-modal';
// import { Transition } from 'react-transition-group';
// import icons from './icons.svg';
// import './styles.css';

// const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.classList.add('modal-open');
//     } else {
//       document.body.classList.remove('modal-open');
//     }
//   }, [isOpen]);

//   const transitionTimeout = 300; // Замените на ваше значение

//   return (
//     <Transition in={isOpen} timeout={transitionTimeout}>
//       {state => (
//         <Modal
//           isOpen={isOpen}
//           onRequestClose={onRequestClose}
//           contentLabel="Image Modal"
//           overlayClassName="modal_overlay"
//           className={`modal_price modal-${state}`}
//         >
//           <button onClick={onRequestClose} className="close_modal">
//             <svg className="icon_modal">
//               <use xlinkHref={`${icons}#close`} />
//             </svg>
//           </button>
//           <div className="image_container">
//             <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
//           </div>
//         </Modal>
//       )}
//     </Transition>
//   );
// };

// export default ModalPrice;










import React, { useEffect, useCallback } from 'react';
import icons from './icons.svg';
import './styles_.css';

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  const closeModal = useCallback(() => {
    onRequestClose();
  }, [onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    const handleEscape = event => {
      if (isOpen && event.keyCode === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  const overlayClassName = isOpen ? 'modal_overlay active' : 'modal_overlay';
  const modalClassName = isOpen ? 'modal_price active' : 'modal_price';

  return (
    <div className={overlayClassName} id="modalOverlay" onClick={closeModal}>
      <div className={modalClassName} onClick={e => e.stopPropagation()}>
        <button onClick={closeModal} className="close_modal">
          <svg className="icon_modal">
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
        <div className="image_container">
          <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
        </div>
      </div>
    </div>
  );
};

export default ModalPrice;

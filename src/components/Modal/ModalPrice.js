// import React, { useEffect } from 'react';
// import Modal from 'react-modal';
// import { gsap } from 'gsap';
// import icons from './icons.svg';
// import './styles.css';

// const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
//   useEffect(() => {
//     //   if (isOpen) {
//     //     document.body.classList.add('modal-open');
//     //   } else {
//     //     document.body.classList.remove('modal-open');
//     //   }
//     // }, [isOpen]);

//     console.log('isOpen changed:', isOpen);

//     const modalContent = document.querySelector('.modal_content');

//     if (isOpen) {
//       // Перед открытием модального окна, устанавливаем стиль, чтобы GSAP мог изменять видимость
//       gsap.set(modalContent, { maxHeight: '0%', scale: 0.8 });

//       // Анимация появления
//       gsap.to(modalContent, {
//         duration: 1,
//         maxHeight: '100%',
//         scale: 1,
//         ease: 'power2.inOut',
//       });

//       document.body.classList.add('modal-open');
//     } else {
//       // Анимация исчезновения
//       gsap.to(modalContent, {
//         duration: 0.5,
//         maxHeight: '0%',
//         scale: 0.8,
//         ease: 'power2.inOut',
//         onComplete: () => {
//           document.body.classList.remove('modal-open');
//         },
//       });
//     }
//   }, [isOpen]);

//   return (
//     <Modal
//       isOpen={isOpen}
//       onRequestClose={onRequestClose}
//       contentLabel="Image Modal"
//       overlayClassName="modal_overlay"
//       className="modal_content"
//       bodyOpenClassName="modal-open"
//     >
//       <button onClick={onRequestClose} className="close_modal">
//         <svg className="icon_modal">
//           <use xlinkHref={`${icons}#close`} />
//         </svg>
//       </button>
//       <div className="image_container">
//         <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
//       </div>
//     </Modal>
//   );
// };

// export default ModalPrice;









import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';
import icons from './icons.svg';
import './styles.css';

const transitionDuration =0; // Длительность анимации в миллисекундах

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  return (
    <Transition in={isOpen} timeout={transitionDuration} unmountOnExit>
      {state => (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Image Modal"
          overlayClassName="modal_overlay"
          className={`modal_content modal-${state}`}
        >
          <button onClick={onRequestClose} className="close_modal">
            <svg className="icon_modal">
              <use xlinkHref={`${icons}#close`} />
            </svg>
          </button>
          <div className="image_container">
            <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
          </div>
        </Modal>
      )}
    </Transition>
  );
};

export default ModalPrice;

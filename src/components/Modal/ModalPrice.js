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









import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from 'react-modal';
import icons from './icons.svg';
import './styles.css';

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isOpen]);

  const modalVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="modal"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={modalVariants}
        >
          <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Image Modal"
            overlayClassName="modal_overlay"
            className="modal_price"
          >
            <motion.div
              className="image_container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <button onClick={onRequestClose} className="close_modal">
                <svg className="icon_modal">
                  <use xlinkHref={`${icons}#close`} />
                </svg>
              </button>
              <img src={imgSrc} alt="ПРАЙС - ЛИСТ" className="modal_image" />
            </motion.div>
          </Modal>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalPrice;

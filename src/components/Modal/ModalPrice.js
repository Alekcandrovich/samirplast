import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { Transition } from 'react-transition-group';
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

  return (
    <Transition in={isOpen}>
      {state => (
        <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          contentLabel="Image Modal"
          overlayClassName="modal_overlay"
          className={`modal_price modal-${state}`}
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

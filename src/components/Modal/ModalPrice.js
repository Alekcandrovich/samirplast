import React, { useEffect } from 'react';
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      overlayClassName="modal-overlay"
      className="modal-content"
    >
      <button onClick={onRequestClose} className="close-modal">
        <svg className="icon-modal">
          <use xlinkHref={`${icons}#close`} />
        </svg>
      </button>
      <img
        src={imgSrc}
        alt="ПРАЙС - ЛИСТ"
        style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
      />
    </Modal>
  );
};

export default ModalPrice;

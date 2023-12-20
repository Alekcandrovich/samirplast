import React from 'react';
import Modal from 'react-modal';
import icons from './icons.svg';
import './styles.css';

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  const modalStyle = {
    content: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%) scale(1)',
      width: '95%',
      height: '100%',
      maxWidth: '820px',
      maxHeight: '680px',
      backgroundColor: 'var(--background-slogan)',
      borderRadius: '8px',
      padding: '40px',
      margin: '0',
      zIndex: '1000',
      transition: 'transform var(--transition-timing) var(--transition-duration)',
      display: isOpen ? 'block' : 'none',
    },
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      style={modalStyle}
    >
      <button onClick={onRequestClose} className="close-modal close-posicion">
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
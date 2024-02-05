import React, { useEffect, useCallback } from 'react';
import icons from './icons.svg';
import './styles.css';

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  const closeModal = useCallback(() => {
    onRequestClose();
  }, [onRequestClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'auto';
    }

    const handleEscape = event => {
      if (isOpen && event.key === 'Escape') closeModal();
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
    };
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

import React, { useEffect, useCallback, useState } from 'react';
import icons from './icons.svg';
import './styles.css';

const ModalPrice = ({ imgSrc, isOpen, onRequestClose }) => {
  const [isClosing, setIsClosing] = useState(false);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => onRequestClose(), 500);
  }, [onRequestClose]);

  useEffect(() => {
    const handleEscape = e => isOpen && e.key === 'Escape' && closeModal();

    document.body.classList.toggle('modal-open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'auto';
      setIsClosing(false);
    };
  }, [isOpen, closeModal]);

  const overlayClassName = isOpen ? 'modal_overlay active' : 'modal_overlay';
  const modalClassName = isClosing
    ? 'modal_price closing'
    : isOpen
    ? 'modal_price active'
    : 'modal_price';

  return (
    <div
      className={overlayClassName}
      id="modalOverlay"
      onClick={e => {
        if (isOpen) {
          e.stopPropagation();
        }
      }}
    >
      <div className={modalClassName}>
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

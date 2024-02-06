import React, { useEffect, useState, useCallback } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icons from './icons.svg';
import './styles.css';

const PrevArrow = ({ onClick }) => (
  <div className="slide_arrow prev" onClick={onClick}>
    <svg className="icon_modal">
      <use xlinkHref={`${icons}#left`} />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slide_arrow next" onClick={onClick}>
    <svg className="icon_modal">
      <use xlinkHref={`${icons}#right`} />
    </svg>
  </div>
);

const ModalProduct = ({ images, closeModal }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const closeAnimation = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setModalVisible(false);
      closeModal();
    }, 500);
  }, [closeModal]);

  useEffect(() => {
    const closeOnEsc = event => {
      if (event.key === 'Escape') {
        closeAnimation();
      }
    };

    document.body.addEventListener('keydown', closeOnEsc);
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
      document.body.style.overflow = 'auto';
    };
  }, [closeAnimation]);

  const settings = {
    dots: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  useEffect(() => {
    setModalVisible(true);
  }, []);

  const overlayClassName = modalVisible
    ? 'modal_overlay active'
    : 'modal_overlay';
  const modalClassName = isClosing
    ? 'modal_product closing'
    : modalVisible
    ? 'modal_product active'
    : 'modal_product';

  return (
    <div className={`${overlayClassName}`} onClick={closeAnimation}>
      <div className={`${modalClassName}`} onClick={e => e.stopPropagation()}>
        <button type="button" className="close_modal" onClick={closeAnimation}>
          <svg className="icon_modal">
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
        <Slider {...settings}>
          {images.map((imageData, index) => (
            <div key={index} className="slide">
              <img
                className="slide_img"
                src={imageData.imageSrc}
                alt={`Slide ${index + 1}`}
              />
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  width: '100%',
                }}
              >
                {imageData.text.includes('(') ? (
                  <>
                    {imageData.text.substring(0, imageData.text.indexOf('('))}
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                      {imageData.text.substring(imageData.text.indexOf('('))}
                    </span>
                  </>
                ) : (
                  imageData.text
                )}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModalProduct;

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import icons from './icons.svg';
import './styles.css';

const PrevArrow = ({ onClick }) => (
  <div className="slide-arrow prev" onClick={onClick}>
    <svg className="icon-modal">
      <use xlinkHref={`${icons}#left`} />
    </svg>
  </div>
);

const NextArrow = ({ onClick }) => (
  <div className="slide-arrow next" onClick={onClick}>
    <svg className="icon-modal">
      <use xlinkHref={`${icons}#right`} />
    </svg>
  </div>
);

const ModalProduct = ({ images, closeModal }) => {
  useEffect(() => {
    const closeOnEsc = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.body.addEventListener('keydown', closeOnEsc);

    return () => {
      document.body.removeEventListener('keydown', closeOnEsc);
    };
  }, [closeModal]);

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    pauseOnHover: false,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="modal-overlay">
      <div className="modal-product">
        <button type="button" className="close-modal" onClick={closeModal}>
          <svg className="icon-modal">
            <use xlinkHref={`${icons}#close`} />
          </svg>
        </button>
        <Slider {...settings}>
          {images.map((imageData, index) => (
            <div key={index} className="slide">
              <img src={imageData.imageSrc} alt={`Slide ${index + 1}`} />
              <p
                style={{
                  textAlign: 'center',
                  marginTop: '10px',
                  width: '100%',
                }}
              >
                {imageData.text}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ModalProduct;

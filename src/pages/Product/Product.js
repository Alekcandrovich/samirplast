import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ModalPrice from '../../components/Modal/ModalPrice';
import productsData from '../../assets/productsData.json';
import './styles.css';

const Product = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState('');

  const openModal = imgSrc => {
    setImgSrc(imgSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="container">
      <ul className="content">
        {productsData.map(
          ({ productName, title, title_product, description, img }, id) => (
            <li key={id}>
              <Link to={`/products/${productName.toLowerCase()}`}>
                <div className="content__clik">
                  <div className="overlay-thumb">
                    <img src={process.env.PUBLIC_URL + img} alt={title} />
                    <p className="overlay-text">{description}</p>
                  </div>
                  <div className="flex-grow">
                    <div className="card-port">
                      <h2
                        className="titel-port"
                        style={{ whiteSpace: 'pre-line' }}
                      >
                        {title_product.replace(/<br \/>/g, '\n')}
                      </h2>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="button">
                <button
                  type="button"
                  className="price_button open-modal_price"
                  onClick={() =>
                    openModal(
                      `${process.env.PUBLIC_URL}/prices/${productName}.jpg`
                    )
                  }
                >
                  ПРАЙС - ЛИСТ
                </button>
              </div>
            </li>
          )
        )}
      </ul>

      <ModalPrice
        imgSrc={imgSrc}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      />
    </div>
  );
};

export default Product;
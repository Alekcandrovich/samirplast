import React from 'react';
import { Link } from "react-router-dom";
import productsData from '../../assets/productsData.json';
import './styles.css';

const Product = () => {
  return (
    <div className="container">
      <ul className="content">
        {productsData.map(
          ({ name, title, title_product, description, img }, id) => (
            <li key={id}>
              <Link to={`/products/${name.toLowerCase()}`}>
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
                  data-pdf-src={`../prices/${name}.pdf`}
                >
                  ПРАЙС - ЛИСТ
                </button>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default Product;

import React from 'react';
import "./styles.css";

const ButtonPrice = ({ onClick }) => (
  <section className="section4">
    <div className="button">
      <button
        type="button"
        className="product_button open-modal_price"
        onClick={onClick}
      >
        ПОДИВИТИСЯ ПРАЙС - ЛИСТ
      </button>
    </div>
  </section>
);

export default ButtonPrice;

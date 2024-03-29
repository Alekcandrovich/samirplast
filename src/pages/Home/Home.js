import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../../components/Reviews/Reviews';
import './styles.css';
import productsData from '../../assets/productsData.json';

const Home = ({ reviews, setReviews }) => {
  return (
    <main>
      <section className="slogan">
        <div className="container">
          <h1 className="slogan__titel">
            Якісна упаковка для
            <br />
            вашого бізнесу
          </h1>
        </div>
      </section>
      <div className="product__section">
        <section className="section1">
          <div className="container">
            <h2 className="product_titel">НАША ПРОДУКЦIЯ</h2>
            <ul className="product">
              {productsData.map(({ productName, title, img }, id) => (
                <li key={id} className="product__item choice">
                  <Link to={`/products/${productName.toLowerCase()}`}>
                    <div className="label-thumb">
                      <img
                        className="pruduct__photo"
                        src={process.env.PUBLIC_URL + img}
                        alt={title}
                      />
                      <div className="label">
                        <p className="label__text marquee">{title}</p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <Reviews reviews={reviews} setReviews={setReviews} />
    </main>
  );
};

export default Home;

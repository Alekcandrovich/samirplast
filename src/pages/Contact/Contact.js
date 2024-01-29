import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="container contact-page">
      <div className="connect connection">
        <div>
          <h2 className="connection_titel-contact">Контакти</h2>
          <ul>
            <li className="connection-item">
              <h3>Наш e-mail:</h3>
              <a href="mailto:samirplast@i.ua" className="link">
                samirplast@i.ua
              </a>
            </li>
            <li className="connection-item">
              <h3>Наш телефон:</h3>
              <a href="tel:+380632882888" className="link">
                +38 063 288 28 88
              </a>
            </li>
            <li className="connection-item">
              <h3>Наш адрес:</h3>
              <a
                href="https://goo.gl/maps/jnqnLiTGTyFEsg5t9"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="link"
              >
                м. Харків, вул. Ак. Павлова, 120
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="connection_titel-work">Розклад роботи</h2>
          <ul>
            <li className="connection-item">
              <h3>Понеділок:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>Вівторок:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>Середа:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>Четвер:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>П'ятниця:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>Субота:</h3>
              <p className="schedule">з 9-00 до 16-00</p>
            </li>
            <li className="connection-item">
              <h3>Неділя:</h3>
              <p className="schedule">вихідний</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="connection">
        <h2 className="connection_titel-map">Ми на карті</h2>
        <div className="map_container">
          <iframe
            className="map link"
            title="Карта"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2564.237859668496!2d36.31372017626286!3d50.00689681920174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41270be50df97799%3A0x99ead68d07f501c6!2z0KHQsNC80LjRgNCf0LvQsNGB0YI!5e0!3m2!1sru!2sua!4v1706452640941!5m2!1sru!2sua"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

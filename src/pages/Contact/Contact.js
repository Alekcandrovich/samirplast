import React from "react";
import map from '../../images/map.jpg';
import './styles.css';

const Contact = () => {
  return (
    <div className='container contact-page'>
      <div className='connect connection'>
        <div>
          <h2 className='connection_titel-contact'>Контакти</h2>
          <ul>
            <li className='connection-item'>
              <h3>Наш e-mail:</h3>
              <a href='mailto:samirplast@i.ua' className='link'>
                samirplast@i.ua
              </a>
            </li>
            <li className='connection-item'>
              <h3>Наш телефон:</h3>
              <a href='tel:+380632882888' className='link'>
                +38 063 288 28 88
              </a>
            </li>
            <li className='connection-item'>
              <h3>Наш адрес:</h3>
              <a
                href='https://goo.gl/maps/jnqnLiTGTyFEsg5t9'
                target='_blank'
                rel='noopener noreferrer nofollow'
                className='link'
              >
                м. Харків, вул. Ак. Павлова, 120
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='connection_titel-work'>Розклад роботи</h2>
          <ul>
            <li className='connection-item'>
              <h3>Понеділок:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>Вівторок:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>Середа:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>Четвер:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>П'ятниця:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>Субота:</h3>
              <p className='schedule'>з 9-00 до 16-00</p>
            </li>
            <li className='connection-item'>
              <h3>Неділя:</h3>
              <p className='schedule'>вихідний</p>
            </li>
          </ul>
        </div>
      </div>
      <div className='connection'>
        <h2 className='connection_titel-map'>Ми на карті</h2>
        <a
          href='https://goo.gl/maps/jnqnLiTGTyFEsg5t9'
          target='_blank'
          rel='noopener noreferrer nofollow'
        >
          <img className='map link' src={map} alt='map' />
        </a>
      </div>
    </div>
  );
};

export default Contact;

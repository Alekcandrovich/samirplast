import React from 'react';
import { NavLink } from "react-router-dom";
import './styles.css';
import icons from './icons.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container social-contact">
        <div className="footer-contact">
          <NavLink to="/" className="logo">
            Самiр<span className="logo logo__down">Пласт</span>
          </NavLink>
          <address>
            <ul className="address">
              <li>
                <a
                  href="https://goo.gl/maps/jnqnLiTGTyFEsg5t9"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="address link"
                >
                  м. Харків, вул. Академіка Павлова, 120
                </a>
              </li>
              <li>
                <a href="mailto:samirplast@i.ua" className="link">
                  samirplast@i.ua
                </a>
              </li>
              <li>
                <a href="tel:+380632882888" className="link">
                  +38 063 288 28 88
                </a>
              </li>
            </ul>
          </address>
        </div>
        <div>
          <p className="compound">Приєднуйтесь</p>
          <ul className="footer-social">
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="a-footer"
              >
                <svg className="icon-footer">
                  <use
                    xlinkHref={`${icons}#instagram`}
                    className="icon-footer"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="a-footer"
              >
                <svg className="icon-footer">
                  <use
                    xlinkHref={`${icons}#facebook`}
                    className="icon-footer"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="a-footer"
              >
                <svg className="icon-footer">
                  <use xlinkHref={`${icons}#twitter`} className="icon-footer" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

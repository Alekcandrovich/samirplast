import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import icons from './icons.svg';
import './styles.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `header${isScrolled ? ' fixed' : ''}`;

  const activeLink = 'nav__link nav__link--current';
  const normalLink = 'nav__link';

  return (
    <header className={headerClassName}>
      <div className="container logo__nav">
        <NavLink to="/" className="logo">
          Самiр<span className="logo logo__up">Пласт</span>
        </NavLink>
        <nav>
          <div className="menu-devices">
            <ul className="nav">
              <li className="nav__item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Головна
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Продукцiя
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  Контакти
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className="contact-posicion">
          <ul className="contact">
            <li>
              <a href="mailto:samirplast@i.ua" className="contact__icon mailto">
                <svg className="envelope">
                  <use xlinkHref={`${icons}#envelope`} />
                </svg>
                samirplast@i.ua
              </a>
            </li>
            <li>
              <a href="tel:+380632882888" className="contact__icon tel">
                <svg className="smartphone">
                  <use xlinkHref={`${icons}#smartphone`} />
                </svg>
                +38 063 288 28 88
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="menu-toggle__posicion">
        <button
          type="button"
          className="menu-toggle js-open-menu"
          aria-expanded="false"
        >
          <svg
            className="menu-icon__menu"
            aria-label="кнопка открытия мобильного меню"
          >
            <use xlinkHref={`${icons}#menu_40`} className="icon-menu" />
          </svg>
        </button>
      </div>
      <div className="menu-container js-menu-container" id="menu-container">
        <button type="button" className="menu-toggle js-close-menu">
          <svg
            className="menu-icon__close"
            aria-label="кнопка закрытия мобильного меню"
          >
            <use xlinkHref={`${icons}#close_40`} className="icon-menu" />
          </svg>
        </button>
        <ul>
          <li className="nav__menu">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Головна
            </NavLink>
          </li>
          <li className="nav__menu">
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Продукцiя
            </NavLink>
          </li>
          <li className="nav__menu">
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              Контакти
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <a href="tel:+380632882888" className="contact__icon tel">
              +38 063 288 28 88
            </a>
          </li>
          <li>
            <a href="mailto:samirplast@i.ua" className="contact__icon mailto">
              samirplast@i.ua
            </a>
          </li>
        </ul>
        <ul className="menu__network">
          <li>
            <a href="https://www.instagram.com/" className="menu__social">
              Instagram
            </a>
            <span className="menu__span">|</span>
          </li>
          <li>
            <a href="https://www.twitter.com/" className="menu__social">
              Twitter
            </a>
            <span className="menu__span">|</span>
          </li>
          <li>
            <a href="https://www.facebook.com/" className="menu__social">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

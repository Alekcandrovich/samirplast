import React, { useState, useEffect, useCallback, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from '../Theme/ThemeProvider';
import icons from './icons.svg';
import './styles.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);

  const handleScroll = () => {
    const scrollPosition =
      document.body.scrollTop || document.documentElement.scrollTop;
    setIsScrolled(scrollPosition > 0);
  };

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const handleEscapeKey = useCallback(
    event => {
      if (event.key === 'Escape') {
        closeMobileMenu();
      }
    },
    [closeMobileMenu]
  );

  const handleNavLinkClick = () => {
    closeMobileMenu();
  };

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    document.addEventListener('keydown', handleEscapeKey);

    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [handleEscapeKey]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const headerClassName = `header${isDarkMode ? ' dark-mode' : ''}${
    isScrolled ? ' fixed' : ''
  }`;
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
                  onClick={handleNavLinkClick}
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
                  onClick={handleNavLinkClick}
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
                  onClick={handleNavLinkClick}
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

        <button className="theme" onClick={toggleTheme}>
          <svg className="icon-theme">
            {isDarkMode ? (
              <use xlinkHref={`${icons}#moon`} />
            ) : (
              <use xlinkHref={`${icons}#sun`} />
            )}
          </svg>
        </button>

        <div className="menu-toggle__posicion">
          <button
            type="button"
            className={`menu-toggle js-open-menu${
              isMobileMenuOpen ? ' active' : ''
            }`}
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
          >
            <svg
              className="menu-icon__menu"
              aria-label="кнопка открытия мобильного меню"
            >
              <use xlinkHref={`${icons}#menu_40`} className="icon-menu" />
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (

          <div
            className={`menu-container js-menu-container${
              isDarkMode ? ' dark-mode' : ''
              }${isMobileMenuOpen ? ' is-open' : ''}`}
            
            id="menu-container"
          >
            <button
              type="button"
              className="menu-toggle js-close-menu"
              onClick={closeMobileMenu}
            >
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
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={handleNavLinkClick}
                >
                  Головна
                </NavLink>
              </li>
              <li className="nav__menu">
                <NavLink
                  to="/product"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={handleNavLinkClick}
                >
                  Продукцiя
                </NavLink>
              </li>
              <li className="nav__menu">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                  onClick={handleNavLinkClick}
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
                <a
                  href="mailto:samirplast@i.ua"
                  className="contact__icon mailto"
                >
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
        )}
      </div>
    </header>
  );
};

export default Header;

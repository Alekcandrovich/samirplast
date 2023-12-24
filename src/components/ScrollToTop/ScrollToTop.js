import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const rootElement = document.getElementById('root');

  Modal.setAppElement(rootElement);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;

import React, { useState, lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import store from '../../redux/store';
import 'modern-normalize';
import CustomLoader from '../../components/Loader/CustomLoader';
import ScrollToTop from '../ScrollToTop/ScrollToTop';
import ThemeProvider from '../Theme/ThemeProvider';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

const Home = lazy(() => import('../../pages/Home/Home'));
const Product = lazy(() => import('../../pages/Product/Product'));
const Contact = lazy(() => import('../../pages/Contact/Contact'));
const Baul = lazy(() => import('../../pages/Products/Baul'));
const Bopp = lazy(() => import('../../pages/Products/Bopp'));
const Mayka = lazy(() => import('../../pages/Products/Mayka'));
const Meshki = lazy(() => import('../../pages/Products/Meshki'));
const Banan = lazy(() => import('../../pages/Products/Banan'));
const Odejda = lazy(() => import('../../pages/Products/Odejda'));
const Paket = lazy(() => import('../../pages/Products/Paket'));
const Rukav = lazy(() => import('../../pages/Products/Rukav'));
const Scotch = lazy(() => import('../../pages/Products/Scotch'));
const Streych = lazy(() => import('../../pages/Products/Streych'));
const Trempel = lazy(() => import('../../pages/Products/Trempel'));
const Zip = lazy(() => import('../../pages/Products/Zip'));

const App = () => {
  const [reviews, setReviews] = useState([]);

  return (
    <Provider store={store}>
      <ThemeProvider> {/* Оберните приложение провайдером темы */}
      <Router basename="/samirplast">
        <ScrollToTop />
        <Header />
        <Suspense fallback={<CustomLoader />}>
          <Routes>
            <Route
              path="/"
              element={<Home reviews={reviews} setReviews={setReviews} />}
            />
            <Route
              path="/product"
              element={<Product reviews={reviews} setReviews={setReviews} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/baul" element={<Baul />} />
            <Route path="/products/bopp" element={<Bopp />} />
            <Route path="/products/mayka" element={<Mayka />} />
            <Route path="/products/meshki" element={<Meshki />} />
            <Route path="/products/banan" element={<Banan />} />
            <Route path="/products/odejda" element={<Odejda />} />
            <Route path="/products/paket" element={<Paket />} />
            <Route path="/products/Rukav" element={<Rukav />} />
            <Route path="/products/scotch" element={<Scotch />} />
            <Route path="/products/streych" element={<Streych />} />
            <Route path="/products/trempel" element={<Trempel />} />
            <Route path="/products/zip" element={<Zip />} />
            <Route
              path="/reviews"
              element={<Reviews reviews={reviews} setReviews={setReviews} />}
            />
          </Routes>
        </Suspense>
        <Footer />
        </Router>
        </ThemeProvider>
        </Provider>
  );
};

export default App;

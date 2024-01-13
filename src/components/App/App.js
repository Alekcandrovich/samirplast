import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'modern-normalize';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Reviews from '../Reviews/Reviews';

import Home from '../../pages/Home/Home';
import Product from '../../pages/Product/Product';
import Contact from '../../pages/Contact/Contact';
import Baul from '../../pages/Products/Baul';
import Bopp from '../../pages/Products/Bopp';
import Mayka from '../../pages/Products/Mayka';
import Meshki from '../../pages/Products/Meshki';
import New from '../../pages/Products/New';
import Odejda from '../../pages/Products/Odejda';
import Paket from '../../pages/Products/Paket';
import Rukav from '../../pages/Products/Rukav';
import Scotch from '../../pages/Products/Scotch';
import Streych from '../../pages/Products/Streych';
import Trempel from '../../pages/Products/Trempel';
import Zip from '../../pages/Products/Zip';

import './App.css';

const App = () => (
  <div className="App">
    <Router basename="/samirplast">
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/baul" element={<Baul />} />
        <Route path="/products/bopp" element={<Bopp />} />
        <Route path="/products/mayka" element={<Mayka />} />
        <Route path="/products/meshki" element={<Meshki />} />
        <Route path="/products/new" element={<New />} />
        <Route path="/products/odejda" element={<Odejda />} />
        <Route path="/products/paket" element={<Paket />} />
        <Route path="/products/Rukav" element={<Rukav />} />
        <Route path="/products/scotch" element={<Scotch />} />
        <Route path="/products/streych" element={<Streych />} />
        <Route path="/products/trempel" element={<Trempel />} />
        <Route path="/products/zip" element={<Zip />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  </div>
);

export default App;
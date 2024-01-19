import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header';
import Home from './layout/Home';
import Footer from './layout/Footer';

import './assets/css/Default.css';
import './assets/css/Header.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Footer />
  </React.StrictMode>
);
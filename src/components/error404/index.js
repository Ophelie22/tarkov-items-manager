import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './styles.scss';

const error404 = () => (
  <div className="error404-container">
    <Header />
    <div className="error404-container-body">
      <img src="https://image.noelshack.com/fichiers/2020/36/5/1599218373-image3.png" className="error404-img" />
    </div>
    <Footer />
  </div>
);

export default error404;

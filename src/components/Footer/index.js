import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Footer = () => (
  <div className="footer">
    <div className="footer-contact">
      <Link to="/contacts">Contacts</Link>
    </div>
    <div className="footer-copyright">
      <span>@2020 Tarkov Items Manager</span>
    </div>
  </div>
);

export default Footer;

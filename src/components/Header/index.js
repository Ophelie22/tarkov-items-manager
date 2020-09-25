import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../../containers/LoginForm';
import Img from '../../assets/tarkov.png';
import './styles.scss';

const Header = () => (
  <div className="header">
    <Link className="container-header-logo" to="/">
      <img className="header-logo" src={Img} alt="logo TIMNG" />
    </Link>
    <LoginForm />
  </div>
);

export default Header;

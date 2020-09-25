import React from 'react';

import { Link } from 'react-router-dom';

import './styles.scss';

const NavBar = () => (
  <div className="NavBar-container">
    <div className="NavBar-container-body">
      <div className="NavBar-container-body-allItems">
        <Link className="link" to="/allItems">All Items</Link>
      </div>
      <div className="NavBar-container-body-questsItems">
        <Link className="link" to="/quests">Quests Items</Link>
      </div>
      <div className="NavBar-container-body-hideoutItems">
        <Link className="link" to="/hideout">Hideout Items</Link>
      </div>
    </div>
  </div>
);

export default NavBar;

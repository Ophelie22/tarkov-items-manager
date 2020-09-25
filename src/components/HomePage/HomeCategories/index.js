import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './styles.scss';

import Toggler from '../../../containers/Toggler';

const HomeCategories = ({ open }) => {
  const cssClassNames = open ? 'menu' : 'menu menu--close';
  return (
    <div className="homeCategories">
      <div className="homeCategories-toggler">
        <div className="toggler-arrow">
          <span className="toggler-arrow-open">Open </span>
          <span><Toggler open={open} /></span>
          <span className="toggler-arrow-menu"> Menu</span>
        </div>
      </div>
      <div className={cssClassNames}>
        <div className="homeCategories-allItems">
          <Link to="/allItems">All Items</Link>
        </div>

        <div className="homeCategories-questsItems">
          <Link to="/quests">Quests Items</Link>
        </div>
        <div className="homeCategories-hideoutItems">
          <Link to="/hideout">Hideout Items</Link>
        </div>
      </div>
    </div>
  );
};

HomeCategories.protoTypes = {
  open: PropTypes.bool.isRequired,
};

export default HomeCategories;

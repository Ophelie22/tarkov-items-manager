import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Toggler = ({ open, openMenu }) => {
  const cssClassNames = open ? 'toggler toggler--open' : 'toggler toggler--close';
  return (
    <div>
      <button
        className={cssClassNames}
        type="button"
        onClick={() => {
          openMenu();
        }}
      />
    </div>
  );
};

Toggler.propTypes = {
  open: PropTypes.bool.isRequired,
  openMenu: PropTypes.func.isRequired,
};

export default Toggler;

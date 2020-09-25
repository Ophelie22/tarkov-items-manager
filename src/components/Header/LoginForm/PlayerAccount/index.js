import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AccountDelete from './AccountDelete';

import Footer from '../../../Footer';
import Header from '../..';

import './styles.scss';

const PlayerAccount = ({ email, id, loginData }) => {
  const url = `/player-account/${id}/delete-account`;
  return (
    <div className="player-account-container">
      <Header />
      <div className="player-account-container-body">
        <div className="player-account-container-body-email">
          {/* // dans ton state */}
          <div className="email">your email : {loginData.email}</div>
        </div>
        <div className="player-account-container-body-button">
          <Link
            to={url}
            className="player-account-container-body-delete"
          >Delete account
          </Link>
        </div>
      </div>
      <Footer />
    </div>

  );
};

PlayerAccount.propTypes = {
  email: PropTypes.string.isRequired,
};

export default PlayerAccount;

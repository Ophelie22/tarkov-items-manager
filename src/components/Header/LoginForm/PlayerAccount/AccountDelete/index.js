import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Header from '../../..';
import Footer from '../../../../Footer';

import './styles.scss';

const AccountDelete = ({
  deleteAccount,
  loading,
  isLogged,
  redirect,
}) => {
  const handleButtonOK = () => {
    console.log('je valide');
    deleteAccount();
  };

  return (

    <div className="account-delete-container">
      {!isLogged && redirect && (
        <Redirect to="/" />
      )}
      <Header />

      <div className="account-delete-container-body">
        <div className="border">
          <div
            className="account-delete-container-body-text"
          >Are you sure you want to delete your account?
        </div>
          <div className="account-delete-container-body-button">
            <Button
              className="account-delete-container-body-button-ok"
              type="button"
              onClick={handleButtonOK}
            >OK
          </Button>
            <Link to="/">
              <Button
                className="account-delete-container-body-button-cancel"
                type="button"
              >Cancel
            </Button>
            </Link>
          </div>
        </div>
      </div>
      {loading && (
        <div
          className="loading"
        >
          Connexion...
        </div>
      )}
      <Footer />
    </div>
  );
};

AccountDelete.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

AccountDelete.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

AccountDelete.propTypes = {
  deleteAccount: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  redirect: PropTypes.bool.isRequired,


};

export default AccountDelete;

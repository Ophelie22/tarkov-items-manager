import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Header from '..';
import Footer from '../../Footer';
import './styles.scss';
import Loading from '../../Loader';

const CreateAccount = ({
  onChange,
  createData,
  submitFormCreateAccount,
  successMessage,
  errorMessage,
  loading,
  redirect,

}) => {
  console.log('ici');

  const handleSubmit = (evt) => {
    console.log("j'appuie sur le bouton submit du formulaire");
    evt.preventDefault();
    submitFormCreateAccount();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onChange({
      [name]: value,
    });
  };

  return (

    <div className="create-account-container">
      <Header />
      <div className="container">
        {loading ? (<Loading />)
          : (
            <div className="createAccount">
              <h1 className="createAccount-title">Create your account</h1>
              <form
                onSubmit={handleSubmit}
                action="submit"
                className="createAccount-form"
              >
                <Input
                  type="email"
                  placeholder="your email"
                  name="email"
                  value={createData.email}
                  onChange={handleInputChange}
                  className="createAccount-email createAccount-input"
                />
                <Input
                  type="password"
                  placeholder="your password"
                  name="password"
                  value={createData.password}
                  onChange={handleInputChange}
                  className="createAccount-password createAccount-input"
                />
                <Input
                  type="password"
                  placeholder="confirm your password"
                  name="passwordConfirm"
                  value={createData.passwordConfirm}
                  onChange={handleInputChange}
                  className="createAccount-confirmPassword createAccount-input"
                />
                <div className="createAccount-form-button">
                  {errorMessage && (
                    <p className="error-message">Error: {errorMessage}</p>
                  )}
                  {successMessage && (
                    <p p className="success-message">{successMessage}</p>
                  )}
                  <Button
                    type="submit"
                    className="createAccount-submit"
                  >OK!
                  </Button>
                </div>
              </form>

            </div>
          )}
      </div>
      <Footer />
    </div>
  );
};

CreateAccount.propTypes = {
  onChange: PropTypes.func.isRequired,
  createData: PropTypes.func.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
};

export default CreateAccount;

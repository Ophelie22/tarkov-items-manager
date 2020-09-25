import React from 'react';
import { Input, Button } from 'semantic-ui-react';
import { persistStore, persistReducer } from 'redux-persist';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles.scss';

const LoginForm = ({
  onInputChange,
  onFormLogin,
  loginData,
  isLogged,
  loading,
  handleLogout,
  id,
  error,
}) => {
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  const url = `/player-account/${id}`;
  console.log(id);
  return (
    <div className="login">
      <div>
        {!isLogged && (
          <Link to="/create-account">
            <span
              className="login-create"
            >No account yet?
            </span>
          </Link>
        )}
      </div>
      {isLogged && (
        <div className="isLogged">
          <div className="login-welcome">
            Welcome
          <div className="login-playerAccount">
              <Link to={url}><span className="login-playerAccount-email">{loginData.email}</span></Link>
            </div>
            <Button
              type="button"
              onClick={handleLogout}
            >Disconnect
          </Button>
          </div>
        </div>
      )}
      {!loading && !isLogged && (
        <form className="login-form-input" action="POST" onSubmit={handleSubmit}>
          <Input
            className="login-form-input-email"
            type="email"
            name="email"
            placeholder="Your email"
            value={loginData.email}
            onChange={handleInputChange}
            size='small'
          />
          <Input
            className="login-form-input-password"
            type="password"
            name="password"
            placeholder="Your password"
            value={loginData.password}
            onChange={handleInputChange}
            size='small'

          />
          {error && (
            <p className="errorMessage">Error: {error}</p>
          )}
          <Button
            className="submit-button"
            type="submit"
          >OK
          </Button>
        </form>
      )}
      {loading && (
        <div
          className="loading"
        >
          Connexion...
        </div>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onFormLogin: PropTypes.func.isRequired,
  loginData: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  isLogged: PropTypes.bool.isRequired,
  handleLogout: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  error: PropTypes.bool.isRequired,
};

export default LoginForm;

// == Import npm
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// == Import components
import HomePage from '../../containers/Homepage';
import AllItems from '../../containers/AllItems';
import Hideout from '../../containers/AllHideout';
import AllQuests from '../../containers/AllQuests';
import CreateAccount from '../../containers/CreateAccount';
import PlayerAccount from '../../containers/PlayerAccount';
import AccountDelete from '../../containers/AccountDelete';
// import LegalNotice from '../';
import error404 from '../error404';
import Contact from '../Contacts';

import store from '../../store';

// == Import CSS

import 'semantic-ui-css/semantic.min.css';
import './styles.scss';

// == Composant
const App = ({
  getItems,
  getFollowed,
  getFollowedHideout,
  getHideouts,
  getDealers,
  checkAuth,
  isLogged,
  getCountQuests,
  getCountHideout,
}) => {
  useEffect(() => {
    checkAuth();
    getItems();
    getHideouts();
    getDealers();
  }, []);
  if (isLogged) {
    getFollowed();
    getFollowedHideout();
    getCountQuests();
    getCountHideout();
  }

  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/allitems" component={AllItems} />
        <Route exact path="/hideout" component={Hideout} />
        <Route exact path="/quests" component={AllQuests} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/player-account/:id" component={PlayerAccount} />
        <Route exact path="/player-account/:id/delete-account" component={AccountDelete} />
        <Route exact path="/contacts" component={Contact} />
        {/* <Route exact path="/legal-notice" component={LegalNotice} /> */}
        <Route component={error404} />
      </Switch>
    </Provider>
  );
};

App.propTypes = {
  getItems: PropTypes.func.isRequired,
  getFollowed: PropTypes.func.isRequired,
  getHideouts: PropTypes.func.isRequired,
  getDealers: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
  getFollowedHideout: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
  getCountQuests: PropTypes.func.isRequired,
  getCountHideout: PropTypes.func.isRequired,
};

// == Export
export default App;

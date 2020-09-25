import { combineReducers } from 'redux';

import toggler from './toggler';
import items from './items';
import searchBar from './searchBar';
import counter from './counter';
import allQuests from './allQuests';
import allHideouts from './allHideouts';
import loginForm from './loginForm';
import createAccount from './createAccount';
import follow from './follow';

export default combineReducers({
  toggler,
  items,
  searchBar,
  counter,
  allQuests,
  allHideouts,
  loginForm,
  createAccount,
  follow,
});

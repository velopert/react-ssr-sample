import { combineReducers } from 'redux';
import profile from './profile';
import repo from './repo';

export default combineReducers({
  profile,
  repo
});
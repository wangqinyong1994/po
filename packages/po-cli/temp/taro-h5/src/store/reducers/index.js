import { combineReducers } from 'redux';
import counter from './counter';
import counterPersist from './counterPersist';
import user from './user';

export default combineReducers({
  counter,
  counterPersist,
  user,
});

import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import auth from 'store/Auth/reducers';

export default (history) => combineReducers({
  router: connectRouter(history),
  auth,
});

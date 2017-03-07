import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';

const initialState = () => Immutable.fromJS({});

const app = combineReducers({
  data: initialState
});

export default app;

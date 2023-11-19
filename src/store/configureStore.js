// configureStore.js
import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import gameReducer from '../reducers/gameReducer';

const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

const configureStore = () => {
  return legacy_createStore(rootReducer, applyMiddleware(thunk));
};

export default configureStore;

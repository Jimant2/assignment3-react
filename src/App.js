// App.js
import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import configureStore from './store/configureStore';
import Login from './components/Login';
import CreateUser from './components/CreateUser';
import Profile from './components/Profile';
import HighScores from './components/HighScores';
import PlayGame from './components/PlayGame';
import { fetchAllUsers } from './actions/userActions';
import { fetchGames, startNewGame } from './actions/gameActions';


const AppWrapper = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>
      <h1>Match Three Game - Assignment 3</h1>
      {/* Add your routing logic here */}
      <Login />
      <CreateUser />
      <Profile />
      <HighScores />
      <PlayGame />
    </div>
  );
};

export default AppWrapper;
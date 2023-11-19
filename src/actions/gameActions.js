// gameActions.js
import * as actionTypes from './actionTypes';
import api from '../services/api';

export const fetchGamesSuccess = (games) => ({
  type: actionTypes.FETCH_GAMES_SUCCESS,
  payload: games,
});

export const fetchGames = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/games');
      dispatch(fetchGamesSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};
export const startNewGameSuccess = (game) => ({
  type: actionTypes.START_NEW_GAME_SUCCESS,
  payload: game,
});

export const fetchGameDetailsSuccess = (game) => ({
  type: actionTypes.FETCH_GAME_DETAILS_SUCCESS,
  payload: game,
});

export const updateGameSuccess = (game) => ({
  type: actionTypes.UPDATE_GAME_SUCCESS,
  payload: game,
});

export const startNewGame = () => {
  return async (dispatch) => {
    try {
      const response = await api.post('/games');
      dispatch(startNewGameSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const fetchGameDetails = (gameId) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/games/${gameId}`);
      dispatch(fetchGameDetailsSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const updateGame = (gameId, gameData) => {
  return async (dispatch) => {
    try {
      const response = await api.patch(`/games/${gameId}`, gameData);
      dispatch(updateGameSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};
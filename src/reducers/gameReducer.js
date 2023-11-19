// gameReducer.js
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  games: [],
  currentGame: null,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload,
      };

      case actionTypes.FETCH_GAME_DETAILS_SUCCESS:
      return {
        ...state,
        currentGame: action.payload,
      };

    case actionTypes.START_NEW_GAME_SUCCESS:
      return {
        ...state,
        currentGame: action.payload,
      };

    default:
      return state;
  }
};

export default gameReducer;

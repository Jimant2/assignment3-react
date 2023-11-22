import * as actionTypes from '../actions/actionTypes';

const initialState = {
  currentUser: null,
  userToken: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USER_SUCCESS:
      case actionTypes.LOGIN_SUCCESS:
        console.log('Login success. Payload:', action.payload);
        return {
          ...state,
          currentUser: action.payload,
          userToken: action.payload.token,
        };
  
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          currentUser: null,
          userToken: null,
        };

    case actionTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      }
    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

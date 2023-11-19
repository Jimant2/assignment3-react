import * as actionTypes from './actionTypes';
import api from '../services/api';

export const createUserSuccess = (user) => ({
  type: actionTypes.CREATE_USER_SUCCESS,
  payload: user,
});

export const loginSuccess = (userData) => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: {
    token: userData.token,
    userId: userData.userId,
  },
});

export const logoutSuccess = () => ({
  type: actionTypes.LOGOUT_SUCCESS,
});

export const fetchUserSuccess = (user) => ({
  type: actionTypes.FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchAllUsersSuccess = (users) => ({
  type: actionTypes.FETCH_ALL_USERS_SUCCESS,
  payload: users,
});

export const updateUserSuccess = (user) => ({
  type: actionTypes.UPDATE_USER_SUCCESS,
  payload: user,
});

export const createUser = (userData) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/users', userData);
      dispatch(createUserSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const login = (credentials) => {
  return async (dispatch) => {
    try {
      const response = await api.post('/login', credentials);
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
      } else {
        throw new Error('Login failed');
      }
    } catch (error) {
      throw error; 
    }
  };
};

export const logout = (token) => {
  return async (dispatch) => {
    try {
      await api.post(`/logout?token=${token}`);
      dispatch(logoutSuccess());
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };
};

export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await api.get(`/users/${userId}`);
      dispatch(fetchUserSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const fetchAllUsers = () => {
  return async (dispatch) => {
    try {
      const response = await api.get('/users');
      dispatch(fetchAllUsersSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

export const updateUser = (userId, userData) => {
  return async (dispatch) => {
    try {
      const response = await api.patch(`/users/${userId}`, userData);
      dispatch(updateUserSuccess(response.data));
    } catch (error) {
      // Handle error
    }
  };
};

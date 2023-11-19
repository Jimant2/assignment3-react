import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../actions/userActions';

const Login = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(state => state.user && state.user.userToken);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginMessage, setLoginMessage] = useState('');

  const handleLogin = async () => {
    try {
      await dispatch(login(credentials)); 
      setIsLoggedIn(true);
      setLoginMessage('Login successful!');
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setLoginMessage('Invalid username or password. Please try again.');        
      } else {
        setLoginMessage('Login failed. Please try again.');
      }
    }
  };
  
  const handleLogout = () => {
    if (userToken) {
      dispatch(logout(userToken));
      setIsLoggedIn(false);
      setLoginMessage('Logout successful!');
    } else {
      setLoginMessage('You are not logged in.');
    }
  };
  

  return (
    <div>
      <h2>{isLoggedIn ? 'Welcome!' : 'Login'}</h2>
      {isLoggedIn ? (
        <>
          <p>You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
            />
          </div>
          <button onClick={handleLogin}>Login</button>
          {loginMessage && <p>{loginMessage}</p>}
        </>
      )}
    </div>
  );
};

export default Login;

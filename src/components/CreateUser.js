import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../actions/userActions';

const CreateUser = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({ username: '', password: '' });

  const handleCreateUser = () => {
    dispatch(createUser(userData));
  };

  return (
    <div>
      <h2>Create User</h2>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={userData.username}
          onChange={(e) => setUserData({ ...userData, username: e.target.value })}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={userData.password}
          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
        />
      </div>
      <button onClick={handleCreateUser}>Create User</button>
    </div>
  );
};

export default CreateUser;

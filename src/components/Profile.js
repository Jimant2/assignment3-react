import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, updateUser } from '../actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchUser(currentUser.id));
    }
  }, [currentUser, dispatch]);

  const handleUpdateProfile = () => {
    dispatch(updateUser(currentUser.id, { /* properties to update */ }));
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {currentUser.username}</p>
      {/* Display other user properties as needed */}
      <button onClick={handleUpdateProfile}>Update Profile</button>
    </div>
  );
};

export default Profile;

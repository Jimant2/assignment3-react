import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser, updateUser } from '../actions/userActions';

const Profile = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const userToken = localStorage.getItem('userToken');
  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    if (userId) {
      // Perform any additional authentication checks if needed
      dispatch(fetchUser(userId));
    }
  }, [userId, dispatch]);

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

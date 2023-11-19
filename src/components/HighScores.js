import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGames } from '../actions/gameActions';

const HighScores = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const games = useSelector((state) => state.game.games);

  useEffect(() => {
    dispatch(fetchGames());
  }, [dispatch]);

  return (
    <div>
      <h2>High Scores</h2>
      <h3>Top 10 High Scores</h3>
      {/* Display the top 10 high scores */}
      <h3>Top 3 High Scores (User)</h3>
      {/* Display the top 3 high scores for the logged-in user */}
    </div>
  );
};

export default HighScores;

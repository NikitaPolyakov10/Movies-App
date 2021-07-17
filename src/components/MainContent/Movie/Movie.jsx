import './Movie.css';
import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';

export const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';

const DEFAULT_URL =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80';

export const RatingCircle = ({ rating }) => {
  const setVoteClass = (vote) => {
    if (vote >= 8) {
      return 'high-rating';
    } else if (vote >= 6 && vote < 8) {
      return 'middle-rating';
    } else if (vote < 6 && vote !== 0) {
      return 'low-rating';
    } else if (vote === 0) {
      return 'none-rating';
    }
  };
  return <div className={`rating ${setVoteClass(rating)}`}> {rating ? rating : '-'}</div>;
};

export const getRoundVote = (vote) => {
  if (vote > 0) {
    return vote.toFixed(1);
  } else {
    return vote;
  }
};

const Movie = ({ title, poster_path, release_date, vote_average, id, size = 'xl' }) => {
  const { push } = useHistory();

  const path = poster_path ? IMG_PATH + poster_path : DEFAULT_URL;

  const onClickMovie = useCallback(() => {
    push(`/movies/${id}`);
  }, [push, id]);

  return (
    <>
      <div className={`movie ${size}`} onClick={onClickMovie}>
        <img className="movie-img" src={path} alt={title} />
        <div className="movie-info">
          <div className="movie-title">{title}</div>
          <div className="movie-release-date">{release_date && format(new Date(release_date), 'MMM dd, yyyy')}</div>
          <div className="movie-rating">
            <RatingCircle rating={getRoundVote(vote_average)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;

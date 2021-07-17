import './MovieTrailers.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovieTrailers } from '../../../../redux/actions/getMovieTrailers';
import { getMovieTrailers } from '../../../../redux/selectors/selectors';
import play from '../../../../img/movie-details/play.svg';

const YOU_TUBE_PATH = 'https://www.youtube.com/watch?v=';

const MovieTrailers = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();
  const movieTrailers = useSelector(getMovieTrailers) || [];

  useEffect(() => {
    dispatch(fetchMovieTrailers(movieId));
  }, [dispatch, movieId]);

  if (movieTrailers.length > 0) {
    return (
      <div className="movie-trailers">
        {movieTrailers.slice(0, 2).map((item) => {
          return (
            <div key={item.id} className="trailer-link-container">
              <a className="trailer-link" href={item.key ? YOU_TUBE_PATH + item.key : 'No trailer'} target="blank">
                <img src={play} className="play-trailer-img" alt="play-trailer" />
                <span className="trailer-link-name">{item.name}</span>
                <span className="trailer-link-site">{item.site}</span>
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MovieTrailers;

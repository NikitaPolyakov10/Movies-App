import { combineReducers } from 'redux';
import movieDetailsReducer from './movieDetailsReducer';
import movieTrailersReducer from './movieTrailersReducer';
import movieReviewsReducer from './movieReviewsReducer';
import similarMoviesReducer from './similarMoviesReducer';
import upcomingMoviesReducer from './upcomingMoviesReducer';
import moviesReducer from './moviesReducer';
import searchMoviesReducer from './searchMoviesReducer';
import genreMoviesReducer from './genreMoviesReducer';

const rootReducer = combineReducers({
  movieDetailsReducer,
  movieTrailersReducer,
  movieReviewsReducer,
  similarMoviesReducer,
  upcomingMoviesReducer,
  moviesReducer,
  searchMoviesReducer,
  genreMoviesReducer,
});

export default rootReducer;

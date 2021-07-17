export const FETCH_MOVIE_REVIEWS_REQUEST = 'FETCH_MOVIE_REVIEWS_REQUEST';
export const FETCH_MOVIE_REVIEWS_SUCCESS = 'FETCH_MOVIE_REVIEWS_SUCCESS';
export const FETCH_MOVIE_REVIEWS_FAILURE = 'FETCH_MOVIE_REVIEWS_FAILURE';

export const fetchMovieReviewsRequest = () => {
  return {
    type: FETCH_MOVIE_REVIEWS_REQUEST,
  };
};

export const fetchMovieReviewsSuccess = (movieReviews) => {
  return {
    type: FETCH_MOVIE_REVIEWS_SUCCESS,
    payload: movieReviews,
  };
};

export const fetchMovieReviewsFailure = (error) => {
  return {
    type: FETCH_MOVIE_REVIEWS_FAILURE,
    payload: error,
  };
};

export const fetchMovieReviews = (movieId) => async (dispatch) => {
  try {
    dispatch(fetchMovieReviewsRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=d9adebc9c7c79afb794e0b1ace9395ff&page=1`);
    const json = await data.json();
    dispatch(fetchMovieReviewsSuccess(json));
  } catch (e) {
    dispatch(fetchMovieReviewsFailure(e));
  }
};

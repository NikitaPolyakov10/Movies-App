export const FETCH_MOVIE_DETAILS_REQUEST = 'FETCH_MOVIE_DETAILS_REQUEST';
export const FETCH_MOVIE_DETAILS_SUCCESS = 'FETCH_MOVIE_DETAILS_SUCCESS';
export const FETCH_MOVIE_DETAILS_FAILURE = 'FETCH_MOVIE_DETAILS_FAILURE';

export const fetchMovieDetailsRequest = () => {
  return {
    type: FETCH_MOVIE_DETAILS_REQUEST,
  };
};

export const fetchMovieDetailsSuccess = (movieDetails) => {
  return {
    type: FETCH_MOVIE_DETAILS_SUCCESS,
    payload: movieDetails,
  };
};

export const fetchMovieDetailsFailure = (error) => {
  return {
    type: FETCH_MOVIE_DETAILS_FAILURE,
    payload: error,
  };
};

export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    dispatch(fetchMovieDetailsRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d9adebc9c7c79afb794e0b1ace9395ff`);
    const json = await data.json();
    dispatch(fetchMovieDetailsSuccess(json));
  } catch (e) {
    dispatch(fetchMovieDetailsFailure(e));
  }
};

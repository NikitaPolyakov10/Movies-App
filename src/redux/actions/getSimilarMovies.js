export const FETCH_SIMILAR_MOVIES_REQUEST = 'FETCH_SIMILAR_MOVIES_REQUEST';
export const FETCH_SIMILAR_MOVIES_SUCCESS = 'FETCH_SIMILAR_MOVIES_SUCCESS';
export const FETCH_SIMILAR_MOVIES_FAILURE = 'FETCH_SIMILAR_MOVIES_FAILURE';

export const fetchSimilarMoviesRequest = () => {
  return {
    type: FETCH_SIMILAR_MOVIES_REQUEST,
  };
};

export const fetchSimilarMoviesSuccess = (similarMovies) => {
  return {
    type: FETCH_SIMILAR_MOVIES_SUCCESS,
    payload: similarMovies,
  };
};

export const fetchSimilarMoviesFailure = (error) => {
  return {
    type: FETCH_SIMILAR_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchSimilarMovies = (movieId) => async (dispatch) => {
  try {
    dispatch(fetchSimilarMoviesRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=d9adebc9c7c79afb794e0b1ace9395ff&page=1`);
    const json = await data.json();
    dispatch(fetchSimilarMoviesSuccess(json));
  } catch (e) {
    dispatch(fetchSimilarMoviesFailure(e));
  }
};

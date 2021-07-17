export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const fetchMoviesRequest = () => {
  return {
    type: FETCH_MOVIES_REQUEST,
  };
};

export const fetchMoviesSuccess = (movies) => {
  return {
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesFailure = (error) => {
  return {
    type: FETCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchMovies = (pageId, moviesType) => async (dispatch) => {
  try {
    dispatch(fetchMoviesRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/${moviesType}?api_key=d9adebc9c7c79afb794e0b1ace9395ff&page=${pageId}`);
    const json = await data.json();
    dispatch(fetchMoviesSuccess(json));
  } catch (e) {
    dispatch(fetchMoviesFailure(e));
  }
};

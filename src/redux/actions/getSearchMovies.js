export const FETCH_SEARCH_MOVIES_REQUEST = 'FETCH_SEARCH_MOVIES_REQUEST';
export const FETCH_SEARCH_MOVIES_SUCCESS = 'FETCH_SEARCH_MOVIES_SUCCESS';
export const FETCH_SEARCH_MOVIES_FAILURE = 'FETCH_SEARCH_MOVIES_FAILURE';

export const fetchSearchMoviesRequest = () => {
  return {
    type: FETCH_SEARCH_MOVIES_REQUEST,
  };
};

export const fetchSearchMoviesSuccess = (movies) => {
  return {
    type: FETCH_SEARCH_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchSearchMoviesFailure = (error) => {
  return {
    type: FETCH_SEARCH_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchSearchMovies =
  (pageId, searchValue, sort = '') =>
  async (dispatch) => {
    try {
      dispatch(fetchSearchMoviesRequest());
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d9adebc9c7c79afb794e0b1ace9395ff&query=${searchValue}&page=${pageId}`);
      const json = await data.json();
      dispatch(fetchSearchMoviesSuccess(json));
    } catch (e) {
      dispatch(fetchSearchMoviesFailure(e));
    }
  };

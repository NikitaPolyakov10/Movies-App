export const FETCH_GENRE_MOVIES_REQUEST = 'FETCH_GENRE_MOVIES_REQUEST';
export const FETCH_GENRE_MOVIES_SUCCESS = 'FETCH_GENRE_MOVIES_SUCCESS';
export const FETCH_GENRE_MOVIES_FAILURE = 'FETCH_GENRE_MOVIES_FAILURE';

export const fetchMoviesGenreRequest = () => {
  return {
    type: FETCH_GENRE_MOVIES_REQUEST,
  };
};

export const fetchMoviesGenreSuccess = (movies) => {
  return {
    type: FETCH_GENRE_MOVIES_SUCCESS,
    payload: movies,
  };
};

export const fetchMoviesGenreFailure = (error) => {
  return {
    type: FETCH_GENRE_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchGenreMovies = (pageId, genreId) => async (dispatch) => {
  try {
    dispatch(fetchMoviesGenreRequest());
    const data = await fetch(`https://api.themoviedb.org/3/discover/movie/?api_key=d9adebc9c7c79afb794e0b1ace9395ff&with_genres=${genreId}&page=${pageId}`);
    const json = await data.json();
    dispatch(fetchMoviesGenreSuccess(json));
  } catch (e) {
    dispatch(fetchMoviesGenreFailure(e));
  }
};

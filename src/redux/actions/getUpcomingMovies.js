export const FETCH_UPCOMING_MOVIES_REQUEST = 'FETCH_UPCOMING_MOVIES_REQUEST';
export const FETCH_UPCOMING_MOVIES_SUCCESS = 'FETCH_UPCOMING_MOVIES_SUCCESS';
export const FETCH_UPCOMING_MOVIES_FAILURE = 'FETCH_UPCOMING_MOVIES_FAILURE';

export const fetchUpcomingMoviesRequest = () => {
  return {
    type: FETCH_UPCOMING_MOVIES_REQUEST,
  };
};

export const fetchUpcomingMoviesSuccess = (upcomingMovies) => {
  return {
    type: FETCH_UPCOMING_MOVIES_SUCCESS,
    payload: upcomingMovies,
  };
};

export const fetchUpcomingMoviesFailure = (error) => {
  return {
    type: FETCH_UPCOMING_MOVIES_FAILURE,
    payload: error,
  };
};

export const fetchUpcomingMovies = () => async (dispatch) => {
  try {
    dispatch(fetchUpcomingMoviesRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d9adebc9c7c79afb794e0b1ace9395ff&page=1`);
    const json = await data.json();
    dispatch(fetchUpcomingMoviesSuccess(json));
  } catch (e) {
    dispatch(fetchUpcomingMoviesFailure(e));
  }
};

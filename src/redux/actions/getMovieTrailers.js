export const FETCH_MOVIE_TRAILERS_REQUEST = 'FETCH_MOVIE_TRAILERS_REQUEST';
export const FETCH_MOVIE_TRAILERS_SUCCESS = 'FETCH_MOVIE_TRAILERS_SUCCESS';
export const FETCH_MOVIE_TRAILERS_FAILURE = 'FETCH_MOVIE_TRAILERS_FAILURE';

export const fetchMovieTrailersRequest = () => {
  return {
    type: FETCH_MOVIE_TRAILERS_REQUEST,
  };
};

export const fetchMovieTrailersSuccess = (movieTrailers) => {
  return {
    type: FETCH_MOVIE_TRAILERS_SUCCESS,
    payload: movieTrailers,
  };
};

export const fetchMovieTrailersFailure = (error) => {
  return {
    type: FETCH_MOVIE_TRAILERS_FAILURE,
    payload: error,
  };
};

export const fetchMovieTrailers = (movieId) => async (dispatch) => {
  try {
    dispatch(fetchMovieTrailersRequest());
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=d9adebc9c7c79afb794e0b1ace9395ff`);
    const json = await data.json();
    dispatch(fetchMovieTrailersSuccess(json));
  } catch (e) {
    dispatch(fetchMovieTrailersFailure(e));
  }
};

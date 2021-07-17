import { FETCH_MOVIE_TRAILERS_REQUEST, FETCH_MOVIE_TRAILERS_SUCCESS, FETCH_MOVIE_TRAILERS_FAILURE } from '../actions/getMovieTrailers';

const initialState = {
  isLoading: false,
  movieTrailers: [],
  error: '',
};

const movieTrailersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_TRAILERS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_MOVIE_TRAILERS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movieTrailers: action.payload,
        error: '',
      };
    }
    case FETCH_MOVIE_TRAILERS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        movieTrailers: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default movieTrailersReducer;

import { FETCH_MOVIE_DETAILS_REQUEST, FETCH_MOVIE_DETAILS_SUCCESS, FETCH_MOVIE_DETAILS_FAILURE } from '../actions/getMovieDetails';

const initialState = {
  isLoading: false,
  movieDetails: {},
  error: '',
};

const movieDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_DETAILS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_MOVIE_DETAILS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movieDetails: action.payload,
        error: '',
      };
    }
    case FETCH_MOVIE_DETAILS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        movieDetails: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default movieDetailsReducer;

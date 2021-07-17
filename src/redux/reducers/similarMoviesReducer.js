import { FETCH_SIMILAR_MOVIES_REQUEST, FETCH_SIMILAR_MOVIES_SUCCESS, FETCH_SIMILAR_MOVIES_FAILURE } from '../actions/getSimilarMovies';

const initialState = {
  isLoading: false,
  similarMovies: [],
  error: '',
};

const similarMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SIMILAR_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SIMILAR_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        similarMovies: action.payload,
        error: '',
      };
    }
    case FETCH_SIMILAR_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        similarMovies: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default similarMoviesReducer;

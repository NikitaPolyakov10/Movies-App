import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from '../actions/getMovies';

const initialState = {
  isLoading: false,
  movies: [],
  error: '',
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movies: action.payload,
        error: '',
      };
    }
    case FETCH_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        movies: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default moviesReducer;

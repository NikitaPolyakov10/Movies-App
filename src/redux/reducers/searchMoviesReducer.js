import { FETCH_SEARCH_MOVIES_REQUEST, FETCH_SEARCH_MOVIES_SUCCESS, FETCH_SEARCH_MOVIES_FAILURE } from '../actions/getSearchMovies';

const initialState = {
  isLoading: false,
  searchMovies: [],
  error: '',
};

const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_SEARCH_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        searchMovies: action.payload,
        error: '',
      };
    }
    case FETCH_SEARCH_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        searchMovies: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default searchMoviesReducer;

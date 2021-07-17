import { FETCH_UPCOMING_MOVIES_REQUEST, FETCH_UPCOMING_MOVIES_SUCCESS, FETCH_UPCOMING_MOVIES_FAILURE } from '../actions/getUpcomingMovies';

const initialState = {
  isLoading: false,
  upcomingMovies: {},
  error: '',
};

const upcomingMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPCOMING_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_UPCOMING_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        upcomingMovies: action.payload,
        error: '',
      };
    }
    case FETCH_UPCOMING_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        upcomingMovies: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default upcomingMoviesReducer;

import { FETCH_MOVIE_REVIEWS_REQUEST, FETCH_MOVIE_REVIEWS_SUCCESS, FETCH_MOVIE_REVIEWS_FAILURE } from '../actions/getMovieReviews';

const initialState = {
  isLoading: false,
  movieReviews: [],
  error: '',
};

const movieReviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_REVIEWS_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_MOVIE_REVIEWS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        movieReviews: action.payload,
        error: '',
      };
    }
    case FETCH_MOVIE_REVIEWS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        movieReviews: [],
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default movieReviewsReducer;

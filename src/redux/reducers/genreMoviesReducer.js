import { FETCH_GENRE_MOVIES_REQUEST, FETCH_GENRE_MOVIES_SUCCESS, FETCH_GENRE_MOVIES_FAILURE } from '../actions/getMoviesByGenre';

const initialState = {
  isLoading: false,
  moviesByGenre: {},
  error: '',
  genreTypes: [
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 99, name: 'Documentary' },
    { id: 18, name: 'Drama' },
    { id: 10751, name: 'Family' },
    { id: 14, name: 'Fantasy' },
    { id: 36, name: 'History' },
    { id: 27, name: 'Horror' },
    { id: 10402, name: 'Music' },
    { id: 9648, name: 'Mystery' },
    { id: 10749, name: 'Romance' },
    { id: 878, name: 'Science Fiction' },
    { id: 10770, name: 'TV Movie' },
    { id: 53, name: 'Thriller' },
    { id: 10752, name: 'War' },
    { id: 37, name: 'Western' },
  ],
};

const genreMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GENRE_MOVIES_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FETCH_GENRE_MOVIES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        moviesByGenre: action.payload,
        error: '',
      };
    }
    case FETCH_GENRE_MOVIES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        moviesByGenre: {},
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default genreMoviesReducer;

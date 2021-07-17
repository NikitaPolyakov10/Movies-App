export const getMovies = (state) => state.moviesReducer.movies.results;
export const getMoviesData = (state) => state.moviesReducer.movies;
export const getMoviesLoading = (state) => state.moviesReducer.isLoading;
export const getMoviesError = (state) => state.moviesReducer.error;

export const getSearchMovies = (state) => state.searchMoviesReducer.searchMovies.results;
export const getSearchMoviesData = (state) => state.searchMoviesReducer.searchMovies;
export const getSearchMoviesLoading = (state) => state.searchMoviesReducer.isLoading;
export const getSearchMoviesError = (state) => state.searchMoviesReducer.error;

export const getGenreMovies = (state) => state.genreMoviesReducer.moviesByGenre.results;
export const getGenreMoviesData = (state) => state.genreMoviesReducer.moviesByGenre;
export const getGenres = (state) => state.genreMoviesReducer.genreTypes;
export const getGenreMoviesLoading = (state) => state.genreMoviesReducer.isLoading;
export const getGenreMoviesError = (state) => state.genreMoviesReducer.error;

export const getUpcomingMovies = (state) => state.upcomingMoviesReducer.upcomingMovies.results;

export const getMovieDetails = (state) => state.movieDetailsReducer.movieDetails;
export const getMovieDetailsLoading = (state) => state.movieDetailsReducer.isLoading;

export const getMovieTrailers = (state) => state.movieTrailersReducer.movieTrailers.results;

export const getMovieReviews = (state) => state.movieReviewsReducer.movieReviews.results;

export const getSimilarMovies = (state) => state.similarMoviesReducer.similarMovies.results;

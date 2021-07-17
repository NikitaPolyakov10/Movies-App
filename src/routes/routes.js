import MovieDetails from '../components/MainContent/MovieDetails';
import MoviesContainer from '../components/MainContent/MoviesContainer';
import Error from '../components/Error';
import GenreMovies from '../components/MainContent/GenreMovies';
import SearchMovies from '../components/MainContent/SearchMovies/SearchMovies';

const routes = [
  {
    path: '/movies/:moviesType/page/:pageId',
    component: MoviesContainer,
    exact: true,
  },
  {
    path: '/movies/:movieId',
    component: MovieDetails,
    exact: true,
  },
  {
    path: '/movies/genre/:genreId/:pageId',
    component: GenreMovies,
    exact: true,
  },
  {
    path: '/movies/search/:searchValue/:pageId',
    component: SearchMovies,
    exact: true,
  },
  {
    path: '/',
    component: Error,
    exact: false,
  },
];

export default routes;

import './MovieDetails.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovieDetails } from '../../../redux/actions/getMovieDetails';
import { getMovieDetails, getMovieDetailsLoading } from '../../../redux/selectors/selectors';
import { IMG_PATH, RatingCircle } from '../Movie/Movie';
import { useLocation } from 'react-router';
import { getRoundVote } from '../Movie/Movie';
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import Loader from '../../Loader';
import MovieTrailers from './MovieTrailers';
import MovieReviews from './MovieReviews';
import SimilarMovies from './SimilarMovies';

const DEFAULT_PATH =
  'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { pathname } = useLocation();
  const { push } = useHistory();

  const dispatch = useDispatch();
  const { poster_path, title, overview, vote_average, release_date, production_countries, production_companies, status, genres } =
    useSelector(getMovieDetails) || {};
  const loading = useSelector(getMovieDetailsLoading) || false;

  useEffect(() => {
    dispatch(fetchMovieDetails(movieId));
    window.scrollTo(0, 0);
  }, [dispatch, movieId, pathname]);

  if (loading || !title) {
    return <Loader />;
  }

  const path = poster_path ? IMG_PATH + poster_path : DEFAULT_PATH;

  const onClickGenre = (id) => () => {
    push(`/movies/genre/${id}/1`);
  };

  return (
    <section className="movie-details">
      <div className="movie-details-body">
        <div className="movie-details-left-side">
          <img src={path} alt={title} className="movie-details-img" />
          <MovieTrailers />
        </div>
        <div className="movie-details-right-side">
          <div className="movie-details-header">
            <h2>
              {title} ({release_date && format(new Date(release_date), 'yyyy')})
            </h2>
            <RatingCircle rating={getRoundVote(vote_average)} />
          </div>
          <p className="movie-details-description">{overview}</p>
          <div className="movie-details-about-film">
            <h2>About :</h2>
            <dl>
              <dt>Genre</dt>
              <dd>
                {genres.map((genre) => (
                  <span className="genre-box" onClick={onClickGenre(genre.id)} key={genre.id}>
                    {genre.name}
                  </span>
                ))}
              </dd>
              <dt>Production year</dt>
              <dd>{format(release_date && new Date(release_date), 'MM/dd/yyyy')}</dd>
              <dt>Production Country</dt>
              <dd>{production_countries.length > 0 ? production_countries.map((country) => country.name).join(', ') : '-'}</dd>
              <dt>Production Companies</dt>
              <dd>{production_companies.length > 0 ? production_companies.map((company) => company.name).join(', ') : '-'}</dd>
              <dt>Status</dt>
              <dd>{status}</dd>
            </dl>
          </div>
        </div>
      </div>
      <SimilarMovies />
      <MovieReviews />
    </section>
  );
};

export default MovieDetails;

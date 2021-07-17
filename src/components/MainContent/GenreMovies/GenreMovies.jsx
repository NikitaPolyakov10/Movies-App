import './GenreMovies.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import React, { useEffect, useCallback } from 'react';
import { getGenreMovies, getGenres, getGenreMoviesData, getGenreMoviesLoading, getGenreMoviesError } from '../../../redux/selectors/selectors';
import { fetchGenreMovies } from '../../../redux/actions/getMoviesByGenre';
import { useHistory } from 'react-router-dom';
import Movie from '../Movie';
import Menu from '../../Menu/Menu';
import Button from '../../Button';
import Loader from '../../Loader';
import Error from '../../Error';

const GenreMovies = () => {
  const { pageId, genreId } = useParams();
  const { push } = useHistory();

  const dispatch = useDispatch();
  const moviesByGenre = useSelector(getGenreMovies) || [];
  const loading = useSelector(getGenreMoviesLoading) || false;
  const error = useSelector(getGenreMoviesError) || '';
  const genreTypes = useSelector(getGenres) || {};

  const moviesByGenreData = useSelector(getGenreMoviesData) || {};
  const currentPage = moviesByGenreData.page || 1;
  const allPages = moviesByGenreData.total_pages || 1;

  useEffect(() => {
    dispatch(fetchGenreMovies(pageId, genreId));
  }, [dispatch, genreId, pageId]);

  const menuList = genreTypes.map((genre) => ({
    label: genre.name,
    to: `/movies/genre/${genre.id}/1`,
  }));

  const incrementPage = useCallback(() => {
    push(`/movies/genre/${genreId}/${+pageId + 1}`);
    window.scrollTo(0, 0);
  }, [genreId, pageId, push]);

  const decrementPage = useCallback(() => {
    push(`/movies/genre/${genreId}/${+pageId - 1}`);
    window.scrollTo(0, 0);
  }, [genreId, pageId, push]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && error) {
    return <Error />;
  }

  return (
    <div>
      <div className="movies-menu">
        <Menu list={menuList} />
      </div>
      <div className="sort-buttons"></div>
      <div className="genres-container">
        {moviesByGenre &&
          moviesByGenre.map((item) => {
            return <Movie {...item} key={item.id} />;
          })}
      </div>
      {allPages > currentPage ? (
        <div className="pagination-container">
          <Button className="pagination-button" onClick={decrementPage}>
            Previous Page
          </Button>
          <Button className="pagination-button" onClick={incrementPage}>
            Next Page
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default GenreMovies;

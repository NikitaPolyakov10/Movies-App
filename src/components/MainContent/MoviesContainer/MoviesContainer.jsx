import './MoviesContainer.css';
import React, { useEffect } from 'react';
import { getMovies, getMoviesLoading, getMoviesError, getMoviesData } from '../../../redux/selectors/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies } from '../../../redux/actions/getMovies';
import { useLocation } from 'react-router';
import { useParams, useHistory } from 'react-router-dom';
import { useCallback } from 'react';
import Error from '../../Error';
import Movie from '../Movie';
import Loader from '../../Loader';
import Menu from '../../Menu/Menu';
import Slider from '../../Slider/Slider';
import Button from '../../Buttons/Button/Button';

const menu_list = [
  {
    label: 'Popular',
    to: '/movies/popular/page/1',
  },
  {
    label: 'Top Rated',
    to: '/movies/top_rated/page/1',
  },
  {
    label: 'Upcoming',
    to: '/movies/upcoming/page/1',
  },
  {
    label: 'Now Playing',
    to: '/movies/now_playing/page/1',
  },
];

const MoviesContainer = () => {
  const movies = useSelector(getMovies) || [];
  const loading = useSelector(getMoviesLoading) || false;
  const error = useSelector(getMoviesError) || '';

  const moviesData = useSelector(getMoviesData) || {};
  const currentPage = moviesData.page || 1;
  const allPages = moviesData.total_pages || 1;

  const { pathname } = useLocation();
  const { push } = useHistory();
  const { pageId, moviesType } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies(pageId, moviesType));
  }, [dispatch, pageId, pathname, moviesType]);

  const incrementPage = useCallback(() => {
    push(`/movies/${moviesType}/page/${+pageId + 1}`);
    window.scrollTo(0, 0);
  }, [moviesType, pageId, push]);

  const decrementPage = useCallback(() => {
    push(`/movies/${moviesType}/page/${+pageId - 1}`);
    window.scrollTo(0, 0);
  }, [moviesType, pageId, push]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && error) {
    return <Error />;
  }

  return (
    <div>
      <Slider />
      <div className="movies-menu">
        <Menu list={menu_list} />
      </div>
      <div className="movies-container">
        {movies.map((item) => (
          <Movie key={item.id} {...item} />
        ))}
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

export default MoviesContainer;

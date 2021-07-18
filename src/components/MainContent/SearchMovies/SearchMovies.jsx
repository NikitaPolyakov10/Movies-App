import './SearchMovies.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getSearchMovies, getSearchMoviesLoading, getSearchMoviesError, getSearchMoviesData } from '../../../redux/selectors/selectors';
import { fetchSearchMovies } from '../../../redux/actions/getSearchMovies';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useCallback } from 'react';
import Movie from '../Movie';
import Loader from '../../Loader';
import Error from '../../Error';
import Button from '../../Button';

const SearchMovies = () => {
  const { pageId, searchValue } = useParams();
  const { push } = useHistory();

  const dispatch = useDispatch();

  let searchMovies = useSelector(getSearchMovies) || [];
  const loading = useSelector(getSearchMoviesLoading) || false;
  const error = useSelector(getSearchMoviesError) || '';

  const searchMoviesData = useSelector(getSearchMoviesData) || {};
  const currentPage = searchMoviesData.page || 1;
  const allPages = searchMoviesData.total_pages || 1;

  useEffect(() => {
    dispatch(fetchSearchMovies(pageId, searchValue));
  }, [dispatch, pageId, searchValue]);

  const incrementPage = useCallback(() => {
    push(`/movies/search/${searchValue}/${+pageId + 1}`);
    window.scrollTo(0, 0);
  }, [searchValue, pageId, push]);

  const decrementPage = useCallback(() => {
    push(`/movies/genre/${searchValue}/${+pageId + 1}`);
    window.scrollTo(0, 0);
  }, [searchValue, pageId, push]);

  if (loading) {
    return <Loader />;
  }

  if (!loading && error) {
    return <Error />;
  }

  return (
    <div>
      <div className="movies-menu">
        <h4 className="search-header">{`What we founnd on your request "${searchValue}"`}</h4>
      </div>
      <div className="search-movies">
        {searchMovies &&
          searchMovies.map((item) => {
            return <Movie {...item} key={item.id} />;
          })}
      </div>
      {allPages > currentPage ? (
        <div className="pagination-container">
          <Button className="pagination-button" onClick={decrementPage} disabled={currentPage > 1 ? false : true}>
            Previous Page
          </Button>
          <Button className="pagination-button" onClick={incrementPage} disabled={currentPage === allPages ? true : false}>
            Next Page
          </Button>
        </div>
      ) : null}
    </div>
  );
};

export default SearchMovies;

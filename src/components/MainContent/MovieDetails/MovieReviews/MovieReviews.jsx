import './MovieReviews.css';
import React, { useEffect, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchMovieReviews } from '../../../../redux/actions/getMovieReviews';
import { getMovieReviews } from '../../../../redux/selectors/selectors';
import { format } from 'date-fns';
import user from '../../../../img/movie-details/user.svg';
import Button from '../../../Button';

const MovieReviews = () => {
  const dispatch = useDispatch();
  const { movieId } = useParams();
  const reviews = useSelector(getMovieReviews) || [];

  const [selectedItem, setSelectedItem] = useState();

  useEffect(() => {
    dispatch(fetchMovieReviews(movieId));
  }, [dispatch, movieId]);

  const getAuthorText = useCallback((str, length = 100) => {
    if (str.length > length) {
      return str.substring(0, length) + '...';
    } else {
      return str;
    }
  }, []);

  const onHideReview = () => {
    setSelectedItem(null);
  };
  const onShowReview = (item) => () => {
    setSelectedItem(item);
  };

  if (reviews.length > 0) {
    return (
      <div className="movie-reviews">
        <h2 className="reviews-title">Reviews:</h2>
        {reviews.map((item, index) => {
          const avatarUrl = !item.author_details.avatar_path
            ? user
            : item.author_details.avatar_path.includes('https')
            ? user
            : `https://image.tmdb.org/t/p/w500${item.author_details.avatar_path}`;
          return (
            <div key={index} className="review">
              <div className="review-avatar">
                <img src={avatarUrl} alt="author avatar" className="reviewer-avatar" />
              </div>
              <div className="review-wrapper">
                <div className="review-body">
                  <div className="review-header">
                    <h4 className="review-author-name">{item.author}</h4>
                    <span>{item.created_at && format(new Date(item.created_at), 'MMM, dd, yyyy')}</span>
                  </div>
                  <p className="review-text">{selectedItem && selectedItem.id === item.id ? item.content : getAuthorText(item.content, 250)}</p>
                </div>
                <div className="review-footer">
                  {selectedItem && selectedItem.id === item.id ? (
                    <Button onClick={onHideReview}>Hide review</Button>
                  ) : (
                    <Button onClick={onShowReview(item)}>Read more</Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default MovieReviews;

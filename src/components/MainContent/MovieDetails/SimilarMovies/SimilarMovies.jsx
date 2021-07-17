import './SimilarMovies.css';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { fetchSimilarMovies } from '../../../../redux/actions/getSimilarMovies';
import { getSimilarMovies } from '../../../../redux/selectors/selectors';
import Movie from '../../Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/core';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const SimilarMovies = () => {
  const { movieId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSimilarMovies(movieId));
  }, [dispatch, movieId]);

  const similarMovies = useSelector(getSimilarMovies) || [];

  if (similarMovies.length > 0) {
    return (
      <div className="similar-movies-container">
        <h2 className="similar-movies-title">Similar Movies:</h2>
        <div className="similar-movies">
          <Swiper slidesPerView={6} spaceBetween={10} slidesPerGroup={6} navigation>
            {similarMovies.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <Movie size="sm" {...item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default SimilarMovies;

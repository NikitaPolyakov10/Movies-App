import React, { useEffect, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchUpcomingMovies } from '../../redux/actions/getUpcomingMovies';
import { getUpcomingMovies } from '../../redux/selectors/selectors';
import { IMG_PATH } from '../MainContent/Movie/Movie';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade, Autoplay } from 'swiper/core';
import Button from '../Button';
import './Slider.css';
import 'swiper/swiper.min.css';
import 'swiper/components/effect-fade/effect-fade.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';

SwiperCore.use([Navigation, Pagination, EffectFade, Autoplay]);

const Tile = ({ id, title, overview, backdrop_path }) => {
  const { push } = useHistory();

  const onClickDetails = useCallback(() => push(`/movies/${id}`), [push, id]);

  return (
    <div className="tile-wrapper">
      <img className="tile-background" src={IMG_PATH + backdrop_path} alt={title} />
      <div className="tile-body">
        <h4>{title}</h4>
        <p>{overview}</p>
        <Button className="tile-button" onClick={onClickDetails}>
          Details
        </Button>
      </div>
    </div>
  );
};

const MemoizedTile = memo(Tile);

const Slider = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector(getUpcomingMovies) || [];

  useEffect(() => {
    dispatch(fetchUpcomingMovies());
  }, [dispatch]);

  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        pagination={{
          clickable: true,
        }}
        navigation
        className="mySwiper"
      >
        {upcomingMovies.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <MemoizedTile {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;

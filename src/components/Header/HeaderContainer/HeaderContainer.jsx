import React from 'react';
import './HeaderContainer.css';
import Search from '../Search';
import logo from '../../../img/logo.png';
import Menu from '../../Menu/Menu';

const MENU_LIST = [
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
  {
    label: 'Genres',
    to: '/movies/genre/28/1',
  },
];

const HeaderContainer = () => {
  return (
    <header className="header-wrapper">
      <div className="logo-wrapper">
        <a href={'https://movies-app.pages.dev/movies/popular/page/1'}>
          <img src={logo} alt="logo" className="logo" />
        </a>
      </div>
      <Menu list={MENU_LIST} />
      <div className="header-search">
        <Search />
      </div>
    </header>
  );
};

export default HeaderContainer;

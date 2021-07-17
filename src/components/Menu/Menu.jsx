import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

const Menu = ({ list = [] }) => {
  return (
    <nav className="menu-list">
      {list.map((item) => {
        return (
          <li className="menu-list-item" key={item.label}>
            <NavLink to={item.to} className="menu-link">
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </nav>
  );
};

export default Menu;

import React from 'react';
import './Footer.css';
import github from '../../img/footer/github.svg';
import linkedin from '../../img/footer/linkedin.svg';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <Link to={'/movies/popular/page/1'}>
          <img src={logo} alt="logo" className="logo" />
        </Link>
      </div>
      <div>
        <a href={'https://www.linkedin.com/in/nikita-polyakov-5aaa01201/'} target="blank" className="footer-link">
          <img src={linkedin} className="footer-link-img linkedIn" alt="linkedIn" />
        </a>
        <a href={'https://github.com/NikitaPolyakov10'} target="blank" className="footer-link">
          <img src={github} alt="github" className="footer-link-img github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

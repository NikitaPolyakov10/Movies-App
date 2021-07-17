import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-container">
      <h1 className="error-title">Error 404</h1>
      <p className="error-text">Oops! Something is wrong.</p>
      <a className="home-link" href={'http://localhost:3000/movies/popular/page/1'}>
        Go back to initial page
      </a>
    </div>
  );
};

export default Error;

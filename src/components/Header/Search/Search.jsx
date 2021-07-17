import './Search.css';
import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {
  const { push } = useHistory();

  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);
  };

  const handleSubmit = useCallback(
    (e) => {
      const value = e.target.value;
      if (e.key === 'Enter') {
        push(`/movies/search/${value}/1`);
        setInputText('');
      }
    },
    [push]
  );

  return (
    <div className="search-container">
      <input value={inputText} className="search-input" type="text" placeholder="Search movies..." onKeyDown={handleSubmit} onChange={handleChange} />
    </div>
  );
};

export default Search;

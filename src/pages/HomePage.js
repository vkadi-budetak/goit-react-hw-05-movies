import React, { useEffect, useState } from 'react';

import { optionsGet } from '../util/apiOptions';
import { NavLink } from 'react-router-dom';
import Loader from 'components/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      optionsGet
    )
      .then(response => response.json())
      .then(response => {
        setMovies(response.results);
        console.log(response);
      })
      .catch(err => console.error(err));
  }, []);

  return movies.length ? (
    <ul>
      <h2>Trending today</h2>
      {movies.map(mov => (
        <li key={mov.id}>
          <NavLink to={`/movies/${mov.id}`}>{mov.title}</NavLink>
        </li>
      ))}
    </ul>
  ) : (
    <Loader />
  );
}

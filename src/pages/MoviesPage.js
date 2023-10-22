import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { ReactComponent as IconSearch } from '../assets/search.svg';

import { useEffect, useState } from 'react';
import { optionsGet } from 'util/apiOptions';

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useSearchParams(); ///пошуковий хук
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  const query = searchMovies.get('query'); //дістали значення

  useEffect(() => {
    if (!query) return;

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      optionsGet
    )
      .then(response => response.json())
      .then(response => setMovies(response.results))
      .catch(err => console.error(err));
  }, [query]);

  const handleFormSubmit = event => {
    event.preventDefault();
    const searchValue = event.currentTarget.elements.enterMovie.value;
    console.log('searchValue: ', searchValue);

    setSearchMovies({ query: searchValue }); ///записали значення
  };
  console.log(movies);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Enter Movie</p>
          <input type="text" name="enterMovie" required />
        </label>
        <button type="submit">
          <IconSearch className="btn" />
        </button>
      </form>

      {movies.length ? (
        <ul>
          {movies.map(mov => (
            <li key={mov.id}>
              <NavLink state={{ from: location }} to={`/movies/${mov.id}`}>
                {mov.title}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        false
      )}
    </div>
  );
}

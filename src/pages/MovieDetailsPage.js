import React, { Suspense, useEffect, useRef, useState, lazy } from 'react';
import {
  useLocation,
  Link,
  NavLink,
  Routes,
  Route,
  useParams,
} from 'react-router-dom';

import { ReactComponent as IMGPlaceHolder } from '../assets/photo.svg';

import { optionsGet } from 'util/apiOptions';

import Loader from 'components/Loader';
const CastPage = lazy(() => import('./CastPage'));
const Reviews = lazy(() => import('./Reviews'));

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams(); ///динамічний параметр;
  const location = useLocation(); ///обєкт місце знаходження
  const backLinkHref = useRef(location.state?.from ?? '/');

  console.log('state', location.state);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      optionsGet
    )
      .then(response => response.json())
      .then(response => {
        setMovie(response);
        console.log(response);
      })
      .catch(err => console.error(err));
  }, [movieId]);

  return (
    <div>
      <Link className="btnGoBag" to={backLinkHref.current}>
        Go back
      </Link>
      {movie !== null && (
        <div className="styledMovie">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
          ) : (
            <IMGPlaceHolder className="imgPlaceHolder" />
          )}

          <div className="styledMovieList">
            <h1>{movie.title}</h1>
            <p>User Score: {movie.popularity.toFixed()}%</p>
            <h2>Overview</h2>
            <p>{movie.overview || 'Missing information'}</p>
            <ul>
              <h3>Genres</h3>
              {movie.genres.length ? (
                movie.genres.map(el => <li key={el.id}>{el.name}</li>)
              ) : (
                <span>Missing information</span>
              )}
            </ul>
          </div>
        </div>
      )}
      <p>Additional information</p>
      <NavLink to="cast" className="aboutMov">
        Cast
      </NavLink>
      <NavLink to="reviews" className="aboutMov">
        Reviews
      </NavLink>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="cast" element={<CastPage />} />
          <Route path="reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

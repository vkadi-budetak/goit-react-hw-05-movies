import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { StyledAppContainer } from 'App.styled';
import Loader from 'components/Loader';

// import HomePage from 'pages/HomePage';
// import MoviesPage from 'pages/MoviesPage';
// import MovieDetailsPage from 'pages/MovieDetailsPage';
// import CastPage from 'pages/CastPage';
// import Reviews from 'pages/Reviews';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetailsPage'));

export const App = () => {
  return (
    <StyledAppContainer>
      <NavLink className="header-link" to="/">
        HOME
      </NavLink>
      <NavLink className="header-link" to="/movies">
        Movies
      </NavLink>

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>
    </StyledAppContainer>
  );
};

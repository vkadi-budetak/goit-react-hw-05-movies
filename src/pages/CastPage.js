import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { optionsGet } from 'util/apiOptions';

import { ReactComponent as IMGPlaceHolder } from '../assets/photo.svg';

export default function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      optionsGet
    )
      .then(response => response.json())
      .then(response => setCast(response.cast))
      .catch(err => console.error(err));
  }, [movieId]);

  console.log(cast);

  return cast.length ? (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          {el.profile_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
              alt={el.name}
            />
          ) : (
            <IMGPlaceHolder />
          )}
          <p>{el.name}</p>
          {el.character && <p>Character: {el.character}</p>}
        </li>
      ))}
    </ul>
  ) : (
    <p>Nothing found in Cast</p>
  );
}

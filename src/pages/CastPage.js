import React, { useEffect, useState } from 'react';

import { optionsGet } from 'util/apiOptions';

import { useParams } from 'react-router-dom';

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
  }, []);

  console.log(cast);

  return cast.length ? (
    <ul>
      {cast.map(el => (
        <li key={el.id}>
          {el.profile_path && (
            <img
              src={`https://image.tmdb.org/t/p/w500/${el.profile_path}`}
              alt={el.name}
            />
          )}
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  ) : (
    false
  );
}

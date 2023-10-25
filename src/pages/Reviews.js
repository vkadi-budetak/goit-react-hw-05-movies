import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { optionsGet } from 'util/apiOptions';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      optionsGet
    )
      .then(response => response.json())
      .then(response => setReviews(response.results))
      .catch(err => console.error(err));
  }, [movieId]);

  return reviews.length ? (
    <ul>
      {reviews.map(el => (
        <li key={el.id}>
          <h4>Author: {el.author}</h4>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>Nothing found in Reviews</p>
  );
}

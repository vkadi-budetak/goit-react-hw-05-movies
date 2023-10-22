
export const apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzOGQyNzljNzQ2YzRmZmEwNGFhZGRiOTM2ZjdhYjcyYiIsInN1YiI6IjY1MzJjOWYwOGQyMmZjMDE0ZDdjZGNhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Q2QOELtcsl6P3GVERTr6cJvS6c82ww5EyoFi9xIeAnI'


export const optionsGet = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
  };
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiMoviesCredits } from '../servises/fetchApiMovies';

export const useFetchMoviesCast = () => {
  const [cast, setCast] = useState(null);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    fetchApiMoviesCredits(id).then(setCast);
  }, [id]);

  return cast;
};

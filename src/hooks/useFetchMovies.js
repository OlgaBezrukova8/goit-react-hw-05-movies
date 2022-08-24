import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiMoviesDetails } from '../servises/fetchApiMovies';

export const useFetchMovies = () => {
  const [movie, setMovie] = useState(null);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    fetchApiMoviesDetails(id).then(setMovie);
  }, [id]);

  return movie;
};

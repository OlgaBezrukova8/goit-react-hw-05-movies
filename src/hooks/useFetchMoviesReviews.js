import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApiMoviesReviews } from '../servises/fetchApiMovies';

export const useFetchMoviesReviews = () => {
  const [reviews, setReviews] = useState(null);

  const params = useParams();
  const id = params.movieId;

  useEffect(() => {
    fetchApiMoviesReviews(id).then(setReviews);
  }, [id]);

  return reviews;
};

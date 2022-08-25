import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchApiTrendingMovies } from '../../servises/fetchApiMovies';

export const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    fetchApiTrendingMovies()
      .then(setMovies)
      .catch(error => {
        setError({ error });
      });
  }, []);

  return (
    <>
      {error &&
        Notify.failure(
          `Ooops, something happend wrong ${error.message}. Please, reload the page`
        )}
      <ul>
        {movies &&
          movies.results.map(({ title, id }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

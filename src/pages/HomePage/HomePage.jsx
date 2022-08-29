import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchApiTrendingMovies } from '../../servises/fetchApiMovies';
import styles from '../HomePage/HomePage.module.css';
import cssDiv from '../../components/Container/Container.module.css';

const HomePage = () => {
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
    <div className={cssDiv.container}>
      <h2 className={styles.title}>Trending today</h2>
      {error &&
        Notify.failure(
          `Ooops, something happend wrong ${error.message}. Please, reload the page`
        )}
      <ul className={styles.list}>
        {movies &&
          movies.results.map(({ title, id }) => (
            <li key={id}>
              <Link
                className={styles.item}
                state={{ from: location }}
                to={`/movies/${id}`}
              >
                {title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  movies: PropTypes.arrayOf({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }),
};

export default HomePage;

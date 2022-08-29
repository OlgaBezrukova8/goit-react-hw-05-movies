import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchApiSearchMovies } from '../../servises/fetchApiMovies';
import { Loader } from '../../components/Loader/Loader';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import cssDiv from '../../components/Container/Container.module.css';
import styles from '../MoviesPage/MoviesPage.module.css';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const location = useLocation();

  const onChangeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      fetchApiSearchMovies(search)
        .then(res => {
          setMovies(res);
          setIsLoading(false);
        })
        .catch(error => {
          setError({ error });
          setIsLoading(false);
        });
    }
  }, [search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SearchForm onSubmit={onChangeSearch} />
          {error &&
            Notify.failure(
              `Ooops, something went wrong ${error.message}. Please, reload the page`
            )}
          {movies.length > 0 && (
            <div className={cssDiv.container}>
              <ul className={styles.list}>
                {movies.map(({ id, title }) => (
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
          )}
        </>
      )}
    </>
  );
};

export default MoviesPage;

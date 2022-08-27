import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchApiSearchMovies } from '../../servises/fetchApiMovies';
import { SearchForm } from '../../components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const location = useLocation();

  const onChangeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  useEffect(() => {
    if (search) {
      fetchApiSearchMovies(search)
        .then(setMovies)
        .catch(error => {
          setError({ error });
        });
    }
  }, [search]);

  return (
    <>
      <SearchForm onSubmit={onChangeSearch} />
      {error &&
        Notify.failure(
          `Ooops, something went wrong ${error.message}. Please, reload the page`
        )}
      {movies.length > 0 && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <Link state={{ from: location }} to={`/movies/${id}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MoviesPage;

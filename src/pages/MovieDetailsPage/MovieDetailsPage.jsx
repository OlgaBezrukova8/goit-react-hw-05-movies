import {
  Link,
  Outlet,
  useLocation,
  useParams,
  useNavigate,
} from 'react-router-dom';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';
import { Loader } from '../../components/Loader/Loader';
import styles from '../MovieDetailsPage/MovieDetailsPage.module.css';
import cssDiv from '../../components/Container/Container.module.css';

const basePosterUrl = 'https://image.tmdb.org/t/p';

const MovieDetailsPage = () => {
  const movie = useFetchMovies();
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <div className={cssDiv.container}>
      <button className={styles.button} onClick={goBack}>
        Go back
      </button>
      {!movie && <Loader />}
      {movie && (
        <>
          <MovieDetails
            img={`${basePosterUrl}/w200/${movie.poster_path}`}
            title={movie.title}
            vote={movie.vote_average.toFixed(1)}
            overview={movie.overview}
            genres={movie.genres.map(({ name }) => name + ' ')}
          />
          <div>
            <p className={styles.title}>Additional information</p>
            <Link
              className={styles.links}
              state={{ from }}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </Link>
            <Link
              className={styles.links}
              state={{ from }}
              to={`/movies/${movieId}/reviews`}
            >
              Reviews
            </Link>
          </div>
        </>
      )}

      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

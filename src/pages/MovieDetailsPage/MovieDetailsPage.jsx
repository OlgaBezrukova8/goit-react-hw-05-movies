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

const basePosterUrl = 'https://image.tmdb.org/t/p';

const MovieDetailsPage = () => {
  const movie = useFetchMovies();
  const { movieId } = useParams();

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from || '/';

  const goBack = () => navigate(from);

  return (
    <>
      <button onClick={goBack}>Go back</button>
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
            <p>Additional information</p>
            <Link state={{ from }} to={`/movies/${movieId}/cast`}>
              Cast
            </Link>
            <Link state={{ from }} to={`/movies/${movieId}/reviews`}>
              Reviews
            </Link>
          </div>
        </>
      )}

      <Outlet />
    </>
  );
};

export default MovieDetailsPage;

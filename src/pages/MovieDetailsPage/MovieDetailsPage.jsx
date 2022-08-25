import { Link } from 'react-router-dom';
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { MovieDetails } from '../../components/MovieDetails/MovieDetails';

const basePosterUrl = 'https://image.tmdb.org/t/p';

export const MovieDetailsPage = () => {
  const movie = useFetchMovies();

  return (
    <>
      <button>Go back</button>

      {movie && (
        <MovieDetails
          img={`${basePosterUrl}/w200/${movie.poster_path}`}
          title={movie.title}
          vote={movie.vote_average.toFixed(1)}
          overview={movie.overview}
          genres={movie.genres.map(({ name }) => name + ' ')}
        />
      )}

      <Link to="">Cast</Link>
      <Link to="">Reviews</Link>
    </>
  );
};

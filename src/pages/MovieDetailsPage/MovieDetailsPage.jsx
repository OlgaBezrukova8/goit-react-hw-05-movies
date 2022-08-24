import { Link } from 'react-router-dom';
import { useFetchMovies } from '../../hooks/useFetchMovies';

const basePosterUrl = 'https://image.tmdb.org/t/p';

export const MovieDetailsPage = () => {
  const movie = useFetchMovies();

  return (
    <>
      <button>Go back</button>
      {movie && (
        <>
          <div>
            <img
              src={`${basePosterUrl}/w200/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </div>

          <h2>{movie.title}</h2>

          <p>Vote {movie.vote_average.toFixed(1)}</p>

          <h3>Overview</h3>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <p>{movie.genres.map(({ name }) => name + ' ')}</p>

          <Link to="">Cast</Link>
          <Link to="">Reviews</Link>
        </>
      )}
    </>
  );
};

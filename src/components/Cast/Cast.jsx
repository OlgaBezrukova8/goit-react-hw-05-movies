import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import { CastList } from '../Cast/CastList/CastList';

export const Cast = () => {
  const cast = useFetchMoviesCast();

  return (
    <div>
      <ul>{cast && <CastList array={cast} />}</ul>
    </div>
  );
};

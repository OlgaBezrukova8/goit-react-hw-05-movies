import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import { CastList } from '../../components/Cast/CastList/CastList';

export const CastPage = () => {
  const cast = useFetchMoviesCast();

  return (
    <div>
      <ul>{cast && <CastList array={cast} />}</ul>
    </div>
  );
};

CastPage.defaultProps = {
  array: [],
};

import { CastItem } from '../CastItem/CastItem';

// `${basePosterUrl}/w200/${movie.poster_path}`
// const basePosterUrl = 'https://image.tmdb.org/t/p/w100';

export const CastList = ({ array }) => {
  return (
    <ul>
      {array.map(({ id, img, name, character }) => (
        <CastItem
          key={id}
          profile_path={img}
          name={name}
          character={character}
        />
      ))}
    </ul>
  );
};

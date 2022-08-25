// const basePosterUrl = 'https://image.tmdb.org/t/p/w100';

export const CastItem = ({ id, img, name, character }) => {
  return (
    <li key={id}>
      <img src={img} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </li>
  );
};
// poster_path
// {`${basePosterUrl}${img}`}

export const MovieDetails = ({ img, title, vote, overview, genres }) => {
  return (
    <div>
      <div>
        <img src={img} alt={title} />
      </div>

      <h2>{title}</h2>

      <p>Vote {vote}</p>

      <h3>Overview</h3>
      <p>{overview}</p>

      <h3>Genres</h3>
      <p>{genres}</p>
    </div>
  );
};

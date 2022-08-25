import PropTypes from 'prop-types';

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

MovieDetails.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};

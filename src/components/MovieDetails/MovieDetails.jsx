import PropTypes from 'prop-types';
import styles from '../MovieDetails/MovieDetails.module.css';

export const MovieDetails = ({ img, title, vote, overview, genres }) => {
  return (
    <div className={styles.container}>
      <div className={styles.img_container}>
        <img className={styles.img} src={img} alt={title} />
      </div>

      <div className={styles.text_container}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.vote}>Vote {vote}</p>

        <h3 className={styles.title_overview}>Overview</h3>
        <p className={styles.overview}>{overview}</p>

        <h3 className={styles.title_genres}>Genres</h3>
        <p className={styles.genres}>{genres}</p>
      </div>
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

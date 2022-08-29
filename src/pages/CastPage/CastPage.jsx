import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import noImagePhoto from '../../images/no-img.jpg';
import { Loader } from '../../components/Loader/Loader';
import styles from '../CastPage/CastPage.module.css';

const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
const noInfoMessage = "We don't have any information.";

const CastPage = () => {
  const cast = useFetchMoviesCast();

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {cast === null && <Loader />}
        {cast !== null && cast.length < 0 && noInfoMessage}
        {cast !== null &&
          cast.length > 0 &&
          cast.map(({ id, name, character, profile_path: img }) => {
            const imageUrl =
              img === null ? noImagePhoto : `${basePosterUrl}${img}`;
            return (
              <li className={styles.item} key={id}>
                <img className={styles.img} src={imageUrl} alt={name} />
                <p className={styles.name}>{name}</p>
                <p className={styles.character}>{character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

CastPage.defaultProps = {
  array: [],
};

export default CastPage;

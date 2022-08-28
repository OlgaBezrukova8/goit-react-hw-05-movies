import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import noImagePhoto from '../../images/no-img.jpg';
import { Loader } from '../../components/Loader/Loader';

const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
const noInfoMessage = "We don't have any information.";

const CastPage = () => {
  const cast = useFetchMoviesCast();

  return (
    <div>
      <ul>
        {cast === null && <Loader />}
        {cast !== null && cast.length < 0 && noInfoMessage}
        {cast !== null && cast.length > 0 &&
          cast.map(({ id, name, character, profile_path: img }) => {
            const imageUrl =
              img === null ? noImagePhoto : `${basePosterUrl}${img}`;
            return (
              <li key={id}>
                <img src={imageUrl} alt={name} />
                <p>{name}</p>
                <p>{character}</p>
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

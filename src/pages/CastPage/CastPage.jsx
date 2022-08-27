import { useFetchMoviesCast } from '../../hooks/useFetchMoviesCast';
import noImagePhoto from '../../images/no-img.jpg';

const basePosterUrl = 'https://image.tmdb.org/t/p/w500';
const noInfoMessage = "We don't have any information.";

const CastPage = () => {
  const cast = useFetchMoviesCast();

  return (
    <div>
      <ul>
        {cast
          ? cast.map(({ id, name, character, profile_path: img }) => {
              const imageUrl =
                img === null ? noImagePhoto : `${basePosterUrl}${img}`;
              return (
                <li key={id}>
                  <img src={imageUrl} alt={name} />
                  <p>{name}</p>
                  <p>{character}</p>
                </li>
              );
            })
          : noInfoMessage}
      </ul>
    </div>
  );
};

CastPage.defaultProps = {
  array: [],
};

export default CastPage;

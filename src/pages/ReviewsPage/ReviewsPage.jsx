import { useFetchMoviesReviews } from '../../hooks/useFetchMoviesReviews';
import { ReviewsList } from '../../components/Reviews/ReviewsList/ReviewsList';
import { Loader } from '../../components/Loader/Loader';
import styles from '../ReviewsPage/ReviewsPage.module.css';

const ReviewsPage = () => {
  const reviews = useFetchMoviesReviews();
  const noInfoMessage = "We don't have any reviews for this movie.";

  return (
    <div className={styles.box}>
      <ul className={styles.list}>
        {reviews === null && <Loader />}
        {reviews !== null && reviews.length < 0 && noInfoMessage}
        {reviews !== null && reviews.length > 0 && (
          <ReviewsList array={reviews} />
        )}
      </ul>
    </div>
  );
};

export default ReviewsPage;

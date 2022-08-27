import { useFetchMoviesReviews } from '../../hooks/useFetchMoviesReviews';
import { ReviewsList } from '../../components/Reviews/ReviewsList/ReviewsList';

const ReviewsPage = () => {
  const reviews = useFetchMoviesReviews();
  const error = "We don't have any reviews for this movie.";

  return (
    <div>
      <ul>{reviews.length > 0 ? <ReviewsList array={reviews} /> : error}</ul>
    </div>
  );
};

export default ReviewsPage;

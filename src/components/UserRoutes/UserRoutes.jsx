// import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Loader } from '../Loader/Loader';

// const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
// const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'));
// const MovieDetailsPage = lazy(() =>
//   import('../../pages/MovieDetailsPage/MovieDetailsPage')
// );
// const CastPage = lazy(() => import('../../pages/CastPage/CastPage'));
// const ReviewsPage = lazy(() => import('../../pages/ReviewsPage/ReviewsPage'));
// const NotFoundPage = lazy(() =>
//   import('../../pages/NotFoundPage/NotFoundPage')
// );

import { HomePage } from '../../pages/HomePage/HomePage';
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage';
import { MovieDetailsPage } from '../../pages/MovieDetailsPage/MovieDetailsPage';
import { CastPage } from '../../pages/CastPage/CastPage';
import { ReviewsPage } from '../../pages/ReviewsPage/ReviewsPage';
import { NotFoundPage } from '../../pages/NotFoundPage/NotFoundPage';

export const UserRoutes = () => {
  return (
    // <Suspense
    //   fallback={
    //     <div>
    //       <Loader />
    //     </div>
    //   }
    // >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviesPage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    // </Suspense>
  );
};

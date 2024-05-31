import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react';
import React from 'react';
import HomePage from '../Pages/HomePage/Homepage';
import  Layout  from '../Pages/Layout/Layout';
import CatalogPage from 'Pages/CatalogPage/CatalogPage';
import FavoritesPage from 'Pages/FavoritesPage/FavoritesPage';
import NotFoundPage from 'Pages/NotFoundPage/NotFoundPage';

// const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
// const CastPage = lazy(() => import('Pages/Cast/CastPage'));
// const ReviewsPage = lazy(() => import('Pages/Reviews/ReviewsPage'));
// const MoviesPage = lazy(() => import('Pages/Movies/MoviesPage'));
// const NotFoundPage = lazy(() => import('../Pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <h1>dfg</h1>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route index element={<HomePage />} />
    //     <Route path="/catalog" element={<CatalogPage />} >
    //       </Route>
    //       <Route path="/favorites" element={<FavoritesPage />} />
    //     {/* <Route path="/movies/:id" element={<MovieDetails />}>
    //       <Route path="cast" element={<CastPage />} />
    //       <Route path="reviews" element={<ReviewsPage />} />
    //     </Route> */}
    //     <Route path="*" element={<NotFoundPage />} />
    //   </Route>
    // </Routes>
  );
};

export default App;
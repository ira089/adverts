import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import React from 'react';
import Home from '../Pages/HomePage/Home';
import  Layout  from '../Pages/Layout/Layout';

const CatalogPage = lazy(() => import('../Pages/CatalogPage/CatalogPage'));
const FavoritesPage = lazy(() => import('../Pages/FavoritesPage/FavoritesPage'))

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<CatalogPage />} >
          </Route>
          <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Home />}/>
      </Route>
    </Routes>
  );
};

export default App;
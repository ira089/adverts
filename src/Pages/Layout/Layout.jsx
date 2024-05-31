import React from 'react'
import { Suspense } from 'react';
import Header from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';


 const Layout = () => {
  return (
    <div >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout
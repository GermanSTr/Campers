import React, { Suspense } from 'react';
import Spinner from '../Spinner/Spinner';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <div>
        <Header />
        <main style={{ minHeight: '100%' }}>
          <Outlet />
        </main>
      </div>
    </Suspense>
  );
};

export default SharedLayout;

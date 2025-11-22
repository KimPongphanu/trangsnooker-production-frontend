// src/App.jsx

import React, { useEffect } from 'react';
import MainLayout from './components/Layout/MainLayout';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;

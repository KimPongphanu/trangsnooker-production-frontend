import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

// 1. Import Component
import App from './App.jsx'; // 💡 App.jsx ต้องมี MainLayout + Outlet
import HomePage from './pages/HomePage.jsx';
import SnookerPage from './pages/SnookerPage.jsx'; // 💡 เปลี่ยนเป็น .jsx
import ArticlePage from './pages/ArticlePage.tsx';
import ArticleDetailPage from './pages/ArticleDetailPage.tsx';
import SnookerDetailPage from './pages/SnookerDetailPage.tsx';
import NotFoundPage from './components/NotFound404Page.tsx';
import AboutPage from './pages/AboutPage.tsx';
import './index.css';

// 2. สร้าง "แผนที่" (Router)
const router = createBrowserRouter([
  {
    path: '/', // Path หลัก
    element: <App />, // 💡 ใช้ App เป็น Layout Parent
    children: [
      {
        index: true, // 💡 เมื่อเข้า URL / ให้แสดง
        element: <HomePage />,
      },
      // {
      //   path: 'home', // หรือใช้ path: 'home' แล้ว redirect '/' ไป 'home' ใน App
      //   element: <HomePage />,
      // },
      {
        path: 'snooker_table', // 💡 Route ย่อย
        element: <SnookerPage />,
      },
      {
        path: 'article',
        element: <ArticlePage />,
      },
      {
        path: 'article/:articleSlug',
        element: <ArticleDetailPage />,
      },
      {
        path: 'snooker_table/:snookerSlug',
        element: <SnookerDetailPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

// 3. เปลี่ยนจาก <App /> เป็น <RouterProvider />
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

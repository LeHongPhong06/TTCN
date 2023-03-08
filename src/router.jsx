import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import Admin from './pages/Admin';
import AdminHomePage from './pages/Admin/components/pages/Home';
import AdminListNewsPage from './pages/Admin/components/pages/ListNewsPage';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: 'home',
        element: <AdminHomePage />,
      },
      {
        path: 'liststudents',
        element: <AdminListStudentPage />,
      },
      {
        path: 'listnews',
        element: <AdminListNewsPage />,
      },
    ],
  },
]);
export default router;

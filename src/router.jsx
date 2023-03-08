import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import './index.css';
import Admin from './pages/Admin';
import AdminHomePage from './pages/Admin/components/pages/Home/Home';
import AdminListNewsPage from './pages/Admin/components/pages/ListNews/ListNewsPage';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent/ListStudent';
import AdminTraningpointsPage from './pages/Admin/components/pages/TraningPoints/Traningpoints';
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
        path: '',
        element: <AdminHomePage />,
      },
      {
        path: 'students',
        element: <AdminListStudentPage />,
      },
      {
        path: 'news',
        element: <AdminListNewsPage />,
      },
      {
        path: 'trainingpoints',
        element: <AdminTraningpointsPage />,
      },
    ],
  },
]);
export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import './index.css';
import Admin from './pages/Admin';
import AdminHomePage from './pages/Admin/components/pages/Home';
import AdminListNewsPage from './pages/Admin/components/pages/ListNewsPage';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent';
import AdminLoginPage from './pages/Admin/components/pages/Login/Login';
import AdminStatisticalPage from './pages/Admin/components/pages/Statistical/Statistical';
import AdminTraningPointsPage from './pages/Admin/components/pages/TrainingPoints/TrainingPoint';
import HomePage from './pages/User/pages/HomePage/Home';
import HomePageStudent from './pages/User/pages/HomePageStudent/HomePageStudent';
import PersonalInformationStudent from './pages/User/pages/PersonalInformation';
import LayoutPageStudent from './pages/User/pages/LayoutPageStudent/LayoutPageStudent';
const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/student',
    element: <LayoutPageStudent />,
    children: [
      {
        path: '',
        element: <HomePageStudent />,
      },
      {
        path: 'infor',
        element: <PersonalInformationStudent />,
      },
    ],
  },
  // Admin
  {
    path: 'admin/login',
    element: <AdminLoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AdminHomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'students',
        element: <AdminListStudentPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'statistical',
        element: <AdminStatisticalPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'trainingpoints',
        element: <AdminTraningPointsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'listnews',
        element: <AdminListNewsPage />,
      },
    ],
  },
]);
export default router;

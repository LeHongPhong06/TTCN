import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import './index.css';
import Admin from './pages/Admin';
import AdminChangePasswordPage from './pages/Admin/components/pages/ChangePassword/ChangePassword';
import AdminHomePage from './pages/Admin/components/pages/Home/Home';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent/ListStudent';
import AdminLoginPage from './pages/Admin/components/pages/Login/Login';
import {
  default as ATTTSpecialized,
  default as CNPMSpecialized,
  default as CNTTSpecialized,
  default as HTTTSpecialized,
  default as MMTSpecialized,
  default as TTNTSpecialized,
  default as TTSpecialized
} from './pages/Admin/components/pages/Statistical/specialized/CNTT/CNTTSpecialized';
import AdminStatisticalPage from './pages/Admin/components/pages/Statistical/Statistical';
import AdminTraningPointsPage from './pages/Admin/components/pages/TrainingPoints/TrainingPoint';
import HomePage from './pages/User/pages/HomePage/Home';
import HomePageStudent from './pages/User/pages/HomePageStudent/HomePageStudent';
import LayoutPageStudent from './pages/User/pages/LayoutPageStudent/LayoutPageStudent';
import PersonalInformationStudent from './pages/User/pages/PersonalInformation/PersonalInformationStudent';

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
        children: [
          {
            path: ':specialized/chart/1',
            element: <CNTTSpecialized />,
          },
          {
            path: ':specialized/chart/2',
            element: <CNPMSpecialized />,
          },
          {
            path: ':specialized/chart/3',
            element: <HTTTSpecialized />,
          },
          {
            path: ':specialized/chart/4',
            element: <ATTTSpecialized />,
          },
          {
            path: ':specialized/chart/5',
            element: <MMTSpecialized />,
          },
          {
            path: ':specialized/chart/6',
            element: <TTSpecialized />,
          },
          {
            path: ':specialized/chart/7',
            element: <TTNTSpecialized />,
          },
        ],
      },
      {
        path: 'trainingpoints',
        element: <AdminTraningPointsPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'changepassword',
        element: <AdminChangePasswordPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
export default router;

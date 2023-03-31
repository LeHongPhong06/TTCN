import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import Admin from './pages/Admin';
import AdminAuthorizationPage from './pages/Admin/components/pages/Authorization/AdminAuthorizationPage';
import AdminChangePasswordPage from './pages/Admin/components/pages/ChangePassword/ChangePassword';
import AdminClassesPage from './pages/Admin/components/pages/Classes/AdminClassesPage';
import AdminPageClassificationPage from './pages/Admin/components/pages/Classification/AdminPageClassification';
import AdminHomePage from './pages/Admin/components/pages/Home/Home';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent/ListStudent';
import AdminLoginPage from './pages/Admin/components/pages/Login/Login';
import AdminSemestersPage from './pages/Admin/components/pages/Semesters/AdminSemestersPage';
import HomePage from './pages/User/pages/HomePage/Home';
import HomePageStudent from './pages/User/pages/HomePageStudent/HomePageStudent';
import LayoutPageStudent from './pages/User/pages/LayoutPageStudent/LayoutPageStudent';
import PersonalInformationStudent from './pages/User/pages/PersonalInformation/PersonalInformationStudent';
import PointPageStudent from './pages/User/pages/PointPageStudent/PointPageStudent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  // Student routes
  {
    path: '/student',
    element: <LayoutPageStudent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <HomePageStudent />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'infor',
        element: <PersonalInformationStudent />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'points',
        element: <PointPageStudent />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  // Admin routes
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
        path: 'classes',
        element: <AdminClassesPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'semesters',
        element: <AdminSemestersPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'classification',
        element: <AdminPageClassificationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'authorization',
        element: <AdminAuthorizationPage />,
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

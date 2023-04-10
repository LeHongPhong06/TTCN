import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from './components/Error/ErrorPage';
import Admin from './pages/Admin';
import AdminAuthorizationPage from './pages/Admin/components/pages/Authorization';
import AdminChangePasswordPage from './pages/Admin/components/pages/ChangePassword';
import AdminClassesPage from './pages/Admin/components/pages/Classes';
import AdminCoursePage from './pages/Admin/components/pages/Course';
import AdminHomePage from './pages/Admin/components/pages/Home';
import AdminListStudentPage from './pages/Admin/components/pages/ListStudent';
import AdminLoginPage from './pages/Admin/components/pages/Login';
import AdminMajorPage from './pages/Admin/components/pages/Major';
import AdminPointTermPage from './pages/Admin/components/pages/Point_Term';
import AdminSemestersPage from './pages/Admin/components/pages/Semesters';
import ChangePasswordPage from './pages/User/pages/ChangePasswordPage';
import DeclareInformationPage from './pages/User/pages/DeclareInformation';
import ForgotPasswordPage from './pages/User/pages/ForgotPassword';
import HomePage from './pages/User/pages/HomePage';
import HomePageStudent from './pages/User/pages/HomeStudentPage';
import LayoutPageStudent from './pages/User/pages/LayoutStudentPage';
import PersonalInformationStudent from './pages/User/pages/PersonalInformationPage';
import PointPageStudent from './pages/User/pages/PointPageStudent';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/forgotpassword',
    element: <ForgotPasswordPage />,
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
      {
        path: 'declare',
        element: <DeclareInformationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'changepassword',
        element: <ChangePasswordPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  // Admin routes
  {
    path: '/auth/admin',
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
        path: 'courses',
        element: <AdminCoursePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'authorization',
        element: <AdminAuthorizationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'major',
        element: <AdminMajorPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: 'points',
        element: <AdminPointTermPage />,
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

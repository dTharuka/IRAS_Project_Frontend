import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../layouts/full/shared/loadable/Loadable';

/* ***Layouts**** */
const FullLayout = Loadable(lazy(() => import('../layouts/full/FullLayout')));
const BlankLayout = Loadable(lazy(() => import('../layouts/blank/BlankLayout')));

/* ****Pages***** */
const Dashboard = Loadable(lazy(() => import('../views/dashboard/Dashboard')));
const SignIn = Loadable(lazy(() => import('../views/sign-in/SignIn')));
const SignUp = Loadable(lazy(() => import('../views/sign-up/SignUp')));
const ViewProfile = Loadable(lazy(() => import('../views/view-profile/ViewProfile.JS')));
const Chart_1 = Loadable(lazy(() => import('../views/dashboard/Chart_1')));
const Chart_2 = Loadable(lazy(() => import('../views/dashboard/Chart_2')));
const Chart_3 = Loadable(lazy(() => import('../views/dashboard/Chart_3')));
const SamplePage = Loadable(lazy(() => import('../views/sample-page/SamplePage')));
const Icons = Loadable(lazy(() => import('../views/icons/Icons')));

// const TypographyPage = Loadable(lazy(() => import('../views/utilities/TypographyPage')));
// const Shadow = Loadable(lazy(() => import('../views/utilities/Shadow')));
const Error = Loadable(lazy(() => import('../views/authentication/Error')));
const Login = Loadable(lazy(() => import('../views/authentication/Login')));



const Router = [
  {
    path: '/dashboard',
    element: <FullLayout />,
    children: [
      { path: '', element: <Navigate to="/dashboard" /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'chartOne', element: <Chart_1 /> },
      { path: 'chartTwo', element: <Chart_2 /> },
      { path: 'chartThree', element: <Chart_3 /> },
      { path: 'view-profile', element: <ViewProfile /> },
      { path: 'sample-page', element: <SamplePage /> },
      { path: 'icons', element: <Icons /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
  {
    path:'/',
    element: <BlankLayout />,
    children: [
      { path: '/', element: <Navigate to="/sign-in" /> },
      { path: '/sign-in', exact: true, element: <SignIn /> },
      { path: '/sign-up', exact: true, element: <SignUp /> },
    ],
  },
  {
    path: '/auth',
    element: <BlankLayout />,
    children: [
      { path: '404', element: <Error /> },
      { path: '/auth/login', element: <Login /> },
      { path: '*', element: <Navigate to="/auth/404" /> },
    ],
  },
];

export default Router;

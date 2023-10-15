import React, { lazy, Suspense } from 'react';

const Content = lazy(() => import('./App'));
const About = lazy(() => import('./components/about'));
const History = lazy(() => import('./components/history'));
const Details = lazy(() => import('ExampleRemoteDetails/Details'));

const routes = [
  {
    path: '/',
    element: <Content />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/history',
    element: <History />,
    children: [
      {
        path: 'details',
        element: <Suspense fallback={<div>Ładowanie Details...</div>}><Details /></Suspense>,
      }
    ]
  },
  {
    path: '/details',
    element: <Suspense fallback={<div>Ładowanie Details...</div>}><Details /></Suspense>,
  }
];

export default routes
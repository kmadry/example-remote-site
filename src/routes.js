import React, {lazy} from 'react';

const Content = lazy(() => import('./App'));
const About = lazy(() => import('./components/about'));
const History = lazy(() => import('./components/history'));
const Products = lazy(() => import('./components/products'));

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
    element: <History />
  },
  {
    path: '/products',
    element: <Products />
  },
];

export default routes;
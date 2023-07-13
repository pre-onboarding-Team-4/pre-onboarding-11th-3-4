import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { Header } from './components/Title';

const route = [
  {
    element: <Header />,
    children: [
      {
        path: '',
        element: <Home />,
        errorElement: <div>error</div>,
      },
      {
        path: 'issues/:id',
        element: <Detail />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;

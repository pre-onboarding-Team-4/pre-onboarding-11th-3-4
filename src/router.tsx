import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import IssuePage from './pages/IssuePage';

const route = [
  {
    path: '',
    element: <Home />,
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <IssuePage />,
  },
];

const router = createBrowserRouter(route);

export default router;

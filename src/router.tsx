import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

const route = [
  {
    path: '',
    element: <Home />,
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <div>issue</div>,
  },
];

const router = createBrowserRouter(route);

export default router;

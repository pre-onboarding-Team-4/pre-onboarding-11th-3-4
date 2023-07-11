import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const route = [
  {
    path: '',
    element: <div>issue list</div>,
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <div>issue</div>,
  },
];

const router = createBrowserRouter(route);

export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import IssueList from './pages/issueList';

const route = [
  {
    path: '',
    element: <IssueList />,
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <div>issue</div>,
  },
];

const router = createBrowserRouter(route);

export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';

const route = [
  {
    path: '',
    element: <IssueList />,
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <IssueDetail />,
  },
];

const router = createBrowserRouter(route);

export default router;

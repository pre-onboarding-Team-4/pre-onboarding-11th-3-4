import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';
import Error from './pages/Error';

const route = [
  {
    path: '',
    element: <IssueList />,
    errorElement: <Error />,
  },
  {
    path: 'issues/:id',
    element: <IssueDetail />,
  },
];

const router = createBrowserRouter(route);

export default router;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CommonLayout from './components/CommonLayout';
import IssueDetailPage from './pages/IssueDetailPage';
import IssueListPage from './pages/IssueListPage';
import Error from './components/Error';

const route = [
  {
    path: '',
    element: <CommonLayout />,
    errorElement: <Error message="Not Found Page" />,
    children: [
      {
        path: '',
        element: <IssueListPage />,
      },
      {
        path: 'issues/:id',
        element: <IssueDetailPage />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;

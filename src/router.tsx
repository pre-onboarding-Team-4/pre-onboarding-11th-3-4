import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CommonPage from './pages/CommonPage';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';
import Error from './components/Error';

const route = [
  {
    path: '',
    element: <CommonPage />,
    errorElement: <Error />,
    children: [
      { path: '', element: <IssueListPage /> },
      { path: 'issues/:id', element: <IssueDetailPage /> },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;

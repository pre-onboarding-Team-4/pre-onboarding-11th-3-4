import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import CommonPage from './pages/CommonPage';
import IssueListPage from './pages/IssueListPage';
import IssueDetailPage from './pages/IssueDetailPage';

const route = [
  {
    path: '',
    element: <CommonPage />,
    errorElement: <div>error</div>,
    children: [
      { path: '', element: <IssueListPage /> },
      { path: 'issues/:id', element: <IssueDetailPage /> },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;

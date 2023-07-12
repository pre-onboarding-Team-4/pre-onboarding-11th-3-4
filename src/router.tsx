import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { IssueProvider } from './IssueContext';

const route = [
  {
    path: '',
    element: (
      <IssueProvider>
        <Home />
      </IssueProvider>
    ),
    errorElement: <div>error</div>,
  },
  {
    path: 'issues/:id',
    element: <Detail />,
  },
];

const router = createBrowserRouter(route);

export default router;

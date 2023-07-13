import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import { IssueProvider } from './context/IssueContext';
import { DetailProvider } from './context/detailContext';

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
    element: (
      <DetailProvider>
        <Detail />,
      </DetailProvider>
    ),
  },
];

const router = createBrowserRouter(route);

export default router;

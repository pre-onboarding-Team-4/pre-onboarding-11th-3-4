import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import IssueList from './pages/IssueList';
import IssueDetail from './pages/IssueDetail';
import Error from './components/Error';
import CommonLayout from './components/CommonLayout';
import Header from './components/Header';
import Footer from './components/Footer';

const route = [
  {
    path: '',
    element: <CommonLayout />,
    errorElement: (
      <>
        <Header />
        <Error />
        <Footer />
      </>
    ),
    children: [
      {
        path: '',
        element: <IssueList />,
      },
      {
        path: 'issues/:id',
        element: <IssueDetail />,
      },
    ],
  },
];

const router = createBrowserRouter(route);

export default router;

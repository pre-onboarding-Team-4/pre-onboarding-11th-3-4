import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { IssueListProvider } from './context/IssueListProvider';
import { IssueDetailProvider } from './context/IssueDetailProvider';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <IssueListProvider>
      <IssueDetailProvider>
        <App />
      </IssueDetailProvider>
    </IssueListProvider>
  </React.StrictMode>,
);

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
import IssuesContextProvider from './IssuesContextProvider';
import IssueContextProvider from './contexts/IssueContextProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <IssuesContextProvider>
        <IssueContextProvider>
          <RouterProvider router={router} />
        </IssueContextProvider>
      </IssuesContextProvider>
    </>
  );
}

export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
import IssuesContextProvider from './contexts/IssuesContextProvider';

function App() {
  return (
    <>
      <GlobalStyle />
      <IssuesContextProvider>
        <RouterProvider router={router} />
      </IssuesContextProvider>
    </>
  );
}

export default App;

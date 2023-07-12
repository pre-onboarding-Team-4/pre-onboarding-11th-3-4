import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
import { IssueProvider } from './context/IssueContext';

// const StyledApp = styled.div`
//   color: ${palette.text};
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <IssueProvider>
        <RouterProvider router={router} />
      </IssueProvider>
    </>
  );
}

export default App;

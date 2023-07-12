import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
import { IssueContextProvider } from './context/issueContext';

// const StyledApp = styled.div`
//   color: ${palette.text};
// `;

function App() {
  return (
    <>
      <IssueContextProvider>
        <GlobalStyle />
        <RouterProvider router={router} />
      </IssueContextProvider>
    </>
  );
}

export default App;

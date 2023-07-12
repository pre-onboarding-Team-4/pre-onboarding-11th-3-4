import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
import { IsssuesProvier } from './context/IssuesProvider';

// const StyledApp = styled.div`
//   color: ${palette.text};
// `;

function App() {
  return (
    <IsssuesProvier>
      <GlobalStyle />
      <RouterProvider router={router} />
    </IsssuesProvier>
  );
}

export default App;

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';

// const StyledApp = styled.div`
//   color: ${palette.text};
// `;

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

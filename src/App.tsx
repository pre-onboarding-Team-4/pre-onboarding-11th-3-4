import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { GlobalStyle } from './GlobalStyle';
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;

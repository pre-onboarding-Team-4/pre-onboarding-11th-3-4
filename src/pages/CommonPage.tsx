import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function CommonPage() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
export default CommonPage;

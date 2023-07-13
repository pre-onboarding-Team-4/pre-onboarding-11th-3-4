import React from 'react';
import { Outlet } from 'react-router-dom';

export default function CommonLayout() {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  if (!owner || !repo) throw new Error('요구하는 환경 변수가 선언됐는지 확인해주세요');

  return (
    <>
      Header
      {owner}, {repo}
      <Outlet />
    </>
  );
}

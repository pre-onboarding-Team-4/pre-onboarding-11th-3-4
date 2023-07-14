import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { palette } from '../palette';
import { styled } from 'styled-components';

export default function CommonLayout() {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  if (!owner || !repo) throw new Error('요구하는 환경 변수가 선언됐는지 확인해주세요');

  return (
    <>
      <StyledHeader>
        <a href="/">
          <h1>
            {owner} / {repo}
          </h1>
        </a>
      </StyledHeader>
      <Outlet />
      <ScrollRestoration />
    </>
  );
}

const StyledHeader = styled.header`
  width: fit-content;
  padding: 10px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 80%, ${palette.blue} 15%);
`;

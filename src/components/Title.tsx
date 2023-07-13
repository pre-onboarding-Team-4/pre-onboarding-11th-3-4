import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Title = styled.h1`
  text-align: center;
`;

export function Header() {
  return (
    <>
      <Title>facebook/react</Title>
      <Outlet />
    </>
  );
}

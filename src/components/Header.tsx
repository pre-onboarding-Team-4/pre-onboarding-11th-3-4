import React from 'react';
import styled from 'styled-components';

const Header = ({ organization, repo }: { organization: string; repo: string }) => {
  return (
    <Title>
      {organization} / {repo}
    </Title>
  );
};

export default Header;

const Title = styled.h1`
  text-align: center;
  margin: 16px 0;
`;

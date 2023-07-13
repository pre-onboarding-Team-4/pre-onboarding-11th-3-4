import React from 'react';
import { styled } from 'styled-components';

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <StyledError>
      <h2>{message}</h2>
    </StyledError>
  );
}

const StyledError = styled.div`
  width: inherit;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

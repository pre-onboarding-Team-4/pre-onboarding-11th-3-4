import React from 'react';
import { styled } from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';

interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps) {
  return (
    <StyledError>
      <h2>
        <AiFillGithub />
        {message}
      </h2>
    </StyledError>
  );
}

const StyledError = styled.div`
  top: 100px;
  left: 0;
  position: absolute;
  width: 100%;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
`;

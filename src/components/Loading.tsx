import React from 'react';
import { keyframes, styled } from 'styled-components';
import { palette } from '../palette';

export default function Loading() {
  return <StyledLoading></StyledLoading>;
}

const SpinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  border-radius: 50%;
  width: 10%;
  aspect-ratio: 1/1;
  border: 10px solid ${palette.white};
  border-top-color: ${palette.blue};
  animation: ${SpinAnimation} 1s infinite linear;
`;

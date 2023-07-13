import React from 'react';
import styled, { keyframes } from 'styled-components';

function LoadSpinner() {
  return <LoadingSpinner />;
}

const color = 'grey';
const size = '30px';
const speed = '0.75s';
const thickness = '5px';

const rotateForever = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  animation-duration: ${speed};
  animation-iteration-count: infinite;
  animation-name: ${rotateForever};
  animation-timing-function: linear;
  width: ${size};
  height: ${size};
  border: ${thickness} solid ${color};
  border-right-color: transparent;
  border-radius: 50%;
  display: inline-block;
`;

export default LoadSpinner;

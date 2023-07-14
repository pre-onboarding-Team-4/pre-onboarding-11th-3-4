import React from 'react';
import styled from 'styled-components';
import { palette } from '../palette';

function AdBlock() {
  const navigateWanted = () => {
    window.location.href = 'https://www.wanted.co.kr/';
  };

  return (
    <AdBlockContainer onClick={navigateWanted}>
      <img
        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
        alt="wantedImage"
      />
    </AdBlockContainer>
  );
}

const AdBlockContainer = styled.div`
  cursor: pointer;
  display: flex;
  border-bottom: 0.5px solid ${palette.grey};
  padding: 10px 0;
  justify-content: center;
`;

export default AdBlock;

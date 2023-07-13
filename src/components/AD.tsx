import React from 'react';
import { styled } from 'styled-components';

interface ADProps {
  index: number;
}

const AD: React.FC<ADProps> = ({ index }) => {
  if ((index + 1) % 5 === 0) {
    return (
      <Container>
        <ADImage
          src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
          key={`ad-${index}`}
        />
      </Container>
    );
  }

  return null;
};

export default AD;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid black;
`;

const ADImage = styled.img`
  width: 200px;
  height: auto;
`;

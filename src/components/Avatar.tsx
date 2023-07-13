import React from 'react';
import styled from 'styled-components';

const Avatar = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <Root>
      <img src={url} alt={alt} />
    </Root>
  );
};

const Root = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default Avatar;

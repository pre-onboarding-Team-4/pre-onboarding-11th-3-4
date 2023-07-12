import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Root>
      <img src="/assets/svg/loading.svg" alt="" />
    </Root>
  );
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default Loading;

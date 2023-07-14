import React from 'react';
import styled from 'styled-components';

type ErrorProps = {
  message?: string;
};

function Error({ message = 'Error! This is not the webpage you are looking for.' }: ErrorProps) {
  return (
    <ErrorContainer>
      <img
        src="https://media.licdn.com/dms/image/D4D12AQEtqlEK0dq1vg/article-cover_image-shrink_600_2000/0/1658685948954?e=2147483647&v=beta&t=uz1A7IbQofPDzcsrB_YcD0BhcauXET_-KOZjO2-FrL4"
        alt="githubError"
      />
      <p>{message}</p>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    margin-top: 30px;
  }
  font-size: 30px;
`;

export default Error;

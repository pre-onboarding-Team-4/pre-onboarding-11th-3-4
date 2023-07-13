import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';

function Error() {
  return (
    <ErrorContainer>
      <Header />
      <img
        src="https://media.licdn.com/dms/image/D4D12AQEtqlEK0dq1vg/article-cover_image-shrink_600_2000/0/1658685948954?e=2147483647&v=beta&t=uz1A7IbQofPDzcsrB_YcD0BhcauXET_-KOZjO2-FrL4"
        alt="githubError"
      />
      <p>Error! This is not the webpage you are looking for.</p>
      <Footer />
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
`;

export default Error;

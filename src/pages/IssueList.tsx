import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useIssues } from '../hooks/useIssues';
import IssueBlock from '../components/IssueBlock';
import AdBlock from '../components/AdBlock';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import LoadSpinner from '../components/LoadSpinner';
import styled from 'styled-components';

function IssueList() {
  const { issueList: data, fetchIssues, fetchMoreIssues, isLoading } = useIssues();
  const target = useRef(null);
  const [page, setPage] = useState(1);

  const [observe] = useIntersectionObserver(() => {
    setPage((page) => page + 1);
  });

  useEffect(() => {
    fetchIssues();
    setPage(page + 1);
    observe(target.current);
  }, []);

  useEffect(() => {
    if (!isLoading) fetchMoreIssues();
  }, [page]);

  return (
    <>
      <Header />
      {isLoading && data.length === 0 && (
        <CenterLoadContainer>{isLoading && <LoadSpinner />}</CenterLoadContainer>
      )}
      {data.map((issue, index) => {
        if ((index + 1) % 4 !== 0) return <IssueBlock key={issue.id} issue={issue} />;
        else
          return (
            <>
              <IssueBlock key={issue.id} issue={issue} />
              <AdBlock />
            </>
          );
      })}
      <FooterLoadContainer>{isLoading && data.length !== 0 && <LoadSpinner />}</FooterLoadContainer>
      <Footer ref={target} />
    </>
  );
}

const CenterLoadContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  margin-top: -35px;
`;

const FooterLoadContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default IssueList;

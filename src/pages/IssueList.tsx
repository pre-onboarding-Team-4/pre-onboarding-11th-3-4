import React, { Fragment, useEffect, useRef, useState } from 'react';
import { useIssues } from '../hooks/useIssues';
import IssueBlock from '../components/IssueBlock';
import AdBlock from '../components/AdBlock';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import LoadSpinner from '../components/LoadSpinner';
import styled from 'styled-components';
import ErrorComp from '../components/Error';
import { AxiosError } from 'axios';

function IssueList() {
  const {
    issueList: data,
    isEnd,
    countLoading,
    fetchIssues,
    fetchMoreIssues,
    fetchIssueCount,
    isLoading,
  } = useIssues();
  const target = useRef(null);
  const [page, setPage] = useState(1);

  const [observe] = useIntersectionObserver(() => {
    setPage((page) => page + 1);
  });

  const tryToFetchData = async (func: () => void) => {
    try {
      await func();
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message ?? 'Sorry, Unknown Error');
      } else {
        setError('Sorry, Unknown error');
      }
    }
  };

  useEffect(() => {
    tryToFetchData(fetchIssueCount);
    tryToFetchData(fetchIssues);
    setPage(page + 1);
    observe(target.current);
  }, []);

  useEffect(() => {
    if (!countLoading && !isLoading && !isEnd) {
      tryToFetchData(fetchMoreIssues);
    }
  }, [page]);

  const [error, setError] = useState('');

  if (error) {
    return (
      <>
        <ErrorComp message={error} />
      </>
    );
  }

  return (
    <>
      {isLoading && data.length === 0 && (
        <CenterLoadContainer>{isLoading && <LoadSpinner />}</CenterLoadContainer>
      )}
      {data?.map((issue, index) => {
        if ((index + 1) % 4 !== 0) return <IssueBlock key={issue.id} issue={issue} />;
        else
          return (
            <Fragment key={issue.id}>
              <IssueBlock issue={issue} />
              <AdBlock />
            </Fragment>
          );
      })}
      <FooterLoadContainer ref={target}>
        {isLoading && data.length !== 0 && <LoadSpinner />}
      </FooterLoadContainer>
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

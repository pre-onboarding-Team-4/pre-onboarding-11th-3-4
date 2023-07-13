import React, { useEffect, useRef, useState } from 'react';
import { useIssues } from '../hooks/useIssues';
import IssueList from '../components/IssueList';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { styled } from 'styled-components';
import Loading from '../components/Loading';

export default function IssueListPage() {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;

  if (!owner || !repo) throw new Error('요구하는 환경 변수가 선언됐는지 확인해주세요');

  const { fetchMoreIssues, fetchIssues, issueList, isLoading } = useIssues();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchIssues();
  }, []);

  const target = useRef(null);

  const { observe, unobserve } = useIntersectionObserver(() => {
    setPage((page) => page + 1);
  });

  useEffect(() => {
    if (!target.current) return;
    observe(target.current);
    return () => {
      if (!target.current) return;
      unobserve(target.current);
    };
  }, []);

  useEffect(() => {
    fetchMoreIssues();
  }, [page]);

  return (
    <StyledIssueListPlage>
      <IssueList issueList={issueList} />
      {isLoading && <Loading />}
      <div style={{ width: '100%', height: 50 }} ref={target} />
    </StyledIssueListPlage>
  );
}

const StyledIssueListPlage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

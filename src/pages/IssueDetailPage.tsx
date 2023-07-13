import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useIssue } from '../hooks/useIssue';
import IssueDetail from '../components/IssueDetail';
import Loading from '../components/Loading';
import { styled } from 'styled-components';

export default function IssueDetailPage() {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;
  const { id } = useParams<{ id: string }>();

  if (!owner || !repo) throw new Error('요구하는 환경 변수가 선언됐는지 확인해주세요');

  const { issue, fetchIssue, isLoading } = useIssue();

  useEffect(() => {
    fetchIssue(Number(id));
  }, []);

  return (
    <StyledIssueDetailPage>
      {!!issue && !isLoading ? <IssueDetail issue={issue} /> : <Loading />}
    </StyledIssueDetailPage>
  );
}

const StyledIssueDetailPage = styled.div`
  display: flex;
  justify-content: center;
`;

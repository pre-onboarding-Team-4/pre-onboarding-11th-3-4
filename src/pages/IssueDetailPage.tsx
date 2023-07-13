import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useIssue } from '../hooks/useIssue';
import IssueDetail from '../components/IssueDetail';
import Loading from '../components/Loading';
import { styled } from 'styled-components';
import ErrorComp from '../components/Error';
import { AxiosError } from 'axios';

export default function IssueDetailPage() {
  const owner = process.env.REACT_APP_OWNER;
  const repo = process.env.REACT_APP_REPO;
  const { id } = useParams<{ id: string }>();

  if (!owner || !repo) throw new Error('요구하는 환경 변수가 선언됐는지 확인해주세요');

  const { issue, fetchIssue, isLoading } = useIssue();

  const [error, setError] = useState('34346344634');

  useEffect(() => {
    (async () => {
      try {
        await fetchIssue(Number(id));
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data.message ?? 'Sorry, Unknown Error');
        } else {
          setError('Sorry, Unknown error');
        }
      }
    })();
  }, []);

  if (error) {
    return (
      <StyledIssueDetailPage>
        <ErrorComp message={error} />
      </StyledIssueDetailPage>
    );
  }

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

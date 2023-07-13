/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useIssues } from '../hooks/useIssues';

const Home = () => {
  const { issueList: issues, isLoading, fetchIssues, fetchMoreIssues } = useIssues();

  const handleScroll = useCallback(() => {
    const { scrollTop, offsetHeight } = document.documentElement;

    console.log(window.innerHeight, scrollTop, offsetHeight);

    if (Math.ceil(window.innerHeight + scrollTop) >= offsetHeight) {
      console.log('end');
      fetchMoreIssues();
    }
  }, [fetchMoreIssues]);

  useEffect(() => {
    fetchIssues();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!issues.length) {
    return <Loading />;
  }

  return (
    <div>
      <Header organization={issues[0].url.split('/')[4]} repo={issues[0].url.split('/')[5]} />
      <IssueList>
        {issues &&
          issues.map((issue, idx) => (
            <Fragment key={issue.number}>
              {idx !== 0 && idx % 4 === 0 && (
                <Ad>
                  <img src="ad.jpeg" />
                </Ad>
              )}
              <StyledLink to={`issues/${issue.number}`}>
                <div>
                  <Title>
                    #{issue.number} {issue.title}
                  </Title>
                  <Flex>
                    <Writer>작성자: {issue.user.login}</Writer>,
                    <CreatedAt>
                      작성일: {new Date(issue.created_at).getFullYear()}년
                      {new Date(issue.created_at).getMonth() + 1}월
                      {new Date(issue.created_at).getDate()}일
                    </CreatedAt>
                  </Flex>
                </div>
                <Comment>코멘트: {issue.comments}</Comment>
              </StyledLink>
            </Fragment>
          ))}
      </IssueList>
      {isLoading && <Loading />}
    </div>
  );
};

const IssueList = styled.div``;

const Ad = styled.div`
  height: 100px;
  border: 1px solid #ccc;
  border-top: transparent;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  border: 1px solid #ccc;

  &:not(:first-child) {
    border-top: transparent;
  }

  & > div {
    &:first-child {
      max-width: 80%;
    }
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
`;

const Comment = styled.div``;

const Flex = styled.div`
  display: flex;
  gap: 0 4px;
  margin-top: 4px;
`;

const Writer = styled.span``;

const CreatedAt = styled.span``;

export default Home;

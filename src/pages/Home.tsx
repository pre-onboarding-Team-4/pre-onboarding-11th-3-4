import React, { useEffect } from 'react';
import styled from 'styled-components';
import { BiMessageAlt } from 'react-icons/bi';
import { useIssues } from '../hooks/useIssues';
import { IssueSchema } from '../types/issuesApi';
import { Link } from 'react-router-dom';
import AD from '../components/AD';
import InfiniteScroll from '../components/InfiniteScroll';

function Times(date: number) {
  let times;
  const time = Math.floor(date / (1000 * 60 * 60)); // 시간
  const day = Math.floor(date / (1000 * 60 * 60 * 24)); // 일
  const year = Math.floor(date / (1000 * 60 * 60 * 24 * 365)); // 년

  if (year > 0) {
    times = `${year}년 전`;
  } else if (day > 0) {
    times = `${day}일 전`;
  } else {
    times = `${time}시간 전`;
  }
  return times;
}

function Home() {
  const { issueList, fetchIssues, isLoading } = useIssues();

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      {issueList?.map((issue: IssueSchema, index: number) => {
        const currentTime = new Date();
        const createdAt = new Date(issue.created_at);
        const timeDifference = currentTime.getTime() - createdAt.getTime();

        return (
          <React.Fragment key={issue.id}>
            <InfiniteScroll>
              <Container>
                <Issues>
                  <Item>
                    <IssueLink to={`/issues/${issue.number}`}>{issue.title}</IssueLink>
                    <OpenedBy>
                      #{issue.number} opened {Times(timeDifference)} by {issue.user.login}
                    </OpenedBy>
                  </Item>
                  <Comment>
                    <BiMessageAlt /> {issue.comments}
                  </Comment>
                </Issues>
              </Container>
              {<AD key={index} index={index} />}
            </InfiniteScroll>
          </React.Fragment>
        );
      })}
      {isLoading && <span>Loading...</span>}
    </>
  );
}

export default Home;

const Container = styled.div`
  border: 1px solid black;
  height: auto;
  padding: 8px;
  &:hover {
    background-color: lightgray;
  }
`;

const Issues = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: block;
  flex: auto;
`;

const IssueLink = styled(Link)`
  font-weight: bold;
`;

const OpenedBy = styled.span`
  font-size: small;
  margin-top: 1px;
  display: flex;
  color: whitegray;
`;

const Comment = styled.div`
  white-space: nowrap;
`;

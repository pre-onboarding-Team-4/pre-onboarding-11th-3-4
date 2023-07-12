import React, { useContext } from 'react';
import { IssueContext } from '../context/IssueContext';
import styled from 'styled-components';
import { BiMessageAlt } from 'react-icons/bi';
import InfiniteScroll from '../components/InfiniteScroll';
import { Issue } from '../apis/issues';

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
  const { issues, isLoading } = useContext(IssueContext);

  return (
    <>
      <Title>facebook/react</Title>
      {isLoading && <div>loading...</div>}
      <InfiniteScroll>
        {issues.map((issue: Issue) => {
          const currentTime = new Date();
          const createdAt = new Date(issue.created_at);
          const timeDifference = currentTime.getTime() - createdAt.getTime();

          return (
            <Issues key={issue.id}>
              <Item>
                <IssueLink>{issue.title}</IssueLink>
                <OpenedBy>
                  #{issue.number} opened {Times(timeDifference)} by {issue.user.login}
                </OpenedBy>
              </Item>
              <Comment>
                <BiMessageAlt /> {issue.comments}
              </Comment>
            </Issues>
          );
        })}
      </InfiniteScroll>
    </>
  );
}

export default Home;

const Title = styled.h1`
  text-align: center;
`;
const Issues = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div``;

const IssueLink = styled.span``;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OpenedBy = styled.span`
  font-size: small;
  margin-top: 1;
  display: flex;
`;

const Comment = styled.div`
  white-space: nowrap;
`;

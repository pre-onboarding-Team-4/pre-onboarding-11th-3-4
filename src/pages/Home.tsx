/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from 'react';
import styled from 'styled-components';
import { getIssues } from '../apis/api';
import Loading from '../components/Loading';
import { useIssues, useIssuesDispatch } from '../context/IssuesProvider';

const Home = () => {
  const issues = useIssues();
  const dispatch = useIssuesDispatch();

  const fetchIssues = async () => {
    try {
      const res = await getIssues();

      if (res.status !== 200) {
        return;
      }

      dispatch({ type: 'GET_ISSUES', payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  if (!issues.length) {
    return <Loading />;
  }

  return (
    <div>
      <HeaderTitle>
        {issues[0].url.split('/')[4]} / {issues[0].url.split('/')[5]}
      </HeaderTitle>
      <IssueList>
        {issues &&
          issues.map((issue: any, idx) => (
            <Item key={idx}>
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
            </Item>
          ))}
      </IssueList>
    </div>
  );
};

const HeaderTitle = styled.h1`
  text-align: center;
  margin: 16px 0;
`;

const IssueList = styled.div``;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
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

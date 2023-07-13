import React from 'react';
import { IssueSchema } from '../types/issuesApi';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { styled } from 'styled-components';
import remarkGfm from 'remark-gfm';

interface IssueDetailProps {
  issue: IssueSchema;
}

export default function IssueDetail({ issue }: IssueDetailProps) {
  return (
    <StyledIssueDetail>
      <StyledHeader>
        <div>
          <h2>
            #{issue.number} {issue.title}
          </h2>
        </div>
        <div>
          11minutes ago{issue.createdAt} ﹒ {issue.comments} comments
        </div>
      </StyledHeader>

      <StyledUser>
        <img src={issue.user.avatar_url} />
        <div>
          <strong>{issue.user.login}</strong>
        </div>
      </StyledUser>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
    </StyledIssueDetail>
  );
}

const StyledIssueDetail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  div:nth-child(2) {
    display: flex;
  }
`;

const StyledUser = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  grid-gap: 10px;

  img {
    border-radius: 50%;
    width: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    align-items: center;
  }
`;

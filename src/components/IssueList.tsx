import React from 'react';
import { IssueListSchema } from '../types/issuesApi';
import { palette } from '../palette';
import { FaComment } from 'react-icons/fa';
import { styled } from 'styled-components';

interface IssueListProps {
  issueList: IssueListSchema;
}

export default function IssueList({ issueList }: IssueListProps) {
  return (
    <StyledIssueList>
      {issueList.map(({ id, title, number, createdAt, user, comments }) => (
        <StyledIssueItem key={id}>
          <div>
            <h3>{title}</h3>#{number} opened {createdAt} by {user.login}
          </div>
          <div>
            <FaComment />
            {comments}
          </div>
        </StyledIssueItem>
      ))}
    </StyledIssueList>
  );
}

const StyledIssueList = styled.ul`
  width: inherit;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledIssueItem = styled.li`
  width: inherit;
  display: grid;
  grid-template-columns: 90% 10%;
  border: 1px solid ${palette.grey100};
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${palette.grey50};
  }

  div:nth-child(2) {
    display: flex;
    gap: 3px;
    justify-content: flex-end;
  }
`;

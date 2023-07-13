import React from 'react';
import { IssueListSchema } from '../types/issuesApi';
import { palette } from '../palette';
import { FaComment } from 'react-icons/fa';
import { styled } from 'styled-components';
import { getFormatPassedDate } from './util';

interface IssueListProps {
  issueList: IssueListSchema;
}
export default function IssueList({ issueList }: IssueListProps) {
  return (
    <StyledIssueList>
      {issueList.map(({ id, title, number, created_at, user, comments }, index) => (
        <>
          <StyledIssueItem key={id}>
            <div>
              <h3>{title}</h3>#{number} opened {getFormatPassedDate(created_at)} by {user.login}
            </div>
            <div>
              <FaComment />
              {comments}
            </div>
          </StyledIssueItem>
          {!((index + 1) % 4) && (
            <StyledAdItem>
              <a href="https://www.wanted.co.kr/ " target="_blank">
                <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
              </a>
            </StyledAdItem>
          )}
        </>
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

const StyledAdItem = styled.li`
  width: inherit;
  text-align: center;
`;

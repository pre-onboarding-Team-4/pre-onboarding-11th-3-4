import React, { Fragment } from 'react';
import { IssueListSchema } from '../types/issuesApi';
import { palette } from '../palette';
import { FaComment } from 'react-icons/fa';
import { styled } from 'styled-components';
import { getFormatPassedDate } from './util';
import { useNavigate } from 'react-router-dom';

interface IssueListProps {
  issueList: IssueListSchema;
}
export default function IssueList({ issueList }: IssueListProps) {
  const navigate = useNavigate();

  return (
    <StyledIssueList>
      {issueList.map(({ id, title, number, created_at, user, comments }, index) => (
        <Fragment key={id}>
          <StyledIssueItem
            key={id}
            onClick={() => {
              navigate(`issues/${number}`);
            }}
          >
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
        </Fragment>
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
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  border: 1px solid ${palette.grey50};

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

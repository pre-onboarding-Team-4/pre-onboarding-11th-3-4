import React, { useCallback, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useIssues } from '../hooks/useIssues';
import { palette } from '../palette';
import { BiMessage } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Home() {
  const { issueList, fetchIssues, fetchMoreIssues, isLoading } = useIssues();
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetchIssues();
  }, []);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        fetchMoreIssues();
      }
    },
    [fetchMoreIssues],
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [handleIntersection]);

  return (
    <>
      {isLoading && issueList.length <= 0 && <p>Loading</p>}
      <section>
        <ol>
          {issueList.length > 0 &&
            issueList.map((issue, index) => (
              <>
                {index !== 0 && index % 4 === 0 && (
                  <Ad>
                    <A href="https://www.wanted.co.kr/jobsfeed" target="_blank">
                      <img
                        src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100"
                        alt="wanted"
                      />
                    </A>
                  </Ad>
                )}
                <Li>
                  <StyledLink to={`issues/${issue.number}`}>
                    <div>
                      <strong>{issue.title}</strong>
                      <Dl>
                        <div>
                          <Dt>이슈 번호</Dt>
                          <Dd>#{issue.number}</Dd>
                        </div>
                        <div>
                          <Dt>상태</Dt>
                          <Dd>opened</Dd>
                        </div>
                        <div>
                          <Dt>작성일</Dt>
                          <Dd>{issue.created_at.slice(0, 10)}</Dd>
                        </div>
                        <div>
                          <Dt>작성자</Dt>
                          <Dd>by {issue.user.login}</Dd>
                        </div>
                      </Dl>
                    </div>

                    <CommentGroup>
                      <BiMessage />
                      <span>{issue.comments}</span>
                    </CommentGroup>
                  </StyledLink>
                </Li>
              </>
            ))}
        </ol>
        {issueList.length > 0 && <Target ref={observerRef}></Target>}
        {isLoading && issueList.length > 0 && <p>Loading</p>}
      </section>
    </>
  );
}

const srOnly = css`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hiDden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

const Li = styled.li``;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${palette.grey};
  border-bottom: 0;
`;

const A = styled.a`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Ad = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border: 1px solid ${palette.grey};
  border-bottom: 0;
`;

const Dl = styled.dl`
  display: flex;
`;

const Dt = styled.dt`
  ${srOnly}
`;

const Dd = styled.dd`
  margin-right: 4px;
`;

const Target = styled.div`
  width: 100%;
  height: 10px;
  border-top: 1px solid ${palette.grey};
`;

const CommentGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;
`;

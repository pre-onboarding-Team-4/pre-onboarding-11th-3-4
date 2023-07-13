import React, { useEffect } from 'react';
import { useIssues } from '../hooks/useIssues';
import { useNavigate } from 'react-router-dom';
import Loading from '../components/Loading';

function IssueListPage() {
  const navigate = useNavigate();
  const { issueList, fetchIssues, fetchMoreIssues, isLoading } = useIssues();

  const getFullYmdStr = (d: Date) => {
    return d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ';
  };

  //console.log(issueList);

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <div>
      {issueList.map(function (list, i) {
        return (
          <>
          <div
            key={list.id}
            onClick={() => {
              navigate(`issues/${list.number}`);
            }}
          >
            <div>
              <h4>#{list.number} {list.title}</h4>
            </div>

            <div>
              <div>
                작성자:{list.user_id} 작성일:{getFullYmdStr(new Date(list.created_at))}
              </div>
              <div>코멘트:{list.comments}</div>
            </div>
          </div>
          {((i+1) % 4 === 0) && (
            <a href="https://www.wanted.co.kr/ " target="_blank">
              <img src="https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100" />
            </a>
          )}
          </>
        );
      })}
      {isLoading && <Loading />}
    </div>
  );
}
export default IssueListPage;

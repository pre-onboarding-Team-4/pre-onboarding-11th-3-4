import React, { useEffect } from 'react';
import { useIssues } from '../hooks/useIssues';
import { useNavigate } from 'react-router-dom';

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
          <div
            key={i}
            onClick={() => {
              navigate(`issues/${list.number}`);
            }}
          >
            <div>
              <h4>
                #{list.number} {list.title}
              </h4>
            </div>

            <div>
              <div>
                작성자:{list.user_id} 작성일:{getFullYmdStr(new Date(list.created_at))}
              </div>
              <div>코멘트:{list.comments}</div>
            </div>
          </div>
        );
      })}
      {isLoading && <div>loading...</div>}
    </div>
  );
}
export default IssueListPage;

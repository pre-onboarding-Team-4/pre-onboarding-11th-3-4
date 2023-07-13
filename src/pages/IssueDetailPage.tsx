import React, { useEffect } from 'react';
import { useIssue } from '../hooks/useIssue';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkMath from 'remark-math';
import Loading from '../components/Loading';

function IssueDetailPage() {
  const { issue, fetchIssue, isLoading } = useIssue();
  const { id } = useParams<{ id: string }>();

  const getFullYmdStr = (d: Date) => {
    return d.getFullYear() + '년 ' + (d.getMonth() + 1) + '월 ' + d.getDate() + '일 ';
  };

  //console.log(issueList);

  useEffect(() => {
    fetchIssue(Number(id));
  }, []);

  return (
    <div>
      {issue && !isLoading ? (
        <div>
          <h4>
            #{issue.number} {issue.title}
          </h4>

          <div>
            작성자:{issue.user_id} 작성일:{getFullYmdStr(new Date(issue.created_at))}
          </div>

          <div>코멘트:{issue.comments}</div>

          <div>
            <img src={issue.user.avatar_url} />
            <div>
              <strong>{issue.user.login}</strong>
            </div>
          </div>

          <ReactMarkdown remarkPlugins={[remarkMath]}>{issue.body}</ReactMarkdown> 
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
export default IssueDetailPage;

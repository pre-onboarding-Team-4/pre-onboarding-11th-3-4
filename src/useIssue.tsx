import { useContext } from 'react';
import { GetIssuePathParam, getIssue } from './apis/issues';
import { IssueContext } from './IssueContextProvider';
import { useIssues } from './useIssues';

const pathParam: GetIssuePathParam = { repo: 'react', owner: 'facebook', issue_number: 0 };

export function useIssue() {
  const context = useContext(IssueContext);

  if (!context) throw new Error('IssueContextProvider를 찾을 수 없습니다!');

  const { issue, setIssue } = context;
  const { issueList } = useIssues();

  const fetchIssue = async (issueNumber: number) => {
    if (!!issue && issue.number === issueNumber) {
      return;
    }

    for (const issue of issueList) {
      if (issue.number === issueNumber) {
        setIssue(issue);
        return;
      }
    }

    const res = await getIssue({ ...pathParam, issue_number: issueNumber });
    setIssue(res);
  };

  return { issue, fetchIssue };
}

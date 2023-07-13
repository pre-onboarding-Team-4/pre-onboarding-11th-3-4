import { useContext, useState } from 'react';
import { GetIssuePathParam, getIssue } from '../apis/issues';
import { IssueContext } from '../contexts/IssueContextProvider';

const pathParam: GetIssuePathParam = {
  repo: 'react',
  owner: 'facebook',
  issue_number: 0,
};

export function useIssue() {
  const context = useContext(IssueContext);

  if (!context) throw new Error('IssueContextProvider를 찾을 수 없습니다!');

  const { issue, setIssue } = context;
  // const { issueList } = useIssues();
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssue = async (issueNumber: number) => {
    // if (!!issue && issue.number === issueNumber) {
    //   return;
    // }

    // for (const issue of issueList) {
    //   if (issue.number === issueNumber) {
    //     setIssue(issue);
    //     return;
    //   }
    // }

    setIsLoading(true);
    const res = await getIssue({ ...pathParam, issue_number: issueNumber });
    setIssue(res);
    setIsLoading(false);
  };

  return { issue, fetchIssue, isLoading };
}

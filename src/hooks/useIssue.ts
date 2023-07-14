import { useState } from 'react';
import { GetIssuePathParam, getIssue } from '../apis/issues';
import { useIssues } from './useIssues';
import { IssueSchema } from '../types/issuesApi';

const pathParam: GetIssuePathParam = {
  repo: process.env.REACT_APP_REPO || '',
  owner: process.env.REACT_APP_OWNER || '',
  issue_number: 0,
};

export function useIssue() {
  const [issue, setIssue] = useState<IssueSchema | null>(null);
  const { issueList } = useIssues();
  const [isLoading, setIsLoading] = useState(false);

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

    setIsLoading(true);
    const res = await getIssue({ ...pathParam, issue_number: issueNumber });
    setIssue(res);
    setIsLoading(false);
  };

  return { issue, fetchIssue, isLoading };
}

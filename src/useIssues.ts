import { useContext, useState } from 'react';
import { IssuesContext } from './IssuesContextProvider';
import { GetIssuesPathParam, GetIssuesQueryParam, getIssueList } from './apis/issues';

/* Initial data for api call */
const PAGE = 1;
const PER_PAGE = 10;

const pathParam: GetIssuesPathParam = { repo: 'react', owner: 'facebook' };
const queryParam: GetIssuesQueryParam = { sort: 'comments', page: PAGE, per_page: PER_PAGE };

export function useIssues() {
  const context = useContext(IssuesContext);

  if (!context) throw new Error('IssuesContextProvider를 찾을 수 없습니다!');

  const { issueList, setIssueList } = context;
  const [isLoading, setIsLoading] = useState(false);

  const fetchIssues = async () => {
    const res = await getIssueList(pathParam, queryParam);
    setIsLoading(true);
    setIssueList(res);
    setIsLoading(false);
  };

  const fetchMoreIssues = async () => {
    const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;
    setIsLoading(true);
    const res = await getIssueList(pathParam, { ...queryParam, page: NEXT_PAGE });
    setIssueList([...issueList, ...res]);
    setIsLoading(false);
  };

  return { issueList, fetchIssues, fetchMoreIssues, isLoading };
}
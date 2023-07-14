import { useContext, useState } from 'react';
import { IssuesContext } from '../contexts/IssuesContextProvider';
import { getIssueCount, getIssueList } from '../apis/issues';
import { GetIssuesQueryParam } from '../types/issuesApi';
import pathParam from '../constant/pathParam';

/* Initial data for api call */
const PAGE = 1;
const PER_PAGE = 10;

const queryParam: GetIssuesQueryParam = { sort: 'comments', page: PAGE, per_page: PER_PAGE };

export function useIssues() {
  const context = useContext(IssuesContext);

  if (!context) throw new Error('IssuesContextProvider를 찾을 수 없습니다!');

  const { issueList, setIssueList } = context;
  const [isLoading, setIsLoading] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [countLoading, setCountLoading] = useState(false);
  const [count, setCount] = useState(0);

  const fetchIssueCount = async () => {
    setCountLoading(true);
    const res = await getIssueCount(pathParam);
    setCount(res);
    setCountLoading(false);
  };

  const fetchIssues = async () => {
    setIsLoading(true);
    const res = await getIssueList(pathParam, queryParam);
    setIssueList(res);
    setIsLoading(false);
  };

  const fetchMoreIssues = async () => {
    setIsLoading(true);

    if (count < 10) {
      setIsEnd(true);
      setIsLoading(false);
      return;
    }

    const NEXT_PAGE = Math.floor(issueList.length / PER_PAGE) + 1;

    const res = await getIssueList(pathParam, { ...queryParam, page: NEXT_PAGE });

    if (res.length === 0) {
      setIsEnd(true);
      setIsLoading(false);
      return;
    }

    setIssueList([...issueList, ...res]);

    setIsLoading(false);
  };

  return {
    issueList,
    isEnd,
    count,
    countLoading,
    fetchIssueCount,
    fetchIssues,
    fetchMoreIssues,
    isLoading,
  };
}

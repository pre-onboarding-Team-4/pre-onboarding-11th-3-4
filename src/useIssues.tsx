import { useContext } from 'react';
import { IssuesContext } from './IssuesContextProvider';
import { GetIssuesPathParam, GetIssuesQueryParam, getIssueList } from './apis/issues';

/* Initial data for api call */
const PAGE = 1;
const PER_PAGE = 10;

const pathParam: GetIssuesPathParam = { repo: 'react', owner: 'facebook' };
const queryParam: GetIssuesQueryParam = { sort: 'comments', page: PAGE, per_page: PER_PAGE };

export function useIssues() {
  const context = useContext(IssuesContext);
  const { issueList, setIssueList } = context;

  const fetchIssues = async () => {
    const res = await getIssueList(pathParam, queryParam);
    setIssueList(res);
  };

  return { issueList, fetchIssues };
}

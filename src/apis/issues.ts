import instance from './axios';
import { makeQueryString } from './util';

// request data (query param, path param)
type SortStates = 'created' | 'updated' | 'comments';
type GetIssuesQueryParam = { sort?: SortStates; per_page?: number; page?: number };
type GetIssuesPathParam = { owner: string; repo: string };

// response data type
export type IssueSchema = {
  id: number;
  title: string;
  userId: string;
  createdAt: string;
  comments: number;
  avatar_url: string;
  body: string;
};

export type IssueListSchema = Omit<IssueSchema, 'avatar_url' | 'body'>[];

// api
const getIssueList: (
  pathParam: GetIssuesPathParam,
  queryParam: GetIssuesQueryParam,
) => Promise<IssueListSchema> = async (pathParam, queryParam) => {
  const { owner, repo } = pathParam;
  const res = await instance.get(`/repos/${owner}/${repo}/issues?${makeQueryString(queryParam)}`);

  return res.data as IssueListSchema;
};

type GetIssuePathParam = { owner: string; repo: string; issue_number: number };

const getIssue: (pathParam: GetIssuePathParam) => Promise<IssueSchema> = async (pathParam) => {
  const { owner, repo, issue_number } = pathParam;
  const res = await instance.get(`/repos/${owner}/${repo}/issues/${issue_number}}`);

  return res.data as IssueSchema;
};

export { getIssueList, getIssue };

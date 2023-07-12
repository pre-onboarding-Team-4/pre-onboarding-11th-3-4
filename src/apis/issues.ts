import {
  GetIssuesPathParam,
  GetIssuesQueryParam,
  IssueListSchema,
  IssueSchema,
} from '../types/issuesApi';
import instance from './axios';
import { makeQueryString } from './util';

const getIssueList: (
  pathParam: GetIssuesPathParam,
  queryParam: GetIssuesQueryParam,
) => Promise<IssueListSchema> = async (pathParam, queryParam) => {
  const { owner, repo } = pathParam;
  const res = await instance.get(`/repos/${owner}/${repo}/issues?${makeQueryString(queryParam)}`);

  return res.data as IssueListSchema;
};

export type GetIssuePathParam = { owner: string; repo: string; issue_number: number };

const getIssue: (pathParam: GetIssuePathParam) => Promise<IssueSchema> = async (pathParam) => {
  const { owner, repo, issue_number } = pathParam;
  const res = await instance.get(`/repos/${owner}/${repo}/issues/${issue_number}}`);

  return res.data as IssueSchema;
};

export { getIssueList, getIssue };

// request data (query param, path param)
type SortStates = 'created' | 'updated' | 'comments';
export type GetIssuesQueryParam = {
  sort?: SortStates;
  per_page?: number;
  page?: number;
  state?: string;
};
export type GetIssuesPathParam = { owner: string; repo: string };

interface User {
  avatar_url: string;
  login: string;
}

// response data type
export type IssueSchema = {
  id: number;
  number: number;
  title: string;
  userId: string;
  created_at: Date;
  comments: number;
  avatar_url: string;
  body: string;
  user: User;
  url: string;
};

export type IssueListSchema = IssueSchema[];

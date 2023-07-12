export interface IssueDetail {
  title: string;
  number: number;
  created_at: string;
  comments: number;
  user: User;
  body: string;
}

export interface User {
  login: string;
}

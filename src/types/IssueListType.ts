export interface Issue {
  title: string;
  number: number;
  created_at: string;
  comments: number;
  user: User;
}

export interface User {
  login: string;
}

export type IssueList = Issue[];

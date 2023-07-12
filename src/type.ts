export type Issue = {
  id: number;
  title: string;
  userId: string;
  createdAt: string;
  comments: number;
  avatar_url: string;
  body: string;
};

export type IssueList = Omit<Issue, 'avatar_url' | 'body'>[];

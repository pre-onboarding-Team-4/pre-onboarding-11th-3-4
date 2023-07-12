import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const IssueContext = createContext<IssueContextProps>({
  issues: [],
  isLoading: false,
  loadIssues: () => {},
});

export const useIssue = () => useContext(IssueContext);

export const IssueProvider: React.FC<IssueProviderProps> = ({ children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadIssues();
  }, []);

  const loadIssues = async () => {
    if (isLoading) return;
    setIsLoading(true);

    try {
      const response = await axios.get<Issue[]>(
        `https://api.github.com/repos/facebook/react/issues?state=open&sort=comments&direction=desc&page=${page}&per_page=10`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        },
      );

      const issueList = response.data.map((issue) => ({
        title: issue.title,
        number: issue.number,
        comments: issue.comments,
        created_at: issue.created_at,
        user: {
          login: issue.user.login,
          avatar_url: issue.user.avatar_url,
        },
        body: issue.body,
      }));

      setIssues((prevIssues: Issue[]) => [...prevIssues, ...issueList]);
      setPage((prev: number) => prev + 1);
    } catch (error) {
      console.log('요청 중 오류가 발생했습니다.', error);
    }

    setIsLoading(false);
  };

  return (
    <IssueContext.Provider value={{ issues, isLoading, loadIssues }}>
      {children}
    </IssueContext.Provider>
  );
};

interface Issue {
  title: string;
  number: number;
  comments: number;
  created_at: string;
  user: {
    login: string;
    avatar_url: string;
  };
  body: string;
}

interface IssueContextProps {
  issues: Issue[];
  isLoading: boolean;
  loadIssues: () => void;
}

interface IssueProviderProps {
  children: React.ReactNode;
}

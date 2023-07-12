import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Issue, fetchIssues } from './apis/issues';

interface IssueContextProps {
  issues: Issue[];
  isLoading: boolean;
}

export const IssueContext = createContext<IssueContextProps>({
  issues: [],
  isLoading: true,
});

export function IssueProvider({ children }: React.PropsWithChildren<object>) {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  // const [page, setPage] = useState<number>(1);

  const fetchData = async (): Promise<void> => {
    try {
      const data = await fetchIssues(1);
      console.log(data);
      setIssues(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ issues, isLoading }), [issues, isLoading]);

  return <IssueContext.Provider value={contextValue}>{children}</IssueContext.Provider>;
}

import React, { ReactNode, createContext, useState } from 'react';
import { IssueListSchema } from '../types/issuesApi';

interface IssuesContextProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext<null | {
  issueList: IssueListSchema;
  setIssueList: React.Dispatch<React.SetStateAction<IssueListSchema>>;
}>(null);

export default function IssuesContextProvider({ children }: IssuesContextProviderProps) {
  const [issueList, setIssueList] = useState<IssueListSchema>([]);

  return (
    <IssuesContext.Provider value={{ issueList, setIssueList }}>{children}</IssuesContext.Provider>
  );
}

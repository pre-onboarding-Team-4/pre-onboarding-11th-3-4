import React, { ReactNode, createContext, useState } from 'react';
import { IssueListSchema } from './apis/issues';

interface IssuesContextProviderProps {
  children: ReactNode;
}

// TODO: 에러 던지기
export const IssuesContext = createContext<{
  issueList: IssueListSchema;
  setIssueList: React.Dispatch<React.SetStateAction<IssueListSchema>>;
}>({
  issueList: [],
  setIssueList: () => {},
});

export default function IssuesContextProvider({ children }: IssuesContextProviderProps) {
  const [issueList, setIssueList] = useState<IssueListSchema>([]);

  return (
    <IssuesContext.Provider value={{ issueList, setIssueList }}>{children}</IssuesContext.Provider>
  );
}

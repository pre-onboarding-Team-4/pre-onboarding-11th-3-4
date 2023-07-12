import React, { ReactNode, createContext, useState } from 'react';
import { IssueListSchema } from './apis/issues';

interface IssuesContextProviderProps {
  children: ReactNode;
}

const IssuesContext = createContext<{
  issueList: IssueListSchema;
  setIssueList: React.Dispatch<React.SetStateAction<IssueListSchema>>;
}>({
  issueList: [],
  setIssueList: () => {},
});

// TODO: hook으로 뺴기, IssueList, Issue 접근제어 필요성 판단하고 개선하기

export default function IssuesContextProvider({ children }: IssuesContextProviderProps) {
  const [issueList, setIssueList] = useState<IssueListSchema>([]);

  return (
    <IssuesContext.Provider value={{ issueList, setIssueList }}>{children}</IssuesContext.Provider>
  );
}

import React, { ReactNode, createContext, useState } from 'react';
import { IssueSchema } from './apis/issues';

interface IssueContextProviderProps {
  children: ReactNode;
}

export const IssueContext = createContext<null | {
  issue: IssueSchema | null;
  setIssue: React.Dispatch<React.SetStateAction<IssueSchema | null>>;
}>(null);

export default function IssueContextProvider({ children }: IssueContextProviderProps) {
  const [issue, setIssue] = useState<IssueSchema | null>(null);

  return <IssueContext.Provider value={{ issue, setIssue }}>{children}</IssueContext.Provider>;
}

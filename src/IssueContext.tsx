import React, { createContext, useEffect, useReducer } from 'react';
import { Issue, fetchIssues } from './apis/issues';

interface IssueContextProps {
  issues: Issue[];
  isLoading: boolean;
}

interface Action {
  type: string;
  payload?: Issue[];
}

const initialState: IssueContextProps = {
  issues: [],
  isLoading: true,
};

const reducer = (state: IssueContextProps, action: Action): IssueContextProps => {
  switch (action.type) {
    case 'FETCH_ISSUES_SUCCESS':
      return {
        ...state,
        issues: action.payload || [],
        isLoading: false,
      };
    case 'FETCH_ISSUES_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const IssueContext = createContext<IssueContextProps>(initialState);

export function IssueProvider({ children }: React.PropsWithChildren<object>) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (): Promise<void> => {
    try {
      const data = await fetchIssues(1);
      console.log(data);
      dispatch({ type: 'FETCH_ISSUES_SUCCESS', payload: data });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ISSUES_FAILURE' });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <IssueContext.Provider value={state}>{children}</IssueContext.Provider>;
}

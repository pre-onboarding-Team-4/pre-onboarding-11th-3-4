import React, { createContext, useReducer, useMemo } from 'react';
import { fetchIssueDetail, IssueDetail } from '../apis/issues';

interface DetailContextProps {
  issueDetails: IssueDetail[];
  isLoading: boolean;
  fetchData: (issueNumber: string) => Promise<void>;
}

interface Action {
  type: string;
  payload?: IssueDetail[];
}

const initialState: DetailContextProps = {
  issueDetails: [],
  isLoading: true,
  fetchData: async () => {},
};

const reducer = (state: DetailContextProps, action: Action): DetailContextProps => {
  switch (action.type) {
    case 'FETCH_ISSUE_DETAILS_SUCCESS':
      return {
        ...state,
        issueDetails: action.payload || [],
        isLoading: false,
      };
    case 'FETCH_ISSUE_DETAILS_FAILURE':
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const DetailContext = createContext<DetailContextProps>(initialState);

export function DetailProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async (issueNumber: string): Promise<void> => {
    try {
      const payload = await fetchIssueDetail(issueNumber);
      console.log(payload);
      dispatch({ type: 'FETCH_ISSUE_DETAILS_SUCCESS', payload });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ISSUE_DETAILS_FAILURE' });
    }
  };

  const value = useMemo(() => ({ ...state, fetchData }), [state, fetchData]);

  return <DetailContext.Provider value={value}>{children}</DetailContext.Provider>;
}

import React, { createContext, useEffect, useReducer } from 'react';
import { fetchIssueDetail, IssueDetail } from '../apis/issues';

interface DetailContextProps {
  issueDetails: IssueDetail[];
  isLoading: boolean;
}

interface Action {
  type: string;
  payload?: IssueDetail[];
}

const initialState: DetailContextProps = {
  issueDetails: [],
  isLoading: true,
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

  const fetchData = async (issueNumber: number): Promise<void> => {
    try {
      const payload = await fetchIssueDetail(issueNumber);
      dispatch({ type: 'FETCH_ISSUE_DETAILS_SUCCESS', payload });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'FETCH_ISSUE_DETAILS_FAILURE' });
    }
  };

  useEffect(() => {
    fetchData(13991);
  }, []);

  return <DetailContext.Provider value={state}>{children}</DetailContext.Provider>;
}

import React, { createContext, useReducer, Dispatch } from 'react';
import { IssueList } from '../types/IssueListType';

type IssueListState = {
  loading: boolean;
  data?: IssueList;
};

export type IssueListAction = {
  type: 'SET_LOADING' | 'GET_ISSUE_LIST';
  data?: IssueList;
};

type IssueListProviderProps = {
  children: React.ReactNode;
};

const initialState: IssueListState = {
  loading: false,
  data: [],
};

function issueListReducer(state: IssueListState, action: IssueListAction): IssueListState {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ISSUE_LIST':
      return {
        ...state,
        data: action.data ? state.data?.concat(action.data) : state.data,
        loading: false,
      };
    default:
      throw new Error(`알 수 없는 Action 타입입니다: ${action.type}`);
  }
}

export const IssueListStateContext = createContext(initialState);
export const IssueListDispatchContext = createContext<Dispatch<IssueListAction> | null>(null);

export function IssueListProvider({ children }: IssueListProviderProps) {
  const [state, dispatch] = useReducer(issueListReducer, initialState);
  return (
    <IssueListStateContext.Provider value={state}>
      <IssueListDispatchContext.Provider value={dispatch}>
        {children}
      </IssueListDispatchContext.Provider>
    </IssueListStateContext.Provider>
  );
}

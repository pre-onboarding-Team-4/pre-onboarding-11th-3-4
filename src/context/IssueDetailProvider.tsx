import React, { createContext, useReducer, Dispatch } from 'react';
import { IssueDetail } from '../types/IssueDetailType';

type IssueDetailState = {
  loading: boolean;
  data?: IssueDetail;
};

export type IssueDetailAction = {
  type: 'SET_LOADING' | 'GET_ISSUE_DETAIL';
  data?: IssueDetail;
};

type IssueDetailProviderProps = {
  children: React.ReactNode;
};

const initialState: IssueDetailState = {
  loading: false,
  data: { title: '', number: 0, created_at: '', comments: 0, user: { login: '' }, body: '' },
};

function issueDetailReducer(state: IssueDetailState, action: IssueDetailAction): IssueDetailState {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'GET_ISSUE_DETAIL':
      return {
        ...state,
        data: action.data,
        loading: false,
      };
    default:
      throw new Error(`알 수 없는 Action 타입입니다: ${action.type}`);
  }
}

export const IssueDetailStateContext = createContext(initialState);
export const IssueDetailDispatchContext = createContext<Dispatch<IssueDetailAction> | null>(null);

export function IssueDetailProvider({ children }: IssueDetailProviderProps) {
  const [state, dispatch] = useReducer(issueDetailReducer, initialState);
  return (
    <IssueDetailStateContext.Provider value={state}>
      <IssueDetailDispatchContext.Provider value={dispatch}>
        {children}
      </IssueDetailDispatchContext.Provider>
    </IssueDetailStateContext.Provider>
  );
}

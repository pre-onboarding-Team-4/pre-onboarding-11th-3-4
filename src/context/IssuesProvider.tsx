/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, Dispatch, useContext, useReducer } from 'react';

type Issues = any[];

type Action = { type: 'GET_ISSUES'; payload: Issues };

type IssuesDispatch = Dispatch<Action>;

const IssuesContext = createContext<Issues | []>([]);
const IssuesDispatchContext = createContext<IssuesDispatch | null>(null);

function reducer(state: Issues, action: Action): Issues {
  switch (action.type) {
    case 'GET_ISSUES':
      return action.payload;
    default:
      throw new Error('Unhandled action');
  }
}

export function IsssuesProvier({ children }: { children: React.ReactNode }) {
  const [issues, dispatch] = useReducer(reducer, []);

  return (
    <IssuesContext.Provider value={issues}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesContext.Provider>
  );
}

export function useIssues() {
  const state = useContext(IssuesContext);

  return state;
}

export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);

  if (!dispatch) throw new Error('Cannot find IssueProvider');

  return dispatch;
}

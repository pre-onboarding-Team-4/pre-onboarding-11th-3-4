import { Dispatch, createContext, useContext, useReducer } from 'react';

export type issue = {
  issueNum: number;
  issueTitle: string;
  user: string;
  created_at: number;
  comments: number;
  body: string;
};

export type issueType = {
  issueList?: issue[];
  load: boolean;
};

const issueState: issueType = {
  issueList: [],
  load: false,
};

type issueAction = { type: 'LOADING'; data?: issueType } | { type: 'GET_SUCCESS'; data: issueType };

type issueDispatch = Dispatch<issueAction>;

const issueContext = createContext(issueState);

const issueDispatchContext = createContext<issueDispatch | undefined>(undefined);

function IssueReducer(state: issueType, action: issueAction): issueType {
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        load: true,
      };
    case 'GET_SUCCESS':
      return {
        ...state,
        issueList:
          state.issueList?.length === 0 ? state.issueList?.concat(action.data) : state.issueList,
        load: false,
      };

    default:
      throw new Error('오류');
  }
}

export function IssueContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(IssueReducer, issueState);

  return (
    <issueContext.Provider value={state}>
      <issueDispatchContext.Provider value={dispatch}>{children}</issueDispatchContext.Provider>
    </issueContext.Provider>
  );
}

export function useIssueState() {
  const state = useContext(issueContext);
  if (!state) throw new Error('issueProvider not found');
  return state;
}

export function useIssueDispatch() {
  const dispatch = useContext(issueDispatchContext);
  if (!dispatch) throw new Error('issueDispatchProvider not found');
  return dispatch;
}

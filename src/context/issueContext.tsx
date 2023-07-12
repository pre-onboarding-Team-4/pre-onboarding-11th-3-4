import { Dispatch, createContext, useContext, useReducer } from 'react';

//이슈번호, 이슈제목, 작성자, 작성일, 코멘트수

export type issue = {
  issueNum: number;
  issueTitle: string;
  user: string;
  created_at: number;
  comments: number;
};

type issueList = issue[];

const issueContext = createContext<issueList | []>([]);

type issueAction = { type: 'GET'; data: issueList };

type issueDispatch = Dispatch<issueAction>;

const issueDispatchContext = createContext<issueDispatch | undefined>(undefined);

function IssueReducer(state: issueList, action: issueAction): issueList {
  switch (action.type) {
    case 'GET':
      return action.data;

    default:
      throw new Error('오류');
  }
}

export function IssueContextProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(IssueReducer, []);

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

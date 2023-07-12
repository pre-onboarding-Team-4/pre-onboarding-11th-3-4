import { useContext } from 'react';
import { IssueListDispatchContext } from '../context/IssueListProvider';

export default function useIssueListDispatch() {
  const state = useContext(IssueListDispatchContext);
  if (!state) {
    throw new Error('IssueListProvider가 존재하지 않습니다.');
  }
  return state;
}

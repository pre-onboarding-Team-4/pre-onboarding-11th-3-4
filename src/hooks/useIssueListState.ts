import { useContext } from 'react';
import { IssueListStateContext } from '../context/IssueListProvider';

export default function useIssueListState() {
  const state = useContext(IssueListStateContext);
  if (!state) {
    throw new Error('IssueListProvider가 존재하지 않습니다.');
  }
  return state;
}

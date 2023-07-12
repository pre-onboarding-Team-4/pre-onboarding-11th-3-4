import { useContext } from 'react';
import { IssueDetailDispatchContext } from '../context/IssueDetailProvider';

export default function useIssueDetailDispatch() {
  const state = useContext(IssueDetailDispatchContext);
  if (!state) {
    throw new Error('IssueDetailProvider가 존재하지 않습니다.');
  }
  return state;
}

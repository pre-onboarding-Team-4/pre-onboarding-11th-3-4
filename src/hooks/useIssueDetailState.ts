import { useContext } from 'react';
import { IssueDetailStateContext } from '../context/IssueDetailProvider';

export default function useIssueDetailState() {
  const state = useContext(IssueDetailStateContext);
  if (!state) {
    throw new Error('IssueDetailProvider가 존재하지 않습니다.');
  }
  return state;
}

import React, { useEffect } from 'react';
import { getIssue } from '../apis/axios';
import { useIssueDispatch, useIssueState } from '../context/issueContext';
function IssueList() {
  const issue = useIssueState();
  const dispatch = useIssueDispatch();

  console.log(issue);

  const issueGet = async () => {
    try {
      const res = await getIssue();
      console.log(res);
      dispatch({ type: 'GET', data: res });
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    issueGet();
  }, []);

  return <div>issue list !!</div>;
}
export default IssueList;

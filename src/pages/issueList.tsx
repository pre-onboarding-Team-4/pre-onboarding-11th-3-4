import React, { useEffect } from 'react';
import { getIssue } from '../apis/axios';
import { useIssueDispatch, useIssueState } from '../context/issueContext';
import Loading from '../components/loading';
function IssueList() {
  const issue = useIssueState().issueList;
  const load = useIssueState().load;
  const dispatch = useIssueDispatch();

  console.log(issue);

  const issueGet = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const res = await getIssue();
      //console.log(res);
      if (res.status === 200) {
        dispatch({ type: 'GET_SUCCESS', data: res.data });
      }
    } catch (err) {
      return Promise.reject(err);
    }
  };

  useEffect(() => {
    issueGet();
  }, []);

  return (
    <div>
      issue list !!
      {load === true ? <Loading /> : null}
    </div>
  );
}
export default IssueList;

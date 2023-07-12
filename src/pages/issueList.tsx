import React from 'react';
import { getIssue } from '../apis/axios';
function IssueList() {
  const issueGet = () => {
    const res = getIssue();
    console.log(res);
  };

  return (
    <div>
      issue list !!
      <button onClick={issueGet}>버튼</button>
    </div>
  );
}
export default IssueList;

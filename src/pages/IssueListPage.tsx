import React, { useEffect} from "react";
import { useIssues } from "../hooks/useIssues";


function IssueListPage() {
    const { issueList, fetchIssues, fetchMoreIssues, isLoading } = useIssues();

    console.log(issueList);

    useEffect(()=>{
        fetchIssues();
    }, [])
   
    return(
        <div></div>
    )

}
export default IssueListPage;
import React, { useEffect} from "react";
import { useIssues } from "../hooks/useIssues";
import { IssueListSchema } from "../types/issuesApi";

function IssueListPage() {
    const { issueList, fetchIssues, fetchMoreIssues, isLoading } = useIssues();

    const getFullYmdStr = (d: Date) => {
        return d.getFullYear() + "년 " + (d.getMonth()+1) + "월 " + d.getDate() + "일 ";
    }

    //console.log(issueList);

    useEffect(()=>{
        fetchIssues();
    }, [])
   
    return(
        issueList.map(function(list, i) {
            return (
                <div key={i}>
                    <div>
                        <h4>#{list.number} {list.title}</h4>
                    </div>

                    <div>
                        <div>작성자:{list.user_id}  작성일:{getFullYmdStr(new Date(list.created_at))}</div> 
                        <div>코멘트:{list.comments}</div>
                    </div>
                </div>
            )
        })
    )

}
export default IssueListPage;
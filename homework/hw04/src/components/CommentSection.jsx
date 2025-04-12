import React from "react";

export default function CommentSection( {comments} ) {
    let commentNum = comments.length;
    
    if (commentNum > 1) {
        return (
        <div> 
            <button aria-label="view all comments" class="text-blue-700 text-sm py-2">View all {commentNum} comments</button>
            <p class="text-sm mb-3">
            <strong>{comments[commentNum - 1].user.username} </strong>
            {comments[commentNum - 1].text}
            </p>
            <p class="uppercase text-gray-500 text-xs">{comments[commentNum - 1].display_time}</p>
        </div>
        );
    
    } else if (commentNum === 1){
        return (
        <div>
            <p class="text-sm mb-3">
            <strong>{comments[commentNum - 1].user.username} </strong>
            {comments[commentNum - 1].text}
            </p>
            <p class="uppercase text-gray-500 text-xs">{comments[commentNum - 1].display_time}</p>
        </div>
        );         
    } else {
        return <div> </div>
    }
}
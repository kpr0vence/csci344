import React from "react"
import Like from "./Like";
import Bookmark from "./Bookmark";

export default function IconsBar( {post, token, requeryPost} ) {
    return (
        <div class="flex justify-between text-2xl mb-3">
            <div>
            <Like requeryPost={requeryPost} token={token} like_id={post.current_user_like_id} post_id={post.id} />
            <button aria-label="view comment section">
                <i class="far fa-comment"></i>
            </button>
            <button aria-label="share post">
                <i class="far fa-paper-plane"></i>
            </button>
            </div>
            <div><Bookmark token={token} bookmark_id={post.current_user_bookmark_id} post_id={post.id} /></div>
        </div>      
    );
}




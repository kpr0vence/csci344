import React from "react"
import LikeButton from "./LikeButton";
import BookmarkButton from "./BookmarkButton";

export default function IconsBar( {post, token, requeryPost} ) {
    return (
        <div className="flex justify-between text-2xl mb-3">
            <div className="flex gap-2">
            <LikeButton requeryPost={requeryPost} token={token} like_id={post.current_user_like_id} post_id={post.id} />
            <button aria-label="view comment section">
                <i className="far fa-comment"></i>
            </button>
            <button aria-label="share post">
                <i className="far fa-paper-plane"></i>
            </button>
            </div>

            <div><BookmarkButton token={token} bookmark_id={post.current_user_bookmark_id} post_id={post.id} /></div>
        </div>      
    );
}




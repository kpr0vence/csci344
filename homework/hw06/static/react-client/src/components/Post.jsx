import React, { useState } from "react";
import IconsBar from "./IconsBar";
import CommentSection from "./CommentSection"
import AddComment from "./AddComent";
import { getDataFromServer } from "../server-requests"


// We'll break the post up into:
// 1. Post: Header part, Picture, Number of likes and Caption, Contain the Rest (Icons Comment Section, Add Comment)
//      a. Icons Bar: Contains Bookmark, Like React Components, and the other two icons as just Icons
                //Note: Likes needs to be a state variable in POST (no lower) so that like button and #of likes can share it?
//      b. Comments Section: Contains the comments and Add Comment Componenet
//      c. Comment should be a state so that it's child AddComment can change it if a comment is posted

export default function Post( {post, token} ) {
    //Info that's shared: 
        //Likes
        //Comments

    //ICONS BAR: Info thats passed:
        //likes
        //bookmarks
    // console.log(myPost)
    
    const [comments, setComments] = useState(post.comments);
    const [likeCount, setLikeCount] = useState(post.likes.length);

    // Used to redraw so that likes and like count are synced, also used to redraw after a comment is added
    async function requeryPost() {
        console.log("Redrawing post")
        const data = await getDataFromServer(token, "/api/posts/"+post.id);
        console.log(data);
        setComments(data.comments);
        setLikeCount(data.likes.length);
    }

    let alt_text = post.alt_text;
    if (alt_text === null) {
        alt_text = post.user.first_name + " " + post.user.last_name + "'s post photo: " + post.caption.substring(0,10)
    }

    return (
    <section className="bg-white border mb-10">
        <div className="p-4 flex justify-between">
            <h3 className="text-lg font-Comfortaa font-bold">{post.user.username}</h3>
            <button className="icon-button" aria-label="more actions button"><i className="fas fa-ellipsis-h"></i></button>
        </div>
        <img src={post.image_url} alt={alt_text} width="300" height="300"
            className="w-full bg-cover" />
        <div className="p-4 border">
            <IconsBar post={post} token={token} requeryPost={requeryPost} />
            <p className="font-bold mb-3">{likeCount} likes</p>
            <div className="text-sm mb-3 flex gap-2">
                <p>
                    <strong>{post.user.username} </strong> 
                    {post.caption} <button aria-label="see more text button" className="button text-blue-700 text-sm py-0">more</button>
                </p>
            </div>
            <p className="uppercase text-gray-500 text-xs">{post.display_time}</p>

            <CommentSection comments={comments}/>
        </div>
        <AddComment comments={comments} requeryPost={requeryPost} token={token} post_id={post.id}/>
    </section> 
    );
}
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

    async function requeryPost() {
        console.log("Redrawing post")
        const data = await getDataFromServer(token, "/api/posts/"+post.id);
        console.log(data);
        console.log(`Setting like count to ` +data.likes.length);
        console.log("Setting comments to: " +data.comments)
        setComments(data.comments);
        setLikeCount(data.likes.length);
    }


    return (
    <section className="bg-white border mb-10">
        <div className="p-4 flex justify-between">
            <h3 className="text-lg font-Comfortaa font-bold">{post.user.username}</h3>
            <button className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
        </div>
        <img src={post.image_url} alt="placeholder image" width="300" height="300"
            className="w-full bg-cover" />
        <div className="p-4">
            <IconsBar post={post} token={token} requeryPost={requeryPost} />
            <p className="font-bold mb-3">{likeCount} likes</p>
            <div className="text-sm mb-3">
                <p>
                    <strong>{post.user.username} </strong> 
                    {post.caption} <button className="button" class="text-blue-700 text-sm py-2">more</button>
                </p>
            </div>
            <CommentSection comments={comments}/>
        </div>
        <AddComment comments={comments} requeryPost={requeryPost} token={token} post_id={post.id}/>
    </section> 
    );
}
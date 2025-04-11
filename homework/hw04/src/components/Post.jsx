import React from "react";
import Bookmark from "./Bookmark";
import Like from "./Like";

// We'll break the post up into:
// 1. Post: Header part, Picture, Number of likes and Caption, Contain the Rest (Icons Comment Section, Add Comment)
//      a. Icons Bar: Contains Bookmark, Like React Components, and the other two icons as just Icons
                //Note: Likes needs to be a state variable in POST (no lower) so that like button and #of likes can share it?
//      b. Comments Section: Contains the comments and Add Comment Componenet
//      c. Comment should be a state so that it's child AddComment can change it if a comment is posted

export default function Post( {post} ) {
    console.log("Post Below");
    console.log(post);

    //Info that's shared: 
        //Likes
        //Comments

    //ICONS BAR: Info thats passed:
        //likes
        //bookmarks

    return (
    <section className="bg-white border mb-10">
        <div className="p-4 flex justify-between">
            <h3 className="text-lg font-Comfortaa font-bold">{post.user.username}</h3>
            <button className="icon-button"><i className="fas fa-ellipsis-h"></i></button>
        </div>
        <img src={post.image_url} alt="placeholder image" width="300" height="300"
            className="w-full bg-cover" />
        <div className="p-4">
            <div className="flex justify-between text-2xl mb-3">
                <Like postData={post} />
                <Bookmark postData={post} />
            </div>
            <p className="font-bold mb-3">30 likes: Utilize Likes State Variable</p>
            <div className="text-sm mb-3">
                <p>
                    <strong>{post.user.username} </strong> 
                    {post.caption}<button className="button">more</button>
                </p>
            </div>
            Render Comments Here
        </div>
        <div className="flex justify-between items-center p-3">
            Render Add Comment Button Here
        </div>
    </section> 
    );
}
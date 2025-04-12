import React from "react";
import { postDataToServer } from "../server-requests"


export default function AddComment( {token, post_id, requeryPost, comments} ) {
    async function addComment() {
        const inputBox = document.querySelector("#post"+post_id).querySelector("input");
        const comment = inputBox.value;

        console.log("Adding " +comment+ " to comments")

        const sendData = {
            "post_id": post_id,
            "text": comment
        }
        //send an http post request
        const responseData = await postDataToServer(token, "/api/comments/",sendData);
        console.log(responseData);
        requeryPost();

        inputBox.value = ""
        inputBox.focus();
    }

    const thisPost = "post"+post_id
    return (
        <div id={thisPost}class="flex justify-between items-center p-3">
            <div class="flex items-center gap-3 min-w-[80%]">
                <i class="far fa-smile text-lg"></i>
                <input
                    aria-label="add a comment"
                    type="text"
                    class="min-w-[80%] focus:outline-none"
                    placeholder="Add a comment..."
                />
            </div>
            <button aria-label="post comment" class="text-blue-700 py-2" onClick={addComment}>Post</button>
        </div>
    );
}
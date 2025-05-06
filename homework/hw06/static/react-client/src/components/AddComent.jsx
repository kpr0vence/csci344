import React, {useCallback} from "react";
import { postDataToServer } from "../server-requests"


export default function AddComment( {token, post_id, requeryPost, comments} ) {
    async function addComment(e) {
        e.preventDefault();
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

        if (responseData.id) {  //If post request was successful, it'll have an id. If it wasn't there will just be a message
            requeryPost();
            inputBox.value = "";
        }
    }

    const thisPost = "post"+post_id
    return (
        <div id={thisPost}className="flex justify-between items-center p-3">
            <div className="flex items-center gap-3 min-w-[80%]">
                <i className="far fa-smile text-lg"></i>
                <form className="w-[100%]" onSubmit={e => addComment(e)}>
                    <input
                    aria-label="add a comment"
                    type="text"
                    className="min-w-[100%] focus:outline-none"
                    placeholder="Add a comment..."
                />
                </form>                
            </div>
            <button aria-label="post comment" className="text-blue-700 py-2" onClick={addComment}>Post</button>
        </div>
    );
}
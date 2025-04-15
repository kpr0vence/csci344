import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer} from "../server-requests"


export default function LikeButton( {like_id, post_id, token, requeryPost} ) {
  // console.log("Like ID: " +like_id)
  const [likeID, setLikeID] = useState(like_id)


  async function createLike() {
    console.log("creating like")
    const sendData = {
      "post_id": post_id,
    }
    //send an http post request
    const responseData = await postDataToServer(token, "/api/likes/",sendData);
    console.log(responseData);
    setLikeID(responseData.id)
    requeryPost();
  }

  async function deleteLike() {
    console.log("Deleting Like")
    let url = "/api/likes/"+likeID
    const responseData = await deleteDataFromServer(token, url)
    console.log(responseData)
    setLikeID(null)
    requeryPost();
  }

  if (likeID) {
    return (
      <button aria-label="Like Button" aria-checked="true" role="switch" onClick={deleteLike} >
        <i className="text-red-600 fas fa-heart"></i>
      </button>
  );
  } else {
    return (
      <button aria-label="Like Button" aria-checked="false" role="switch" onClick={createLike}>
        <i className="far fa-heart"></i>
      </button>
    );
  }
  
}
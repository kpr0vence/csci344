//Job: render bookmark (full/empty depending on if the user currently has it bookmarked) and provides funcitons to add/remvoe bookmark
import React, { useState } from "react";
import { postDataToServer, deleteDataFromServer, getAccessToken } from "../server-requests"

export default function Bookmark( {bookmark_id, post_id , token}) {
  // console.log("Bookmark ID: " +bookmark_id)
  const [bookmarkID, setBookmarkID] = useState(bookmark_id)

  async function createBookmark() {
    console.log("creating bookmark")
    const sendData = {
      "post_id": post_id,
    }
    //send an http post request
    const responseData = await postDataToServer(token, "/api/bookmarks/",sendData);
    console.log(responseData);
    setBookmarkID(responseData.id)
  }

  async function deleteBookmark() {
    console.log("Deleting Bookmark")
    let url = "/api/bookmarks/"+bookmarkID
    const responseData = await deleteDataFromServer(token, url)
    console.log(responseData)
    setBookmarkID(null)
  }

  if (bookmarkID) {
    return (
      <button aria-label="remove bookmark from post" onClick={deleteBookmark}>
        <i class="fas fa-bookmark"></i>
      </button>
    )
  } else {
    return (
        <button aria-label="add bookmark to post" onClick={createBookmark}><i class="far fa-bookmark"></i>
        </button>
    )
  }
}
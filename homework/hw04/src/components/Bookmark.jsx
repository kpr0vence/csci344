import React from "react";

export default function Bookmark( {postData} ) {
    return (
        <button aria-label="remove bookmark from post" >
          <i class="fas fa-bookmark"></i>
        </button>
    )
}
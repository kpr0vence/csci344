import React from "react";

export default function Like( {postData} ) {
    return (
        <button aria-label="add like to post" >
          <i class="far fa-heart"></i>
        </button>
    );
}
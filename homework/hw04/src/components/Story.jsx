//Job: Render a single story
import React from "react";

export default function Story({ story }) {
    return (
        <div class="flex flex-col justify-center items-center">
            <img src={story.user.thumb_url} alt={story.user.username + "'s profile picture"} class="rounded-full border-4 border-gray-300" />
            <p class="text-xs text-gray-500">{story.user.username}</p>
        </div>
    );
}
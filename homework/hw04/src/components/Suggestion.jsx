// Job: Render a single suggestion
import React from "react";


export default function Suggestion({ suggestion }) {
    return (
        <section class="flex justify-between items-center mb-4 gap-2">
            <img src={suggestion.thumb_url} alt={suggestion.username + "'s profile picture"} class="rounded-full" />
            <div class="w-[180px]">
                <p class="font-bold text-sm">{suggestion.username}</p>
                <p class="text-gray-600 text-xs">suggested for you</p>
            </div>
                <button aria-label="follow user" class="text-blue-700 text-sm py-2" >follow</button>
        </section> 
        );
    }
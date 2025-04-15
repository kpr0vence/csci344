// Job: Render a single suggestion
import React from "react";


export default function Suggestion({ suggestion }) {
    return (
        <section className="flex justify-between items-center mb-4 gap-2">
            <img src={suggestion.thumb_url} alt={suggestion.username + "'s profile picture"} className="rounded-full" />
            <div className="w-[180px]">
                <p className="font-bold text-sm">{suggestion.username}</p>
                <p className="text-gray-600 text-xs">suggested for you</p>
            </div>
                <button aria-label="follow user" className="text-blue-700 text-sm py-2" >follow</button>
        </section> 
        );
    }
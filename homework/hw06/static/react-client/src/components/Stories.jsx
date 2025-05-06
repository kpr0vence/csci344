//Job: Get Stories data and use Story to render stories
import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);
        
        async function getStories( ) {
            let userInfo = await getDataFromServer(token, "/api/stories/");
            setStories(userInfo);
        }
        
        useEffect( () => {
            getStories(); 
        }, [] );
    
        //Then we'll want to render eahc Suggestion component
        function renderStory(story) {
            return (
                <div key={story.id} className="flex flex-col justify-center items-center">
                    <img src={story.user.thumb_url} alt={story.user.username + "'s profile picture"} className="rounded-full border-4 border-gray-300" />
                    <p className="text-xs text-gray-500">{story.user.username}</p>
                </div> );      
        }


    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {
                stories.map( (story) => renderStory(story))
            }
        </header>
    );
}

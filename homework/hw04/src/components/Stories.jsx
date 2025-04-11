//Job: Get Stories data and use Story to render stories
import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Story from "./Story";

export default function Stories({ token }) {
    const [stories, setStories] = useState([]);
        
        async function getStories( ) {
            let userInfo = await getDataFromServer(token, "/api/stories/");
            setStories(userInfo);
        }
        
        useEffect( () => {
            getStories(); 
        }, [] );
        console.log("Stories: ")
        console.log(stories);
    
        //Then we'll want to render eahc Suggestion component
        function renderStory(storyObj) {
            return <Story story={storyObj} />
        }


    return (
        <header className="flex gap-6 bg-white border p-2 overflow-hidden mb-6">
            {
                stories.map( (story) => renderStory(story))
            }
        </header>
    );
}

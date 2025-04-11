//Job: Render each Suggestion component
import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Suggestion from "./Suggestion";

export default function Suggestions({ token }) {
    const [suggestions, setSuggestions] = useState([]);
    
    async function getSuggestions( ) {
        let userInfo = await getDataFromServer(token, "/api/suggestions/");
        setSuggestions(userInfo);
    }
    
    useEffect( () => {
        getSuggestions(); 
    }, [] );
    console.log(suggestions);

    //Then we'll want to render eahc Suggestion component
    function renderSuggestion(suggestionObj) {
        return <Suggestion suggestion={suggestionObj} />
    }

    return (
        <div className="mt-4">
            <p className="text-base text-gray-500 font-bold mb-4">
                Suggestions for you
            </p>
            {
                suggestions.map( (suggestion) => renderSuggestion(suggestion))
            }
        </div>
    );
}

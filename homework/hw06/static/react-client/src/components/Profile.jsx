import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function ({ token }) {
    const [profileInfo, setProfileInfo] = useState({});

    async function getUserInfo( ) {
        let userInfo = await getDataFromServer(token, "/api/profile/");
        setProfileInfo(userInfo);
    }
    
    useEffect( () => {
        getUserInfo(); 
    }, [] );

    return (
        <header className="flex gap-4 items-center">
            <img src={profileInfo.thumb_url} alt={profileInfo.username + "'s profile picture"} className="rounded-full w-16" />
            <h2 className="font-Comfortaa font-bold text-2xl">{profileInfo.username}</h2>
        </header>
    );
}

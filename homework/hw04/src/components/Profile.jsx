import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";

export default function Profile({ token }) {
    const [profileInfo, setProfileInfo] = useState({});

    async function getUserInfo( ) {
        let userInfo = await getDataFromServer(token, "/api/profile/");
        setProfileInfo(userInfo);
    }
    
    useEffect( () => {
        getUserInfo(); 
    }, [] );

    console.log(profileInfo);

    return (
        <header className="flex gap-4 items-center">
            <img src={profileInfo.thumb_url} alt={profileInfo.username + "'s"}profile picture class="rounded-full w-16" />
            <h2 class="font-Comfortaa font-bold text-2xl">{profileInfo.username}</h2>
        </header>
    );
}

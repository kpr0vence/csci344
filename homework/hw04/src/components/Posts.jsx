import React, { useState, useEffect } from "react";
import { getDataFromServer } from "../server-requests";
import Post from "./Post";



export default function Posts({ token }) {
    // When useSrarw is invoked it returns an array with 2 values:
    // 1. state variable
    // 2. a function (setPosts) whose job is to set the state variable and then redraw the screen
    //      after the variable is set.
    const [posts, setPosts] = useState([]);

    const [counter, setCounter] = useState(0);

    function incrementCounter() {
        setCounter(counter + 1);
    }   //Also works

    async function getPosts() {
        const data = await getDataFromServer(token, "/api/posts");
        console.log(data);
        setPosts(data);
    }

    useEffect(() => {   //Used to keep the setPosts from being in an infinite loop. useEffect runs the given function once
        getPosts();     //Without it, we would continuously call the getposts function (each time the screen redraws we would recall)
    }, []);

    return <div>
        TODO: output all of the posts: {posts.length}
        {posts.map( (post) => ( //Making a map function, which miraculously draws each of the map created divs to the screen?
            <Post post={post} />
        ))}
        <br />
        <button onClick={incrementCounter}>Click Me! :3   count = {counter}</button>
    </div>;
    //changing a state variable is intelligent and only really redraws the elements that are related to the state that changed
}

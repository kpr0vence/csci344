import { getAccessToken } from "./utilities.js";
const rootURL = "https://photo-app-secured.herokuapp.com";
let token = null;
let username = "kati";
let password = "password";

//Initializes the screen
async function initializeScreen() {
    token = await getToken();   //Token is a global variable
    showNav();
    //get the posts
    getPosts();
}


//Gets the token for this person thats logged in
async function getToken() {
    return await getAccessToken(rootURL, username, password);   //the parameters are all global variables atm
}

function showNav() {
    document.querySelector("#nav").innerHTML = `
    <nav class="flex justify-between py-5 px-9 bg-white border-b fixed w-full top-0">
            <h1 class="font-Comfortaa font-bold text-2xl">Photo App</h1>
            <ul class="flex gap-4 text-sm items-center justify-center">
                <li><span>${username}</span></li>
                <li><button class="text-blue-700 py-2">Sign out</button></li>
            </ul>
        </nav>
    `;
}

// implement remaining functionality below:
//await / async syntax:
async function getPosts() {
    const response = await fetch("https://photo-app-secured.herokuapp.com/api/posts/?limit=10", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}` 
        }
    });
    const data = await response.json();
    console.log(data);
    renderPosts(data);
}
 //Use the global variable token for our access token
            //Quotations around the the object name are optional, and only necessary if you have dashes or spaces in the name

window.createBookmark = async function createBookmark(postId) {
    const postData = {
        "post_id": postId,
    };

    const response = await fetch("https://photo-app-secured.herokuapp.com/api/bookmarks/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData)
    });

    const data = await response.json();
    console.log(data);
}

window.removeBookmark = async function removeBookmark(bookmarkId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/bookmarks/${bookmarkId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();
    console.log(data);
}

function renderBookmarkButton(postJSON) {
    let snippet = ``;

    if (postJSON.current_user_bookmark_id) {
        snippet = `
        <button  onClick = "window.removeBookmark(${postJSON.current_user_bookmark_id})">
            <i class="fas fa-bookmark"></i>
        </button>`;
    } else {
        snippet = `
        <button  onClick = "window.createBookmark(${postJSON.id})">
            <i class="far fa-bookmark"></i>
        </button>`;
    }    

    return snippet;
}

window.createLike = async function createLike(postId) {
    const postData = {
        "post_id": postId,
    };

    const response = await fetch("https://photo-app-secured.herokuapp.com/api/likes/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData)
    });

    const data = await response.json();
    console.log(data);
}

window.removeLike = async function removeLike(likeId) {
    const response = await fetch(`https://photo-app-secured.herokuapp.com/api/likes/${likeId}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    const data = await response.json();
    console.log(data);
}

function getLikeButton(postJSON) {
    let snippet = ``;
    //if like id exists, fill in the heart
    if(postJSON.current_user_like_id) {
        snippet = `<button onClick = "window.removeLike(${postJSON.current_user_like_id})"><i class="fas fa-heart text-red-700"></i></button>`;
    } else {
        snippet = `<button onClick = "window.createLike(${postJSON.id})"><i class="far fa-heart"></i></button>`;
    }
    
    return snippet;
}

function renderPosts(postListJSON) {
    postListJSON.forEach(renderPost)
}

function renderPost(postJSON) {
    let commentsSection = renderCommentSection(postJSON.comments);
    // console.log(commentsSection);

   let snippet = `
    <section class="bg-white border mb-10">
        <div class="p-4 flex justify-between">
            <h3 class="text-lg font-Comfortaa font-bold">${postJSON.user.username}</h3>
            <button class="icon-button"><i class="fas fa-ellipsis-h"></i></button>
        </div>
        <img src=${postJSON.image_url} alt=${postJSON.alt_text} width="300" height="300"
            class="w-full bg-cover">
        <div class="p-4">
            <div class="flex justify-between text-2xl mb-3">
                <div>
                    ${getLikeButton(postJSON)}
                    <button><i class="far fa-comment"></i></button>
                    <button><i class="far fa-paper-plane"></i></button>
                </div>
                <div>
                    ${renderBookmarkButton(postJSON)}
                </div>
            </div>
            <p class="font-bold mb-3">${postJSON.likes.length} likes</p>
            <div class="text-sm mb-3">
                <p>
                    <strong>${postJSON.user.username}</strong>
                    ${postJSON.caption} <button class="button">more</button>
                </p>
            </div>
            <p class="uppercase text-gray-500 text-xs">${postJSON.display_time}</p>
            ${commentsSection}
        </div>
        <div class="flex justify-between items-center p-3">
            <div class="flex items-center gap-3 min-w-[80%]">
                <i class="far fa-smile text-lg"></i>
                <input type="text" class="min-w-[80%] focus:outline-none" placeholder="Add a comment...">
            </div>
            <button class="text-blue-500 py-2">Post</button>
        </div>
    </section>
   `;
   let container = document.querySelector("main");
   container.insertAdjacentHTML("beforeend", snippet);
}

function renderCommentSection(comments) {
    let builder = ``;
    if (comments.length > 1) {
        let lastComment = comments[comments.length - 1];
        builder += ` <button class="text-blue-500 text-sm py-2">Show All ${comments.length} Comments</button>
        <p class="text-sm mb-3">
            <strong>${lastComment.user.username}</strong>
            ${lastComment.text}
        </p>
        <p class="uppercase text-gray-500 text-xs">${lastComment.display_time}</p>
        `;
    } else if (comments.length === 1) {
        let lastComment = comments[0];
        builder += `<p class="text-sm mb-3">
            <strong>${lastComment.user.username}</strong>
            ${lastComment.text}
        </p>
        <p class="uppercase text-gray-500 text-xs">${lastComment.display_time}</p>`;
    }

    return builder;
}

// after all of the functions are defined, invoke initialize at the bottom:
initializeScreen();

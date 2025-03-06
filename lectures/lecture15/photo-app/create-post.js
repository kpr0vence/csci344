import { getAccessToken } from "./get-token.js";
const rootURL = "https://photo-app-secured.herokuapp.com";

export async function createPost() {
    // get access token (like logging in) so that you can query for "your data":
    const token = await getAccessToken(rootURL, "kati", "password");

    // data to sent to server:
    const postData = {
        image_url: "https://i.pinimg.com/736x/ce/ba/84/ceba8472165d42a3f6d1b5e1a235b08e.jpg",
        caption: "Look at my Dog yall",
        alt_text: "Image of a cat",
    };

    // endpoint:
    const endpoint = `${rootURL}/api/posts/`;

    // send asynchronous request and wait for response headers:
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
    });

    // now wait for response body (also asynchronous):
    const data = await response.json();

    // now print to the console:
    console.log(data);
}

createPost();

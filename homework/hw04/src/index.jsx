//job: kick off the app (load the other components and get the access token)

import React from "react";
import { createRoot } from "react-dom/client";
import { getAccessToken } from "./server-requests.jsx";
import App from "./components/App.jsx";

async function main() {
    // this script kicks off the React App:
    const username = "kati";
    const token = await getAccessToken(username, "password");
    const rootEl = document.getElementById("app");
    const root = createRoot(rootEl);
    root.render(<App token={token} username={username} />);
}

main();

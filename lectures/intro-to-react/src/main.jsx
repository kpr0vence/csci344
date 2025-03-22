import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function main() {
    const rootEl = document.querySelector("#app");
    const root = createRoot(rootEl);    //Makes a react version of our DOM, starting at this element (for us it's a div with id="app")
    root.render(<App />);       //Calls the App.jsx file, which returns the componenet, and it gets rendered into the root
    root.render(<div> <App />   /
        <App />
        <App />
        <App />
    </div>);        //This one will replace the other one (for some reason), but if you wan't multuple App componenets, just enclose the 
}                   //function calls in another type of container (like div!)

main();
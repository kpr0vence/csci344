import React from "react";
//This is our first react component, react component file names should start with a capital letter


export default function App() {
    //Note how its not a String (or html snippet). This is NOT valid javaScript. It's like the step right before valid javaScript
    //A bundler will create the "vanila" (valid) javascript (thats what the script we added did)

    //IN FACT, you need to run the command "npm run dev" and click the link it gives to view the up-to-date version of the site
        //view live server (alt+l+o) is no loger usable
    return (
        <>
            <header>
                <h1>My First App</h1>
            </header>
            <main>
                <p>Hello React!</p>
                <p>Hello Mira :D</p>
                <p>Hello Violet :D</p>
                <p>Hello Alina :D</p>
            </main>
        </>
    );
}
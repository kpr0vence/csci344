import React, {useState} from "react";
import "./Welcome.css";

export function Welcome({ name, imgUrl }) {
    const [style, setStyle] = useState("card");
    const [times, setTimes] = useState(0)

    function toggleClass() {
        console.log("Change the card class!");
        if (style === "card") { 
            setStyle("active");
        } else {
            setStyle("card");
        }
    }

    function increaseCount(ev) {
        setTimes(times + 1);
        console.log("Count is now " + {times});

        ev.stopPropagation();   //Keeps it from runnign the parent's onClick function (aka the toggleClass)
        
    }


    return <section className={style} onClick={toggleClass}>
            <h2>~Welcome! {name}! :D</h2>
            <p>Your vibe today: </p>
            <img src={imgUrl} alt="This is an image" />
            <button  onClick={increaseCount}>This has been clicked {times} times!</button>
        </section>;
}
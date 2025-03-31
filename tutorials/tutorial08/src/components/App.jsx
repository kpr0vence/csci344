import React, { useState } from "react";
import NavBar from "./NavBar";
import MyDrawer from "./MyDrawer";
import MyCalendar from "./MyCalendar";
import { ColorPicker, Image, Carousel, Button, Drawer } from 'antd';

// custom components:

//Outdated way of doing things...
function changeBoxColor(color) {
    console.log("Changing color to " +color);
    document.querySelector(".colorBox").style.backgroundColor = color;
}

//I have at least three, the carousel, the drawer, and the time picker (calendar)
export default function App({bkColor="#1677ff"}) {
    const [backgroundColor, setBackgroundColor] = useState(bkColor);
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: backgroundColor,
        };
    // let color = "#1677ff";
    return (
        <>
            <NavBar />
            <main className="min-h-screen max-w-[1000px] mt-24 mx-auto">
                <p>Put your design system components in the space below...</p>
                <MyDrawer buttonTitle="Open Side Panel :P"/>
                <ColorPicker defaultValue="#1677ff" onChange={c => setBackgroundColor(c.toHexString())} />
                <Carousel arrows infinite={false}>
                    <div>
                        <h3 style={contentStyle}>Slide 1</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Slide 2</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Slide 3</h3>
                    </div>
                    <div>
                        <h3 style={contentStyle}>Slide 4</h3>
                    </div>
                </Carousel>
              
                <h2 className="font-Comfortaa my-4 font-bold text-xl">
                    Photo Gallery
                </h2>
                <div className="flex flex-wrap content-start">
                    <Image
                        src="https://picsum.photos/600/600?id=1"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=2"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=3"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=4"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=5"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=6"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=7"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=8"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=9"
                        width={200}
                    />
                    <Image
                        src="https://picsum.photos/600/600?id=10"
                        width={200}
                    />
                </div>

                <MyCalendar></MyCalendar>
                
            </main>

            <footer className="p-5 bg-white">footer goes here</footer>
        </>
    );
}

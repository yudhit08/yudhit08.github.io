import React, { useState, useEffect, useRef } from "react";
import Fab from "@mui/material/Fab";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

function Home(props) {
    const [isFloating, setIsFloating] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (!ref.current) return;
        if (ref.current.getBoundingClientRect().y <= -536) {
            // console.log(ref.current.getBoundingClientRect().top);

            setIsFloating(true);
        } else {
            setIsFloating(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    }, []);

    function toTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className='home-container' id='home' ref={ref}>
            <div className='menu-button-container' onClick={props.handleMenu}>
                {props.menu ? <p>MENU</p> : <p>CLOSE</p>}
                <div className={props.menu ? "menu-btn" : "menu-btn open"}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <p className='tag top home'>&#60;home&#62;</p>
            <div className='intro'>
                <h1>Hi,</h1>
                <h1>
                    I'm <span>Y</span>udhit,
                </h1>
                <h1>Front End Developer</h1>
            </div>
            <a href='#contact'>
                <button className='contact-me'>Contact me</button>
            </a>
            <p className='tag bottom home'>&#60;/home&#62;</p>
            <Fab
                className={isFloating ? "up-btn" : "up-btn none"}
                onClick={toTop}
            >
                <ArrowUpwardIcon sx={{ fontSize: 30, color: "#232323" }} />
            </Fab>
        </div>
    );
}

export default Home;

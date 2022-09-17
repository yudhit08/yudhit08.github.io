import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./Style.css";

function App() {
    const [menu, setMenu] = useState(true);
    function handleMenu() {
        setMenu((prevMenu) => !prevMenu);
    }

    return (
        <div className='App'>
            <Navbar menu={menu} handleMenu={handleMenu} />
            <Home handleMenu={handleMenu} menu={menu} />
            <About />
            <Skill />
            <Project />
            <Contact />
        </div>
    );
}

export default App;

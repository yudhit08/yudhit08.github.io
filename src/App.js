import React, { useState } from "react";
import DocumentMeta from "react-document-meta";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import "./Style.css";

function App() {
    const [menu, setMenu] = useState(true);
    const meta = {
        title: "Yudhitya M. Renandra",
        description: "Hi, my name is Yudhitya M. Renandra. I am a freelance web developer.",
        meta: {
            charset: "utf-8",
            name: {
                keywords: "yudhit,yudit,web developer,frontend,freelancer",
            },
        },
    };
    function handleMenu() {
        setMenu((prevMenu) => !prevMenu);
    }

    return (
        <DocumentMeta {...meta}>
            <div className='App'>
                <Navbar menu={menu} handleMenu={handleMenu} />
                <Home handleMenu={handleMenu} menu={menu} />
                <About />
                <Skill />
                <Project />
                <Contact />
            </div>
        </DocumentMeta>
    );
}

export default App;

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Navbar(props) {
    return (
        <div className={props.menu ? "navbar hidden" : "navbar"}>
            <div className="logo-container">
                <img src="/logo.png" alt="logo" />
            </div>
            <div className='menu'>
                <ul>
                    <li onClick={props.handleMenu}>
                        <a href='#home'>Home</a>
                    </li>
                    <li onClick={props.handleMenu}>
                        <a href='#about'>About</a>
                    </li>
                    <li onClick={props.handleMenu}>
                        <a href='#skill'>Skill</a>
                    </li>
                    <li onClick={props.handleMenu}>
                        <a href='#project'>Projects</a>
                    </li>
                    <li onClick={props.handleMenu}>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
            <div className='contact-link'>
                <a href='https://github.com/yudhit08' target='_blank'>
                    <GitHubIcon sx={{ color: "#fbf8f3" }} />
                </a>
                <a href='https://www.instagram.com/yudhitya.mr' target='_blank'>
                    <InstagramIcon sx={{ color: "#fbf8f3" }} />
                </a>
                <a href='https://www.linkedin.com/in/yudhitya-mr/' target='_blank'>
                    <LinkedInIcon sx={{ color: "#fbf8f3" }} />
                </a>
            </div>
        </div>
    );
}

export default Navbar;

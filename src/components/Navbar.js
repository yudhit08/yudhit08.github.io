import React from "react";

function Navbar(props) {
	return (
		<div className={props.menu ? "navbar hidden" : "navbar"}>
			<div className="logo-container">
				<img src="/logo.png" alt="logo" />
			</div>
			<div className="menu">
				<ul>
					<li onClick={props.handleMenu}>
						<a href="#about">about</a>
					</li>
					<li onClick={props.handleMenu}>
						<a href="#project">projects</a>
					</li>
					<li onClick={props.handleMenu}>
						<a href="#contact">contact</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Navbar;

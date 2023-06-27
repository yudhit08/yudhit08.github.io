import Logo from "./Logo";

function Navbar(props) {
	return (
		<div className="navbar">
			<a href="/" className="logo-container">
				<Logo />
			</a>
			<div className={props.menu ? "menu hidden" : "menu"}>
				<ul>
					<li onClick={props.handleMenu}>
						<a href="/#home">home</a>
					</li>
					<li onClick={props.handleMenu}>
						<a href="/#about">about</a>
					</li>
					<li onClick={props.handleMenu}>
						<a href="/#project">project</a>
					</li>
					<li onClick={props.handleMenu}>
						<a href="/#contact">contact</a>
					</li>
					<li>
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noreferrer noopener"
						>
							<button className="btn-resume">resume</button>
						</a>
					</li>
				</ul>
			</div>
			<div className="menu-button-container" onClick={props.handleMenu}>
				{props.menu ? <p>MENU</p> : <p>CLOSE</p>}
				<div className={props.menu ? "menu-btn" : "menu-btn open"}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</div>
	);
}

export default Navbar;

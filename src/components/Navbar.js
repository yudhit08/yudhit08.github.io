function Navbar(props) {
	return (
		<div className="navbar">
			<div className="logo-container">
				<img src="/logo.png" alt="logo" />
			</div>
			<div className={props.menu ? "menu hidden" : "menu"}>
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

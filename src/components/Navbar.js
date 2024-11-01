import { motion } from "framer-motion";
import Logo from "./Logo";

function Navbar({
	menu,
	scrollToSection,
	homeRef,
	aboutRef,
    experiencesRef,
	projectRef,
	contactRef,
}) {
	const menus = [
		{ name: "home", action: () => scrollToSection(homeRef) },
		{ name: "about", action: () => scrollToSection(aboutRef) },
		{ name: "experiences", action: () => scrollToSection(experiencesRef) },
		{ name: "project", action: () => scrollToSection(projectRef) },
		{ name: "contact me", action: () => scrollToSection(contactRef) },
		{
			name: "resume",
			action: () =>
				window.open("/resume.pdf", "_blank", "noreferrer noopener"),
		},
	];
	return (
		<div className="navbar">
			<a href="/" className="logo-container">
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{
						opacity: 1,
						y: 0,
					}}
				>
					<Logo />
				</motion.div>
			</a>
			<div className={menu ? "menu hidden" : "menu"}>
				<ul>
					{menus.map((menu, index) => {
						return (
							<motion.li
								initial={{ opacity: 0, y: -10 }}
								animate={{
									opacity: 1,
									y: 0,
								}}
								transition={{
									delay: (index + 1) * 0.03,
								}}
								onClick={menu.action}
							>
								<a
									href={menu.path}
									target={
										menu.name === "resume"
											? "_blank"
											: "_self"
									}
									rel={
										menu.name === "resume"
											? "noreferrer noopener"
											: ""
									}
								>
									{menu.name === "resume" ? (
										<button className="btn-resume">
											{menu.name}
										</button>
									) : (
										menu.name
									)}
								</a>
							</motion.li>
						);
					})}
				</ul>
			</div>
			<motion.div
				initial={{ opacity: 0, y: -10 }}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					delay: 0.03,
				}}
				className="menu-button-container"
				onClick={scrollToSection}
			>
				{menu ? <p>MENU</p> : <p>CLOSE</p>}
				<div className={menu ? "menu-btn" : "menu-btn open"}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</motion.div>
		</div>
	);
}

export default Navbar;

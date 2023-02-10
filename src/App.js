import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Social from "./components/Social";
import Footer from "./section/Footer";
import "./Style.css";

function App() {
	const [menu, setMenu] = useState(true);

	function handleMenu() {
		setMenu((prevMenu) => !prevMenu);
	}

	return (
		<div className="App">
			<Navbar menu={menu} handleMenu={handleMenu} />
			<Home handleMenu={handleMenu} menu={menu} />
			<About />
			<Project />
			<Contact />
			<Social />
			<Footer />
		</div>
	);
}

export default App;

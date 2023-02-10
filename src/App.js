import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Social from "./components/Social";
import Footer from "./section/Footer";
import Loader from "./components/Loader";
import "./Style.css";

function App() {
	const [menu, setMenu] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	function handleMenu() {
		setMenu((prevMenu) => !prevMenu);
	}

	useEffect(() => {
		setTimeout(() => setIsLoading(false), 2500);
	}, []);

	return (
		<div className="App">
			{isLoading ? (
				<Loader />
			) : (
				<>
					<Navbar menu={menu} handleMenu={handleMenu} />
					<Home handleMenu={handleMenu} menu={menu} />
					<About />
					<Project />
					<Contact />
					<Social />
					<Footer />
				</>
			)}
		</div>
	);
}

export default App;

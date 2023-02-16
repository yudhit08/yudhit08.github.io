import { useEffect, useState, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./section/Home";
import About from "./section/About";
import Project from "./section/Project";
import Contact from "./section/Contact";
import Social from "./components/Social";
import Footer from "./section/Footer";
// import "./style.min.css";
import "./css/style.css"
const Loader = lazy(() => import("./components/Loader"));

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
				<Suspense>
					<Loader />
				</Suspense>
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

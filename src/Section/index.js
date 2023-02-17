import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Social from "../components/Social";

const Section = ({ menu, handleMenu }) => {
	return (
		<>
			<Navbar menu={menu} handleMenu={handleMenu} />
			<Home handleMenu={handleMenu} menu={menu} />
			<About />
			<Project />
			<Contact />
			<Social />
			<Footer />
		</>
	);
};

export default Section;

import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Social from "../components/Social";
import Experiences from "./Experiences";

const Section = ({
	menu,
	scrollToSection,
	homeRef,
	aboutRef,
    experiencesRef,
	projectRef,
	contactRef,
}) => {
	return (
		<>
			<Navbar
				menu={menu}
				scrollToSection={scrollToSection}
				homeRef={homeRef}
				aboutRef={aboutRef}
                experiencesRef={experiencesRef}
				projectRef={projectRef}
				contactRef={contactRef}
			/>
			<Home homeRef={homeRef} />
			<About aboutRef={aboutRef} />
            <Experiences experiencesRef={experiencesRef} />
			<Project projectRef={projectRef} />
			<Contact contactRef={contactRef} />
			<Social />
			<Footer />
		</>
	);
};

export default Section;

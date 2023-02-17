import { useState, useEffect, useRef } from "react";
import profile from "../assets/yudhit.jpg"
import html from "../assets/html5.png"
import css from "../assets/css3.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import nodejs from "../assets/nodejs.png"
import ps from "../assets/photoshop.png"

const About = () => {
	const [isShown, setIsShown] = useState(false);
	const ref = useRef(null);

	const handleScroll = () => {
		if (!ref.current) return;
		let windowHeight = window.innerHeight;
		let elementTop = ref.current.getBoundingClientRect().y;
		let elementVisible = 50;
		if (elementTop < windowHeight - elementVisible) {
			setIsShown(true);
		} else {
			setIsShown(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", () => handleScroll);
		};
	}, []);

	return (
		<div
			className={isShown ? "about-container active" : "about-container"}
			id="about"
			ref={ref}
		>
			<p className="tag top">&#60;about&#62;</p>
			<h1 className="title">About me</h1>
			<div className="main-about">
				<div className="about--desc">
					<p>
						Hi, my name is <span>Yudhitya M. Renandra</span>. I am a freelancer
						web developer. I master front-end technology such as{" "}
						<span>Javascript ES6+</span>, <span>React JS</span>,{" "}
                        <span>Chakra UI</span> and{" "}
						<span>Node JS</span>.
					</p>
					<p>
						I am currently studying for a bachelor's degree in{" "}
						<span>Informatics Engineering</span> at the University of Riau. I
						live in Pekanbaru, Indonesia. I can create projects
						remotely and I'm always interested in challenges.{" "}
					</p>
				</div>
				<div className="about--picture">
					<img src={profile} alt="profile" />
				</div>
			</div>
			<div className="skill-box--container">
				<div className="skill-box html">
					<img src={html} alt="html5" />
				</div>
				<div className="skill-box css">
					<img src={css} alt="css3" />
				</div>
				<div className="skill-box js">
					<img src={js} alt="js" />
				</div>
				<div className="skill-box react">
					<img src={react} alt="react" />
				</div>
				<div className="skill-box nodejs">
					<img src={nodejs} alt="nodejs" />
				</div>
				<div className="skill-box ps">
					<img src={ps} alt="photoshop" />
				</div>
			</div>
			<p className="tag bottom">&#60;/about&#62;</p>
		</div>
	);
}

export default About;

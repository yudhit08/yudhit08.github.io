import { useRef } from "react";
import profile from "../assets/yudhit.jpg";
import html from "../assets/html5.png";
import css from "../assets/css3.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import ps from "../assets/photoshop.png";
import { useElementVisible } from "../hooks/useElementVisible";

const About = () => {
	const ref = useRef(null);
	const isShown = useElementVisible(ref)

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
						Hello! my name is <span>Yudhitya M. Renandra</span>. I
						am a freelancer web developer with expertise in{" "}
						<span>React JS</span>, <span>Node JS</span>, and{" "}
						<span>Javascript ES6+</span>, I am able to create{" "}
						<span>dynamic</span> and <span>interactive</span> web
						applications that can be customized to meet the unique
						needs of each client.
					</p>
					<p>
						With a deep understanding of React JS, I create highly{" "}
						<span>responsive</span>, <span>adaptive</span>, and{" "}
						<span>complex</span> applications that can handle
						various screen sizes. I also specialize in Node JS,
						creating server-side applications that can handle large
						amounts of traffic and data.
					</p>
				</div>
				<div className="about--picture">
					<img src={profile} alt="profile"/>
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
};

export default About;

import { useState, useEffect, useRef } from "react";
import { listProject } from "../lib/listProject";

function Project() {
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
			className={
				isShown ? "project-container active" : "project-container"
			}
			id="project"
			ref={ref}
		>
			<p className="tag top">&#60;projects&#62;</p>
			<h1 className="title">Projects</h1>
			<div className="project-box--container">
				{listProject.map((project) => {
					return (
						<div className="project-box" key={project.name}>
							<div className="view-source">
								<a
									href={project.link}
									target="_blank"
									rel="noreferrer"
								>
									View Source
								</a>
							</div>
							<img src={project.img} alt={project.name} />
						</div>
					);
				})}
			</div>
			<p className="tag bottom">&#60;/projects&#62;</p>
		</div>
	);
}

export default Project;

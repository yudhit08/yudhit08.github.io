import { listProject } from "../lib/listProject";

function Project({ projectRef }) {
	return (
		<div id="project" className="pt-20" ref={projectRef}>
			<div className={"project-container active"}>
				<p className="tag top font-mono">&#60;projects&#62;</p>
				<h1 className="title font-bold">Projects</h1>
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
										View Website
									</a>
								</div>
								<img src={project.img} alt={project.name} />
							</div>
						);
					})}
				</div>
				<p className="tag bottom font-mono">&#60;/projects&#62;</p>
			</div>
		</div>
	);
}

export default Project;

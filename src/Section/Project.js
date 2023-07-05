import { useRef } from "react";
import { useElementVisible } from "../hooks/useElementVisible";
import { listProject } from "../lib/listProject";

function Project() {
	const ref = useRef(null);
    const isShown = useElementVisible(ref)

	return (
        <div id="project">
            <div
                className={
                    isShown ? "project-container active" : "project-container"
                }
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
                                        View Website
                                    </a>
                                </div>
                                <img src={project.img} alt={project.name} />
                            </div>
                        );
                    })}
                </div>
                <p className="tag bottom">&#60;/projects&#62;</p>
            </div>
        </div>
	);
}

export default Project;

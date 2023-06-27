import {
	AiOutlineCalendar,
	AiOutlinePhone,
	AiOutlineMail,
	AiOutlineHome,
} from "react-icons/ai";

const CV = () => {
	return (
		<div className="cv-container">
			<div className="education-container">
				<h2>Education</h2>
				<div className="education-lists">
					<div className="list">
						<p>1</p>
						<div>
							<p className="year">Elementary School</p>
							<p className="place">
								From 2009 - 2015, SD N 003 Sekar Mawar
							</p>
						</div>
					</div>
					<div className="list">
						<p>2</p>
						<div>
							<p className="year">Junior High School</p>
							<p className="place">
								From 2015 - 2018, SMP N 3 Pasir Penyu
							</p>
						</div>
					</div>
					<div className="list">
						<p>3</p>
						<div>
							<p className="year">Senior High School</p>
							<p className="place">
								From 2018 - 2021, SMA N Pintar
							</p>
						</div>
					</div>
					<div className="list">
						<p>4</p>
						<div>
							<p className="year">S1 Informatics Engineering</p>
							<p className="place">
								From 2021 - Present, Riau University
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="basic-info-container">
				<h2>Basic Information</h2>
				<div className="info-lists">
					<div className="list">
						<AiOutlineCalendar className="icon" />
						<p>19 years</p>
					</div>
					<div className="list">
						<AiOutlineMail className="icon" />
						<p>yudhitrenandra99@gmail.com</p>
					</div>
					<div className="list">
						<AiOutlinePhone className="icon" />
						<p>+62 823 2425 2627</p>
					</div>
					<div className="list">
						<AiOutlineHome className="icon" />
						<p>Pekanbaru, Indonesia</p>
					</div>
				</div>
			</div>
            <div className="coding-container">
                <h2>Coding Skill</h2>
                <div className="coding-lists">
					<div className="list">
						<h3>Javascript</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nisi id consectetur condimentum. Curabitur rhoncus vestibulum sem non sodales.</p>
                        <div className="progress"></div>
					</div>
                    <div className="list">
						<h3>React JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nisi id consectetur condimentum. Curabitur rhoncus vestibulum sem non sodales.</p>
                        <div className="progress"></div>
					</div>
                    <div className="list">
						<h3>Node JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nisi id consectetur condimentum. Curabitur rhoncus vestibulum sem non sodales.</p>
                        <div className="progress"></div>
					</div>
                    <div className="list">
						<h3>Java</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis nisi id consectetur condimentum. Curabitur rhoncus vestibulum sem non sodales.</p>
                        <div className="progress"></div>
					</div>
				</div>
            </div>
		</div>
	);
};

export default CV;

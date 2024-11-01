import Navbar from "../components/Navbar";

const NotFound = ({menu, scrollToSection}) => {
	return (
		<div>
			<Navbar menu={menu} scrollToSection={scrollToSection}  />
			<div className="notfound-page">
				<div className="container">
					<h1>404</h1>
					<h2>Page Not Found</h2>
					<a href="/">
						<button className="to-home">Back to home</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default NotFound;

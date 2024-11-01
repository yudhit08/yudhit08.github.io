import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Section from "./Section";
import "./style/style.css";
// import "./style/style.css";
import NotFound from "./pages/NotFound";
import ReactGA from "react-ga4";
import { ConfigProvider, theme } from "antd";
const Loader = lazy(() => import("./components/Loader"));
const TRACKING_ID = "G-2P71E9R19E";

function App() {
	const [menu, setMenu] = useState(true);
	const [isLoading, setIsLoading] = useState(true);
	const homeRef = useRef(null);
	const aboutRef = useRef(null);
	const experiencesRef = useRef(null);
	const projectRef = useRef(null);
	const contactRef = useRef(null);

	function scrollToSection(sectionRef = null) {
		if (sectionRef) {
			sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
		}
		setMenu((prevMenu) => !prevMenu);
	}

	useEffect(() => {
		ReactGA.initialize(TRACKING_ID);
		setTimeout(() => setIsLoading(false), 2500);
	}, []);

	return (
		<ConfigProvider
			theme={{
				algorithm: theme.darkAlgorithm,
				components: {
					Timeline: {
						tailColor: "#54ffda",
					},
				},
			}}
		>
			<div className="App">
				{isLoading ? (
					<Suspense>
						<Loader />
					</Suspense>
				) : (
					<Routes>
						<Route
							exact
							path="/"
							element={
								<Section
									menu={menu}
									scrollToSection={scrollToSection}
									homeRef={homeRef}
									aboutRef={aboutRef}
									experiencesRef={experiencesRef}
									projectRef={projectRef}
									contactRef={contactRef}
								/>
							}
						/>
						<Route
							path="/404"
							element={
								<NotFound
									menu={menu}
									scrollToSection={scrollToSection}
								/>
							}
						/>
						<Route
							path="*"
							element={<Navigate replace to="/404" />}
						/>
					</Routes>
				)}
			</div>
		</ConfigProvider>
	);
}

export default App;

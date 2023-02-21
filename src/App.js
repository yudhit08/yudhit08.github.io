import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Section from "./Section";
import "./style/style.min.css";
// import "./style/style.css";
import NotFound from "./pages/NotFound";
import ReactGA from 'react-ga4';
const Loader = lazy(() => import("./components/Loader"));
const TRACKING_ID = "G-2P71E9R19E";

function App() {
	const [menu, setMenu] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	function handleMenu() {
		setMenu((prevMenu) => !prevMenu);
	}

	useEffect(() => {
        ReactGA.initialize(TRACKING_ID);
		setTimeout(() => setIsLoading(false), 2500);
	}, []);

	return (
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
							<Section menu={menu} handleMenu={handleMenu} />
						}
					/>
					<Route
						path="*"
						element={
							<NotFound menu={menu} handleMenu={handleMenu} />
						}
					/>
				</Routes>
			)}
		</div>
	);
}

export default App;

import { useEffect, useState, lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Section from "./Section";
import "./style/style.min.css";
// import "./style/style.css";
import NotFound from "./pages/NotFound";
const Loader = lazy(() => import("./components/Loader"));

function App() {
	const [menu, setMenu] = useState(true);
	const [isLoading, setIsLoading] = useState(true);

	function handleMenu() {
		setMenu((prevMenu) => !prevMenu);
	}

	useEffect(() => {
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
                    <Route path="*" element={<NotFound menu={menu} handleMenu={handleMenu} />} />
				</Routes>
			)}
		</div>
	);
}

export default App;

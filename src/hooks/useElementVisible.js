import { useState, useEffect } from "react";

export const useElementVisible = (ref) => {
	const [isShown, setIsShown] = useState(false);
	useEffect(() => {
		function handleVisibleChange() {
			if (!ref.current) return;
			let windowHeight = window.innerHeight;
			let elementTop = ref.current.getBoundingClientRect().y;
			let elementVisible = 50;
			if (elementTop < windowHeight - elementVisible) {
				setIsShown(true);
			} else {
				setIsShown(false);
			}
		}
		window.addEventListener("scroll", handleVisibleChange);

		return () => {
			window.removeEventListener("scroll", () => handleVisibleChange);
		};
	}, [ref]);
    console.log(isShown)

	return isShown;
};

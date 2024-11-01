import { useEffect } from "react";
import { motion } from "framer-motion";

function Home({ homeRef }) {
	useEffect(() => {
		const canvas = document.getElementById("animation-mouse");
		const ctx = canvas.getContext("2d");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let spots = [];

		const mouse = {
			x: undefined,
			y: undefined,
		};

		const onMove = (event) => {
			mouse.x = event.x + 100;
			mouse.y = event.y;
			for (let i = 0; i < 3; i++) {
				spots.push(new Particle());
			}
		};

		const onExit = () => {
			mouse.x = undefined;
			mouse.y = undefined;
		};

		const onResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};

		canvas.addEventListener("mousemove", onMove);
		canvas.addEventListener("click", onMove);

		class Particle {
			constructor() {
				this.x = mouse.x;
				this.y = mouse.y;
				this.size = Math.random() * 10 + 0.1;
				this.speedX = Math.random() * 5 - 1;
				this.speedY = Math.random() * 5 - 1;
				this.color = "#54ffda";
			}
			update() {
				this.x += this.speedX;
				this.y += this.speedY;
				if (this.size > 0.1) this.size -= 0.03;
			}
			draw() {
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function handleParticle() {
			for (let i = 0; i < spots.length; i++) {
				spots[i].update();
				spots[i].draw();
				for (let j = 0; j < spots.length; j++) {
					const dx = spots[i].x - spots[j].x;
					const dy = spots[i].y - spots[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < 90) {
						ctx.beginPath();
						ctx.strokeStyle = spots[i].color;
						ctx.lineWidth = spots[i].size / 10;
						ctx.moveTo(spots[i].x, spots[i].y);
						ctx.lineTo(spots[i].x, spots[i].y);
						ctx.stroke();
					}
				}
				if (spots[i].size <= 0.3) {
					spots.splice(i, 1);
					i--;
				}
			}
		}

		function animate() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			handleParticle();
			requestAnimationFrame(animate);
		}

		window.addEventListener("resize", onResize);

		window.addEventListener("mouseout", onExit);
		animate();

		return () => {
			window.removeEventListener("mousemove", onMove);
			window.removeEventListener("mouseout", onExit);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	return (
		<>
			<canvas id="animation-mouse"></canvas>
			<div className="home-container" id="home" ref={homeRef}>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 0.6 }}
				>
					<p className="tag top font-mono">&#60;intro&#62;</p>
				</motion.div>
				<div className="intro">
					<p>
						<motion.div
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 100 }}
							transition={{ delay: 0.7 }}
						>
							hi, my name is
						</motion.div>
					</p>
					<h1 className="font-bold">
						<motion.div
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 100 }}
							transition={{ delay: 0.8 }}
						>
							Yudhitya M. Renandra
						</motion.div>
					</h1>
					<h1 className="desc font-semibold">
						<motion.div
							initial={{ y: 10, opacity: 0 }}
							animate={{ y: 0, opacity: 100 }}
							transition={{ delay: 0.9 }}
						>
							I am a web developer
						</motion.div>
					</h1>
				</div>
				<a href="#contact">
					<motion.button
						className="contact-me"
						initial={{ y: 10, opacity: 0 }}
						animate={{ y: 0, opacity: 100 }}
						transition={{ delay: 1 }}
					>
						Say hello!
					</motion.button>
				</a>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 1.1 }}
				>
					<p className="tag bottom font-mono">&#60;/intro&#62;</p>
				</motion.div>
			</div>
		</>
	);
}

export default Home;

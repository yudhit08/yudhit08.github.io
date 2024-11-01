import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Social = () => {
	return (
		<div className="social-container">
			<a
				className="social-icons"
				href="https://github.com/yudhit08"
				target="_blank"
				rel="noreferrer"
			>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 1.4 }}
				>
					<FaGithub />
				</motion.div>
			</a>
			<a
				className="social-icons"
				href="https://instagram.com/yudhitya.mr"
				target="_blank"
				rel="noreferrer"
			>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 1.5 }}
				>
					<FaInstagram />
				</motion.div>
			</a>
			<a
				className="social-icons"
				href="https://linkedin.com/in/yudhitya-mr"
				target="_blank"
				rel="noreferrer"
			>
				<motion.div
					initial={{ y: 10, opacity: 0 }}
					animate={{ y: 0, opacity: 100 }}
					transition={{ delay: 1.6 }}
				>
					<FaLinkedin />
				</motion.div>
			</a>
		</div>
	);
};

export default Social;

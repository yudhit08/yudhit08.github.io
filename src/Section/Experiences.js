import React from "react";
import { motion } from "framer-motion";
import { Timeline } from "antd";
import { Icon } from "@iconify/react/dist/iconify.js";

const Experiences = ({ experiencesRef }) => {
	return (
		<div id="experiences" className="pt-20" ref={experiencesRef}>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.1 }}
				viewport={{ once: true }}
				className={"experiences-container active"}
			>
				<p className="tag top font-mono">&#60;experiences&#62;</p>
				<div className="title-container">
					<h1 className="title font-bold">My Experiences</h1>
					<div className="line"></div>
				</div>
				<div className="main-experiences">
					<Timeline
						mode="alternate"
                        
						items={[
							{
								children: "Create a services site 2015-09-01",
                                label: "20/3/2021",
                                dot: (
                                    <div></div>
                                )
							},
							{
								children:
									"Solve initial network problems 2015-09-01",
								color: "green",
							},
							{
								dot: (
									<Icon
										icon={"tabler:clock"}
										style={{
											fontSize: "16px",
										}}
									/>
								),
								children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
							},
							{
								color: "red",
								children:
									"Network problems being solved 2015-09-01",
							},
							{
								children: "Create a services site 2015-09-01",
							},
							{
								dot: (
									<Icon
										icon={"tabler:clock"}
										style={{
											fontSize: "16px",
										}}
									/>
								),
								children: "Technical testing 2015-09-01",
							},
						]}
					/>
				</div>

				<p className="tag bottom font-mono">&#60;/experiences&#62;</p>
			</motion.div>
		</div>
	);
};

export default Experiences;

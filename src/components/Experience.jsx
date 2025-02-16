import React from "react";
import { motion } from "framer-motion";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { TiLocation } from "react-icons/ti";
import experience from "../data/experience.json";

const Experience = () => {
	return (
		<div className="md:h-screen h-full flex justify-center items-center py-10">
			<div className="md:w-[60%] w-[80%] flex flex-col gap-10">
				{/* Heading with Scroll Animation */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 1 }}
					className="text-white text-4xl text-center"
				>
					Experience
				</motion.h1>

				{/* Experience List */}
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: false }}
					variants={{
						hidden: { opacity: 0 },
						visible: {
							opacity: 1,
							transition: { staggerChildren: 0.3 },
						},
					}}
				>
					{experience.map(data => (
						<motion.div
							key={data.id}
							className="md:flex text-white  pb-6 mb-6"
						>
							{/* Duration (Slides in from Left) */}
							<motion.div
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{ duration: 0.7 }}
								className="md:w-[30%] "
							>
								{data.duration}
							</motion.div>

							{/* Job Details (Slides in from Right) */}
							<motion.div
								initial={{ opacity: 0, x: 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: false }}
								transition={{ duration: 0.7 }}
								className="md:w-[70%] flex flex-col gap-4"
							>
								<div>
									<div className="text-xl">{data.role}</div>
									<div className="text-purple-400 flex items-center gap-2">
										<TbBuildingSkyscraper /> {data.name},{" "}
										<TiLocation /> {data.location}
									</div>
								</div>

								{/* Experience Points (Pop-in) */}
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: false }}
									transition={{ duration: 0.6, delay: 0.5 }}
								>
									{data.experience.map((exp, index) => (
										<ul
											className="list-disc list-inside text-gray-300"
											key={index}
										>
											<li>{exp}</li>
										</ul>
									))}
								</motion.div>

								{/* Technologies (Staggered pop-in) */}
								<motion.div
									initial="hidden"
									whileInView="visible"
									viewport={{ once: false }}
									variants={{
										hidden: { opacity: 0, scale: 0.9 },
										visible: {
											opacity: 1,
											scale: 1,
											transition: {
												staggerChildren: 0.2,
											},
										},
									}}
									className="flex gap-4 items-center flex-wrap text-sm"
								>
									{data.technologies.map((tech, index) => (
										<motion.div
											key={index}
											variants={{
												hidden: {
													opacity: 0,
													scale: 0.9,
												},
												visible: {
													opacity: 1,
													scale: 1,
												},
											}}
											className="border border-purple-400 p-2 py-1 text-purple-400 rounded-md"
										>
											{tech}
										</motion.div>
									))}
								</motion.div>
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default Experience;

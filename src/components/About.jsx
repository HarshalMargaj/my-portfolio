// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
// 	return (
// 		<div className="h-full md:h-screen flex justify-center items-center py-10">
// 			<motion.div
// 				initial={{ opacity: 0, y: 50 }}
// 				animate={{ opacity: 1, y: 0 }}
// 				transition={{ duration: 1 }}
// 				className="md:w-[60%] w-[80%] text-center flex flex-col gap-10"
// 			>
// 				{/* About Me Heading */}
// 				<motion.h1
// 					initial={{ opacity: 0, y: 30 }}
// 					animate={{ opacity: 1, y: 0 }}
// 					transition={{ duration: 1, delay: 0.3 }}
// 					className="text-4xl text-white"
// 				>
// 					About Me
// 				</motion.h1>

// 				{/* About Content */}
// 				<motion.div
// 					initial={{ opacity: 0, scale: 0.9 }}
// 					animate={{ opacity: 1, scale: 1 }}
// 					transition={{ duration: 1, delay: 0.6 }}
// 					className="bg-purple-100/5 text-white md:p-10 p-4 rounded-lg md:text-lg text-sm italic leading-8"
// 				>
// 					Hey there! I'm Harshal Margaj, a passionate{" "}
// 					<span className="text-purple-400">Front-End Developer</span>{" "}
// 					from Nashik, India with{" "}
// 					<span className="text-purple-400">
// 						1 year of experience
// 					</span>{" "}
// 					as a
// 					<span className="text-purple-400">Software Engineer</span>.
// 					I specialize in crafting high-performance, scalable, and
// 					visually engaging web applications that elevate user
// 					experiences. I graduated in 2023 from Vishwakarma Institute
// 					of Information Technology, Pune, securing an{" "}
// 					<span className="text-purple-400">8.45 CGPA</span>. My
// 					expertise lies in{" "}
// 					<span className="text-purple-400">
// 						React.js, Next.js, Redux, Git, GitHub, and Tailwind CSS
// 					</span>{" "}
// 					, and I have a strong focus on code optimization to ensure
// 					clean, maintainable, and efficient development. With a keen
// 					eye for detail and a problem-solving mindset, I thrive on
// 					transforming ideas into seamless digital experiences.
// 					Staying updated with the latest web technologies and best
// 					practices, I am always eager to push the boundaries of
// 					front-end development. Whether it's building dynamic user
// 					interfaces, optimizing performance, or collaborating on
// 					innovative projects, I am driven by a passion for technology
// 					and a commitment to delivering excellence. Let’s connect and
// 					create something extraordinary!
// 				</motion.div>
// 			</motion.div>
// 		</div>
// 	);
// };

// export default About;
import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="h-full md:h-screen flex justify-center items-center py-10">
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1 }}
				className="md:w-[60%] w-[80%] text-center flex flex-col gap-10"
			>
				{/* About Me Heading */}
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: false }}
					transition={{ duration: 1, delay: 0.3 }}
					className="text-4xl text-white"
				>
					About Me
				</motion.h1>

				{/* About Content */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: false }}
					transition={{ duration: 1, delay: 0.6 }}
					className="bg-purple-100/5 text-white md:p-10 p-4 rounded-lg md:text-lg text-sm italic leading-8"
				>
					Hey there! I'm Harshal Margaj, a passionate{" "}
					<span className="text-purple-400">Front-End Developer</span>{" "}
					from Nashik, India with{" "}
					<span className="text-purple-400">
						1 year of experience
					</span>{" "}
					as a
					<span className="text-purple-400">Software Engineer</span>.
					I specialize in crafting high-performance, scalable, and
					visually engaging web applications that elevate user
					experiences. I graduated in 2023 from Vishwakarma Institute
					of Information Technology, Pune, securing an{" "}
					<span className="text-purple-400">8.45 CGPA</span>. My
					expertise lies in{" "}
					<span className="text-purple-400">
						React.js, Next.js, Redux, Git, GitHub, and Tailwind CSS
					</span>{" "}
					, and I have a strong focus on code optimization to ensure
					clean, maintainable, and efficient development. With a keen
					eye for detail and a problem-solving mindset, I thrive on
					transforming ideas into seamless digital experiences.
					Staying updated with the latest web technologies and best
					practices, I am always eager to push the boundaries of
					front-end development. Whether it's building dynamic user
					interfaces, optimizing performance, or collaborating on
					innovative projects, I am driven by a passion for technology
					and a commitment to delivering excellence. Let’s connect and
					create something extraordinary!
				</motion.div>
			</motion.div>
		</div>
	);
};

export default About;

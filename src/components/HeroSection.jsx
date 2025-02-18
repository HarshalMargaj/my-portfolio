import React from "react";
import { motion } from "framer-motion";
import photo from "../../public/assets/photo.png";

const HeroSection = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: false }}
			transition={{ duration: 1 }}
			className="flex items-center justify-center h-full md:h-[80vh] flex-col gap-4 py-10"
		>
			{/* Profile Image */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1, delay: 0.2 }}
			>
				<img
					src={photo}
					alt=""
					className="rounded-lg md:w-[250px] w-[200px] mt-25"
				/>
			</motion.div>

			{/* Heading */}
			<motion.h1
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1, delay: 0.4 }}
				className="text-white md:text-4xl text-3xl antialiased text-center md:w-[45%] w-[70%]"
			>
				Hi 👋, I'm Harshal Margaj
			</motion.h1>

			{/* Gradient Text with Animation */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: false }}
				transition={{ duration: 1, delay: 0.6 }}
				className="bg-gradient-to-r from-purple-500 via-slate-200 to-purple-600 bg-clip-text text-2xl tracking-tight text-transparent text-center md:w-[45%] w-[70%]"
			>
				Frontend Developer
			</motion.div>

			{/* Description */}
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: false }}
				transition={{ duration: 1, delay: 0.8 }}
				className="text-lg text-white antialiased text-center md:w-[45%] w-[70%]"
			>
				I’m a passionate Front-End Developer specializing in building
				fast, scalable, and user-friendly web applications. I have
				hands-on experience with{" "}
				<span className="text-purple-400 antialiased">
					React, Next.js, Redux, Tailwind CSS, Git, and GitHub
				</span>
				. I love crafting seamless UI/UX experiences and turning ideas
				into reality with clean, maintainable code.
			</motion.div>
		</motion.div>
	);
};

export default HeroSection;

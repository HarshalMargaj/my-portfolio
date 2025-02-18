import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { RiReactjsFill, RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { AiOutlinePython } from "react-icons/ai";
import { FaGit, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiRedux } from "react-icons/si";

const techStack = [
	{ icon: <RiReactjsFill className="text-cyan-500" />, name: "React" },
	{ icon: <RiNextjsLine className="text-white" />, name: "Next.js" },
	{ icon: <AiOutlinePython className="text-yellow-500" />, name: "Python" },
	{ icon: <RiTailwindCssFill className="text-blue-400" />, name: "Tailwind" },
	{
		icon: <IoLogoJavascript className="text-yellow-300" />,
		name: "JavaScript",
	},
	{ icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
	{ icon: <FaCss3 className="text-blue-400" />, name: "CSS3" },
	{ icon: <FaGit className="text-red-500" />, name: "Git" },
	{ icon: <FaGithub className="text-gray-100" />, name: "GitHub" },
	{ icon: <SiRedux className="text-purple-400" />, name: "Redux" },
];

const Technologies = ({ theme }) => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 md:h-[600px] h-[400px]">
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className={`${theme ? "text-white" : "text-gray-900"} text-4xl`}
			>
				Technologies
			</motion.h1>

			<div className="py-4 md:w-[60%] w-[80%]">
				<Marquee
					gradient={false}
					speed={50}
					className="flex gap-8 h-[150px]"
				>
					<div className="flex space-x-10">
						{techStack.map((tech, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.2, rotate: 10 }}
								whileTap={{ scale: 0.9 }}
								className="flex flex-col items-center gap-2 cursor-pointer"
							>
								{React.cloneElement(tech.icon, { size: 50 })}
								<span
									className={`text-xs ${
										theme
											? "text-gray-300"
											: "text-purple-950"
									}`}
								>
									{tech.name}
								</span>
							</motion.div>
						))}
					</div>
				</Marquee>
			</div>
		</div>
	);
};

export default Technologies;

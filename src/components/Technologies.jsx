// import React from "react";
// import Marquee from "react-fast-marquee";
// import { RiReactjsFill } from "react-icons/ri";
// import { RiNextjsLine } from "react-icons/ri";
// import { AiOutlinePython } from "react-icons/ai";
// import { FaGit } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { SiRedux } from "react-icons/si";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3 } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io";

// const Technologies = () => {
// 	return (
// 		<div className="flex justify-center items-center flex-col gap-8 h-[500px]">
// 			<div className="text-white text-4xl">Technologies</div>
// 			<div className=" py-4 md:w-[60%] w-[80%]">
// 				<Marquee gradient={false} speed={50} className="flex gap-8">
// 					<div className="flex space-x-10">
// 						<RiReactjsFill className="text-cyan-500" size={50} />
// 						<RiNextjsLine className="text-white" size={50} />
// 						<AiOutlinePython
// 							className="text-yellow-500"
// 							size={50}
// 						/>
// 						<RiTailwindCssFill
// 							className="text-blue-400"
// 							size={50}
// 						/>
// 						<IoLogoJavascript
// 							className="text-yellow-300"
// 							size={50}
// 						/>
// 						<FaHtml5 className="text-blue-400" size={50} />
// 						<FaCss3 className="text-cyan-500" size={50} />
// 						<FaGit className="text-gray-100" size={50} />
// 						<FaGithub className="text-gray-100" size={50} />
// 						<SiRedux className="text-purple-400" size={50} />
// 					</div>
// 				</Marquee>
// 			</div>
// 		</div>
// 	);
// };

// export default Technologies;
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

const Technologies = () => {
	return (
		<div className="flex flex-col items-center justify-center gap-8 h-[600px]">
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				className="text-white text-4xl"
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
								<span className="text-xs text-gray-300">
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

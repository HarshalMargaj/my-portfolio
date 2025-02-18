import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

const Contact = ({ theme }) => {
	return (
		<div
			className={`h-[500px] flex flex-col justify-center items-center ${
				theme ? "text-white" : "text-purple-950"
			} gap-8`}
		>
			{/* Heading with Animation */}
			<motion.h1
				initial={{ opacity: 0, y: -30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1 }}
				viewport={{ once: false }}
				className={`text-4xl ${theme ? "text-white" : "text-gray-900"}`}
			>
				Get in Touch
			</motion.h1>

			{/* Contact Info Container */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.3 }}
				viewport={{ once: false }}
				className="text-center flex flex-col gap-4 text-lg justify-center items-center md:w-[60%] w-[80%]"
			>
				{/* Location */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="flex md:items-center items-start md:gap-4 gap-1"
				>
					<TiLocation size={25} />
					Bungalow No. 38, Siddhivinayak Soc., Indiranagar,
					Nashik-422009
				</motion.div>

				{/* Phone & Email */}
				<motion.div
					whileHover={{ scale: 1.05 }}
					className="md:flex flex flex-col items-center gap-4"
				>
					<div className="flex items-center gap-4">
						<FaPhoneAlt />
						+91 8275842114
					</div>
					<span className="hidden md:text-purple-400">|</span>
					<div className="flex items-center gap-4">
						<IoMdMail /> harshal.margaj12@gmail.com
					</div>
				</motion.div>

				{/* Social Links with Hover Effects */}
				<div className="flex items-center gap-4 text-white text-2xl">
					{[
						{
							icon: <FaInstagram />,
							link: "https://www.instagram.com/harshal.margaj/",
						},
						{
							icon: <FaGithub />,
							link: "https://github.com/HarshalMargaj",
						},
						{
							icon: <FaLinkedin />,
							link: "https://www.linkedin.com/in/harshal-margaj/",
						},
						{
							icon: <SiLeetcode />,
							link: "https://leetcode.com/u/Harshal_Margaj/",
						},
					].map(({ icon, link }, index) => (
						<motion.a
							key={index}
							href={link}
							target="_blank"
							rel="noopener noreferrer"
							whileHover={{ scale: 1.2, rotate: 10 }}
							whileTap={{ scale: 0.9 }}
							className="hover:text-purple-400 transition-all duration-300"
						>
							{icon}
						</motion.a>
					))}
				</div>
			</motion.div>
		</div>
	);
};

export default Contact;

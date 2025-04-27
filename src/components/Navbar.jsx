import React, { useState, useEffect } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoMoonOutline, IoMenu, IoClose } from "react-icons/io5";

const Navbar = ({ theme, setTheme }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolling(true);
			} else {
				setScrolling(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const menus = [
		{ id: 1, menu: "Home", path: "home" },
		{ id: 2, menu: "About", path: "about" },
		{ id: 3, menu: "Experience", path: "experience" },
		{ id: 4, menu: "Projects", path: "projects" },
		{ id: 5, menu: "Contact", path: "contact" },
		{ id: 6, menu: "Download CV", path: "" },
	];

	const handleTheme = () => {
		setTheme(!theme);
	};

	const handleScroll = id => {
		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: "smooth" });
			setIsOpen(false); // Close mobile menu after clicking
		}
	};

	return (
		<div
			className={`fixed top-0 left-0 backdrop-blur-2xl w-full flex justify-between items-center px-6 py-4 md:px-20 ${
				theme ? "text-white" : "text-gray-900"
			} ${scrolling ? "bg-white/5" : ""}`}
		>
			<h1 className="text-2xl md:text-4xl">
				<span
					className={`${
						theme ? "text-purple-400" : "text-purple-600"
					}`}
				>
					H
				</span>
				M
			</h1>

			{/* Desktop Menu */}
			<div
				className={`hidden md:flex items-center gap-6 ml-50 ${
					scrolling ? "" : "bg-white/5"
				} p-4 rounded-4xl `}
			>
				{menus.map(menu => (
					<div
						key={menu.id}
						onClick={() => handleScroll(menu.path)}
						className={`cursor-pointer ${
							menu.menu === "Download CV"
								? `bg-purple-600 px-3 py-1 rounded-2xl hover:bg-purple-700 shadow-purple-400 ${
										!theme ? "text-white" : ""
								  }`
								: "hover:text-purple-400"
						}`}
					>
						{menu.menu === "Download CV" ? (
							<a
								href="/CV_Harshal_Margaj.pdf"
								download="CV_Harshal_Margaj.pdf"
								// className="your-button-styles"
							>
								{menu.menu}
							</a>
						) : (
							menu.menu
						)}
					</div>
				))}
			</div>

			{/* Socials + Theme Toggle */}
			<div className="hidden md:flex items-center gap-4 text-2xl">
				<a
					href="https://www.instagram.com/harshal.margaj/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaInstagram />
				</a>
				<a
					href="https://github.com/HarshalMargaj"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub />
				</a>
				<a
					href="https://www.linkedin.com/in/harshal-margaj/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin />
				</a>
				<a
					href="https://leetcode.com/u/Harshal_Margaj/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<SiLeetcode />
				</a>
			</div>
			<IoMoonOutline
				className="hidden md:block cursor-pointer"
				size={25}
				onClick={handleTheme}
			/>

			{/* Mobile Menu Toggle */}
			<button
				className="md:hidden text-3xl"
				onClick={() => setIsOpen(!isOpen)}
			>
				{isOpen ? <IoClose /> : <IoMenu />}
			</button>

			{/* Mobile Sidebar Menu */}
			<div
				className={`fixed top-0 right-0 h-20 w-64 bg-purple-600 shadow-lg transition-transform transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<button
					className="absolute top-4 right-4 text-3xl"
					onClick={() => setIsOpen(false)}
				>
					<IoClose />
				</button>
				<div className="flex flex-col items-center gap-6 mt-15.5 bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] w-64 py-4">
					{menus.map(menu => (
						<div
							key={menu.id}
							onClick={() => handleScroll(menu.path)}
							className={`cursor-pointer text-xl ${
								menu.menu === "Hire me"
									? "bg-purple-600 px-3 py-2 rounded-lg hover:bg-purple-700 shadow-purple-400"
									: "hover:text-purple-400"
							}`}
						>
							{menu.menu}
						</div>
					))}
					<div className="flex gap-4 text-2xl mt-6">
						<a
							href="https://www.instagram.com/harshal.margaj/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
						<a
							href="https://github.com/HarshalMargaj"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
						<a
							href="https://www.linkedin.com/in/harshal-margaj/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
						<a
							href="https://leetcode.com/u/Harshal_Margaj/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<SiLeetcode />
						</a>
					</div>
					<IoMoonOutline
						className="text-white mt-4"
						size={25}
						onClick={handleTheme}
					/>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
	const [theme, setTheme] = useState(true);

	return (
		<div className="overflow-x-hidden">
			<div className="fixed top-0 left-0 -z-10">
				{theme ? (
					<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
				) : (
					<div className="absolute inset-0 -z-10 h-screen w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
						<div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
					</div>
				)}
			</div>
			<Navbar theme={theme} setTheme={setTheme} />

			{/* Sections with IDs */}
			<section id="home" className="min-h-screen flex items-center">
				<HeroSection theme={theme} />
			</section>
			<section id="about" className="min-h-screen flex items-center">
				<About theme={theme} />
			</section>
			<section id="experience" className="min-h-screen flex items-center">
				<Experience theme={theme} />
			</section>
			<section id="technologies ">
				<Technologies theme={theme} />
			</section>
			<section id="projects" className="min-h-screen">
				<Projects theme={theme} />
			</section>
			<section id="contact">
				<Contact theme={theme} />
			</section>
		</div>
	);
}

import React from "react";
import Card from "./Card";
import projects from "../data/projects.json";

const Projects = ({ theme }) => {
	return (
		<div className="h-screen flex justify-center items-center flex-col gap-8">
			<h1
				className={`text-4xl ${theme ? "text-white" : "text-gray-900"}`}
			>
				Projects
			</h1>
			{projects.map(project => (
				<Card project={project} key={project.id} theme={theme} />
			))}
		</div>
	);
};

export default Projects;

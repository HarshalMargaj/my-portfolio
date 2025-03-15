import React from "react";
import Card from "./Card";
import projects from "../data/projects.json";

const Projects = ({ theme }) => {
	return (
		<div className="h-full flex justify-center items-center flex-col gap-8">
			<h1
				className={`text-4xl ${theme ? "text-white" : "text-gray-900"}`}
			>
				Projects
			</h1>
			<div className="flex flex-wrap justify-center gap-6">
				{projects.map(project => (
					<Card project={project} key={project.id} theme={theme} />
				))}
			</div>
		</div>
	);
};

export default Projects;

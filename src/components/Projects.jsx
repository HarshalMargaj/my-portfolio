import React from "react";
import Card from "./Card";
import projects from "../data/projects.json";

const Projects = () => {
	return (
		<div className="h-screen flex justify-center items-center flex-col gap-8">
			<h1 className="text-4xl text-white">Projects</h1>
			{projects.map(project => (
				<Card project={project} key={project.id} />
			))}
		</div>
	);
};

export default Projects;

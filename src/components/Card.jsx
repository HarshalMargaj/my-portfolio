import React from "react";

const Card = ({ project }) => {
	return (
		<div className="text-white w-[350px] bg-white/5 flex flex-col gap-4 pb-4 rounded-xl">
			<div>
				<img
					src={project.project_poster}
					alt=""
					className="rounded-t-xl"
				/>
			</div>
			<div className="text-xl px-4">{project.project_name}</div>
			<div className="px-4">{project.project_description}</div>
			<div className="flex gap-4 flex-wrap px-4">
				{project.tech_stack.map((skill, index) => (
					<div
						key={index}
						className="border-1 border-purple-400 text-purple-400 rounded-md p-1 text-sm"
					>
						{skill}
					</div>
				))}
			</div>
			<div className="px-4 w-full flex items-center gap-4">
				<a
					href={project.project_link}
					target="_blank"
					className="w-full"
				>
					<button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md w-full cursor-pointer ">
						Preview
					</button>
				</a>
				<a
					href={project.project_source_code}
					target="_blank"
					className="w-full"
				>
					<button className="bg-purple-500 hover:bg-purple-600 text-white p-2 rounded-md w-full cursor-pointer ">
						Source Code
					</button>
				</a>
			</div>
		</div>
	);
};

export default Card;

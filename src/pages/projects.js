import { graphql } from "gatsby";
import * as React from "react";
import NavbarComponent from "../components/navbar";

// markup
const ProjectsPage = ({ data }) => {
	const projects = data.allDatoCmsProject.nodes;

	projects.sort((projA, projB) => (projA.order > projB.order ? 1 : -1));

	return (
		<main>
			<title>Projects</title>
			<div className="container flex flex-col mx-auto w-screen">
				<NavbarComponent activePage="projects" />
				<div className="container flex flex-row flex-wrap justify-center w-screen h-auto p-5">
					{projects.map((project) => (
						<div
							key={project.order}
							className="container bg-white flex flex-col rounded-md font-black text-black text-center w-full xl:w-45p h-auto p-5 m-5"
						>
							<p className="text-xl xl:text-3xl">
								{project.title}
							</p>
							<p className="text-base xl:text-xl py-3">
								{project.description}
							</p>
							{project.technologies.length > 0 ? (
								<ul className="list-inside list-disc text-left text-base xl:text-xl py-3">
									{project.technologies.split(", ").map((tech) => (
										<li>{tech}</li>
									))}
								</ul>
							) : null}
							<div className="container flex flex-col justify-end flex-grow">
								<p className="text-xs xl:text-base text-left pt-5 pb-3">
									notable achievements
								</p>
								<p
									className="text-base xl:text-xl text-left"
									dangerouslySetInnerHTML={{
										__html: project.achievements.replace(
											"\n",
											"<br />"
										),
									}}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export const query = graphql`
	query ProjectQuery {
		allDatoCmsProject {
			nodes {
				title
				description
				technologies
				achievements
				order
			}
		}
	}
`;

export default ProjectsPage;

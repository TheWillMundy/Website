import { graphql, Link } from "gatsby";
import * as React from "react";
import NavbarComponent from "../../components/navbar";

// markup
const ProjectsPage = ({ data }) => {
	const blogPosts = data.allDatoCmsArticle.nodes;

	// Order by order
	blogPosts.sort((postA, postB) => (postA.order > postB.order ? 1 : -1));

	return (
		<main>
			<title>Will Mundy's Blog</title>
			<div className="container flex flex-col mx-auto w-screen">
				<NavbarComponent activePage="blog" />
				<div className="container flex flex-row flex-wrap justify-center w-screen h-auto p-5">
					{blogPosts.map((blogPost) => {
						const tags = blogPost.tags.map((tag) => tag.title);

						return (
							<Link
								className="w-full xl:w-1/4 m-5 h-auto cursor-pointer"
								to={
									tags.includes("Medium")
										? blogPost.link
										: `/blog/${blogPost.slug}`
								}
								target="_blank"
							>
								<div
									key={blogPost.order}
									className="container bg-white flex flex-col rounded-md font-black text-black h-full p-5"
								>
									<p className="text-3xl text-right">
										{blogPost.title.toLowerCase()}
									</p>
									<div className="container flex flex-col justify-end flex-grow pt-5">
										<p
											className="text-xl text-right text-gray-500"
											dangerouslySetInnerHTML={{
												__html:
													blogPost.descriptionNode
														.childMarkdownRemark
														.html,
											}}
										/>
									</div>
									<div className="flex flex-row justify-between items-baseline pt-3">
										<div className="flex flex-row">
											{tags.map((tag) => (
												<div className="text-xs rounded-xl border-2 border-solid border-blue-300 mx-1 px-3 py-1 lowercase">
													{tag}
												</div>
											))}
										</div>
										<p className="text-base text-right pt-3 pb-3">
											<Link to={`/blog/${blogPost.slug}`}>
												read >>>
											</Link>
										</p>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</main>
	);
};

export const query = graphql`
	query BlogPostsQuery {
		allDatoCmsArticle {
			nodes {
				id
				order
				title
				slug
				link
				tags {
					title
				}
				... on DatoCmsArticle {
					descriptionNode {
						childMarkdownRemark {
							html
						}
					}
				}
			}
		}
	}
`;

export default ProjectsPage;

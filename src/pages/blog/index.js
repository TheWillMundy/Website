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
					{blogPosts.map((blogPost) => (
						<div
							key={blogPost.order}
							className="container bg-white flex flex-col rounded-md font-black text-black w-full xl:w-1/4 h-auto p-5 m-5 cursor-pointer"
						>
							<Link to={`/blog/${blogPost.slug}`}>
								<p className="text-3xl text-right">
									{blogPost.title.toLowerCase()}
								</p>
								<div className="container flex flex-col justify-end flex-grow pt-5">
									<p
										className="text-xl text-right text-gray-500"
										dangerouslySetInnerHTML={{
											__html:
												blogPost.descriptionNode
													.childMarkdownRemark.html,
										}}
									/>
									<div className="flex flex-row justify-between items-baseline pt-3">
										<div className="flex flex-row">
											{blogPost.tags.map((tag) => (
												<div className="text-xs rounded-xl border-2 border-solid border-blue-300 mx-1 px-3 py-1 lowercase">
													{tag.title}
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
						</div>
					))}
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

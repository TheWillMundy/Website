import { graphql } from "gatsby";
import React from "react";
import NavbarComponent from "../components/navbar";

export default function BlogPost({ data }) {
	const title = data.datoCmsArticle.title;
	const description =
		data.datoCmsArticle.descriptionNode.childMarkdownRemark.html;
	const content = data.datoCmsArticle.contentNode.childMarkdownRemark.html;
	const worksCited =
		data.datoCmsArticle.worksCitedNode.childMarkdownRemark.html;

	return (
		<div className="w-screen flex flex-col align-center text-center text-white py-5">
            <NavbarComponent activePage="" />
			<h1 className="font-black text-3xl pt-10">{title}</h1>
			<div className="font-semibold flex flex-row justify-center text-xl text-gray-300 pt-5 px-10">
				<div
					className="max-w-xl"
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</div>
			<div className="font-medium flex flex-col items-center text-left pt-10">
				<p
					className="max-w-2xl bg-white rounded-md text-black pt-3 pb-10 px-10"
					dangerouslySetInnerHTML={{ __html: content }}
				/>
				<p
					className="max-w-2xl bg-white rounded-md text-black my-10 py-10 px-10 leading-snug whitespace-pre-wrap"
					dangerouslySetInnerHTML={{ __html: worksCited }}
				/>
			</div>
		</div>
	);
}

export const query = graphql`
	query($slug: String!) {
		datoCmsArticle(slug: { eq: $slug }) {
			title
			descriptionNode {
				childMarkdownRemark {
					html
				}
			}
			contentNode {
				childMarkdownRemark {
					html
				}
			}
			worksCitedNode {
				childMarkdownRemark {
					html
				}
			}
		}
	}
`;

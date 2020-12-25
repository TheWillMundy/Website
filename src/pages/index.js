import * as React from "react";
import { Link } from "gatsby";
import Triangle from "../components/triangle";

const links = [
	{
		name: "about",
		to: "/about",
	},
	{
		name: "blog",
		to: "/blog",
	},
	{
		name: "contact",
		to: "/contact",
	},
	{
		name: "more",
    to: "/more",
    style: {
      fontStyle: "oblique"
    }
	},
];

// markup
const IndexPage = () => {
	return (
		<main>
			<title>Will Mundy</title>
			<div style={{ position: "relative", height: "100vh" }}>
				<div className="textContainer">
					<h1>will mundy</h1>
					{links.map((link) => (
						<h2>
							<Link style={{...link.style}} to={link.to}>{link.name}</Link>
						</h2>
					))}
				</div>
				<div className="triangleContainer">
					<Triangle />
				</div>
			</div>
		</main>
	);
};

export default IndexPage;

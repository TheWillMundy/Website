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
			fontStyle: "oblique",
		},
	},
];

const lines = [
	"deloitte consultant. open source dev. ml enthusiast.",
	"nj native. singapore ➡️ ️florida ➡️️ houston resident. travel addict.",
	"fluent in english and python. conversational in mandarin and javascript.",
	"frequent stock & options trader. occasional blogger. rare instagrammer.",
	"easy blue skier. v3-4 climber. coffee and crypto connoiseur.",
	"lifelong learner. entrepreneurial doer. tesla fan.",
];

// markup
const IndexPage = () => {
	return (
		<main>
			<title>Will Mundy</title>
			<div className="container flex flex-col w-screen mx-auto text-center font-black text-white">
				<div className="container my-5">
					<p className="text-base md:text-xl m-2">everything to know about</p>
					<p className="text-6xl md:text-9xl m-2">will mundy</p>
					<p className="text-base md:text-xl m-2">in 30 seconds</p>
				</div>
				<div className="container text-base xl:text-xl px-5 xl:px-0">
					<p className="my-3">deloitte consultant. open source dev. <span className="text-red-300">ml</span> enthusiast.</p>
					<p className="my-3">nj native. singapore ➡️ ️florida ➡️️ houston resident. <span className="text-light-blue">travel</span> addict.</p>
					<p className="my-3">fluent in english and <span className="text-light-yellow">python</span>. conversational in mandarin and <span className="text-light-green">javascript</span>.</p>
					<p className="my-3">frequent stock & options trader. <span className="text-pink-300">occasional</span> blogger. rare instagrammer.</p>
					<p className="my-3">easy <span className="text-light-blue">blue</span> skier. v3-4 climber. coffee and <span className="text-light-orange">crypto</span> connoiseur.</p>
					<p className="my-3">lifelong learner. entrepreneurial <span className="text-light-green">doer</span>. tesla fan.</p>
					<p className="my-5 italic">want more? here’s what i’m <span className="underline">reading</span> & <span className="underline">watching</span> :)</p>
				</div>
			</div>
		</main>
	);
};

export default IndexPage;

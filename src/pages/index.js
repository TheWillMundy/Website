import { Link } from "gatsby";
import * as React from "react";

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
					<p className="my-3">incoming consultant. open source <Link to="/projects" className="underline text-red-300">dev</Link>. ml enthusiast.</p>
					<p className="my-3">nj native. singapore ➡️ florida ➡️ houston resident. <span className="text-light-blue">travel</span> addict.</p>
					<p className="my-3">fluent in english and <span className="text-light-yellow">python</span>. conversational in mandarin and <span className="text-light-green">javascript</span>.</p>
					<p className="my-3">frequent stock & options trader. occasional <Link to="/blog" className="text-pink-300 underline">writer</Link>. rare instagrammer.</p>
					<p className="my-3">easy <span className="text-light-blue">blue</span> skier. v3-4 climber. coffee and <span className="text-light-orange">crypto</span> connoiseur.</p>
					<p className="my-3">lifelong learner. entrepreneurial <span className="text-light-green">doer</span>. tesla fan.</p>
					<p className="my-5 italic">want more? here’s what i’m <span className="underline">reading</span> & <span className="underline">watching</span> :)</p>
				</div>
			</div>
		</main>
	);
};

export default IndexPage;

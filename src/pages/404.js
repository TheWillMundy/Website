import * as React from "react";
import { Link } from "gatsby";
import NavbarComponent from "../components/navbar";

// markup
const NotFoundPage = () => {
	return (
		<main>
			<title>Oh no it's a 404!</title>
			<NavbarComponent activePage="" />
			<div className="w-screen flex flex-col justify-center items-center text-center pt-20 px-10">
				<p className="font-black text-white text-3xl">
					Sorry{" "}
					<span role="img" aria-label="Pensive emoji">
						😔
					</span>{" "}
					we couldn’t find what you were looking for.
					<br />
					<Link to="/" className="underline">Go home</Link>.
				</p>
			</div>
		</main>
	);
};

export default NotFoundPage;

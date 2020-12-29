import { Link } from "gatsby";
import * as React from "react";

// markup
const NavbarComponent = ({ activePage }) => {
    const pages = ["home", "projects", "blog"];

	return (
		<div className="flex flex-row items-baseline">
			{pages.map((page) =>
				page == activePage ? (
					<p className="font-black text-3xl lg:text-6xl text-white pt-5 px-5">
						{activePage}
					</p>
				) : (
					<Link to={`/${page != "home" ? page : ''}`} className="font-medium text-xl text-white pt-5 px-5">{page}</Link>
				)
			)}
		</div>
	);
};

export default NavbarComponent;

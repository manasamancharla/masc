import React from "react";

import "./Header.css";
import CTA from "./CTA";
import Social from "./Socials";

function Header() {
	return (
		<header>
			<section className="container header_container">
				<h5>Hello I'm</h5>
				<h1>Manas </h1>
				<h5 className="text-light">Frontend Developer</h5>
				<CTA />
				<Social />

				<div className="me"></div>

				<a href="#contact" className="scroll_down">
					Scroll Down
				</a>
			</section>
		</header>
	);
}

export default Header;

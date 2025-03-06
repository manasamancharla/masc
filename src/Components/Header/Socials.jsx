import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

function Socials() {
	return (
		<div className="header_socials">
			<a
				href="https://www.linkedin.com/in/manas-amancharla-08b844240/"
				target="_blank"
			>
				<BsLinkedin />
			</a>
			<a href="https://github.com/manasamancharla" target="_blank">
				<BsGithub />
			</a>
			<a href="https://twitter.com/ManasAmancharla" target="_blank">
				<BsTwitterX />
			</a>
		</div>
	);
}

export default Socials;

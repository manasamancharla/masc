import React from "react";

import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";

import "./Footer.css";

function Footer() {
	return (
		<footer>
			<a href="#" className="footer_logo">
				Manas Amancharla
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>

			<div className="footer_socials">
				<a href="https://www.linkedin.com/in/manas-amancharla-08b844240/">
					<BsLinkedin />
				</a>
				<a href="https://github.com/manasamancharla">
					<BsGithub />
				</a>
				<a href="https://twitter.com/ManasAmancharla">
					<BsTwitterX />
				</a>
			</div>
			<div className="footer_copyright">
				<small>&copy; All rights reserved.</small>
			</div>
		</footer>
	);
}

export default Footer;

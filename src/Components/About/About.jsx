import React from "react";

import "./About.css";

function About() {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-image">
						<img
							src={
								"https://demomanas.s3.ap-southeast-2.amazonaws.com/Picture.jpg"
							}
							alt="About Image"
						/>
					</div>
				</div>
				<div className="about_content">
					<p>
						Hi there! My name is Manas, and I'm a web developer from Hyderabad,
						India. I've always been interested in technology and design, and I
						decided to pursue a career in web development to combine those
						passions.
						<br />
						<br />I have experience with HTML, CSS, JavaScript, and React, and
						I've worked on several projects using those technologies.When I'm
						not working on web development, I enjoy cycling, playing football,
						and watching movies.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
}

export default About;

import React from "react";
import "./index.css";

import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<div>
			<Banner />
			<Header />
			<Nav />
			<About />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;

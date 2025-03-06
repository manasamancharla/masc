import { useState } from "react";
import { IoClose } from "react-icons/io5";
import "./Banner.css";

function Banner() {
	const [visible, setVisible] = useState(true);

	if (!visible) return null;

	return (
		<div className="banner">
			<p>I'm working on a brand-new portfolio. Stay tuned!</p>
			<button className="close-btn" onClick={() => setVisible(false)}>
				<IoClose />
			</button>
		</div>
	);
}

export default Banner;

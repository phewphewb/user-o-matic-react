import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const footer = () => (
	<footer className="footer">
		<span>
			<strong>
				<Link to="/">User App</Link>
			</strong>{" "}
			by Valentyn Patsera. All Rights Reserved.
		</span>
	</footer>
);
export default footer;

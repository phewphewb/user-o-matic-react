import React from "react";
import "./Backdrop.scss";

const backdrop = ({ onClick }) => {
	return <div id="backdrop" className="backdrop" onClick={onClick} />;
};
export default backdrop;

import React from "react";
import "./Avatar.scss";

export default function Avatar({ imageUrl }) {
	return (
		<div className="avatar">
			<img alt="user-avatar" src={imageUrl} />
		</div>
	);
}

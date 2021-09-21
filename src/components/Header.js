import React from "react";
import github from "../images/github_logo.png";

const Header = () => {
	return (
		<header>
			<div className="logo">
				<h1 className="logo__heading">GitHub Profile</h1>
				<img className="logo__image" src={github} alt="github" />
			</div>
		</header>
	);
};

export default Header;

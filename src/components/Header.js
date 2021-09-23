import React from "react";
import { Link } from "react-router-dom";
import github from "../images/github_logo.png";

const Header = ({ goToHome, isToggled, handleIsToggled }) => {
	return (
		<header>
			<Link to="/" onClick={goToHome} className="logoLink">
				<div className="logo">
					<h1 className="logo__heading">GitHub Profile</h1>
					<img className="logo__image" src={github} alt="github" />
				</div>
			</Link>
			<i
				className={`fas ${!isToggled ? "fa-sun" : "fa-sun hide"}`}
				onClick={handleIsToggled}
			></i>
			<i
				className={`fas ${isToggled ? "fa-moon" : "fa-moon hide"}`}
				onClick={handleIsToggled}
			></i>
		</header>
	);
};

export default Header;

import React from "react";

const GithubProfile = () => {
	return (
		<main>
			<div className="inputUserContainer">
				<form>
					<i class="fas fa-search"></i>
					<input
						type="text"
						className="inputUser"
						placeholder="Search Github username_"
					/>
					<button className="search">Search</button>
				</form>
			</div>
			<div className="githubProfile">
				<div>
					<img
						src="https://source.unsplash.com/random"
						alt="random"
						className="random"
					/>
					<div>
						<h2>Fidel Lim</h2>
						<h3>fidellim</h3>
						<h3>Joined 25 Jan 2011</h3>
					</div>
				</div>
				<div className="stats">
					<div className="stat">
						<h4>Repos</h4>
						<p>8</p>
					</div>
					<div className="stat">
						<h4>Followers</h4>
						<p>3938</p>
					</div>
					<div className="stat">
						<h4>Following</h4>
						<p>9</p>
					</div>
				</div>
				<h2>Project/s</h2>
				<div className="projects">
					<div className="project">Project1</div>
					<div className="project">Project1</div>
					<div className="project">Project1</div>
				</div>
			</div>
		</main>
	);
};

export default GithubProfile;

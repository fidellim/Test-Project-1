import React from "react";
import { Link } from "react-router-dom";

const GithubProfile = ({
	query,
	data,
	repos,
	userCreation,
	handleSearch,
	updateSearch,
	user,
	isUserExist,
	handleRepo,
}) => {
	const getMonth = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"June",
		"July",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	return (
		<main>
			<div className="inputUserContainer">
				<form>
					<i className="fas fa-search"></i>
					<input
						type="text"
						className="inputUser"
						placeholder="Github username"
						value={user}
						onChange={updateSearch}
					/>

					<button className="search" onClick={handleSearch}>
						Search
					</button>
				</form>
			</div>
			{isUserExist === "true" && query && (
				<div className="githubProfile">
					<div>
						<img
							src={
								data.avatar_url
									? data.avatar_url
									: "https://source.unsplash.com/random"
							}
							alt={data.name ? data.name : data.login}
							className="githubProfileImage"
						/>
						<div>
							<h2>{data.name ? data.name : data.login}</h2>
							<h3>
								Joined{" "}
								{`${userCreation.day} ${getMonth[userCreation.month]} ${
									userCreation.year
								}`}
							</h3>
						</div>
					</div>
					<div className="stats">
						<div className="stat">
							<h4>Repos</h4>
							<p>{data.public_repos}</p>
						</div>
						<div className="stat">
							<h4>Followers</h4>
							<p>{data.followers}</p>
						</div>
						<div className="stat">
							<h4>Following</h4>
							<p>{data.following}</p>
						</div>
					</div>
					<h2>Project/s</h2>
					<div className="projects">
						{repos.map((repo) => {
							return (
								<Link
									key={repo.name}
									to={`/${data.login}/${repo.name}`}
									onClick={() => handleRepo(repo.name)}
								>
									<div className="project">
										<p>{repo.name}</p>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			)}
			{isUserExist === "false" && query && (
				<div className="githubError">
					<h1>This Github Profile doesn't exist.</h1>
				</div>
			)}
		</main>
	);
};

export default GithubProfile;

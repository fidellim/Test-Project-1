import React from "react";
import { Link } from "react-router-dom";

const GithubProfile = ({
	query,
	data,
	repos,
	userCreation,
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
		<main data-testid="main">
			{isUserExist === "true" && query && (
				<div className="githubProfile" data-testid="githubProfile">
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
				<div className="githubError" data-testid="noGithubProfile">
					<h1>This Github Profile doesn't exist.</h1>
				</div>
			)}
		</main>
	);
};

export default GithubProfile;

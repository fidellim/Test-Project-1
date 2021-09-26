import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Octokit } from "@octokit/core";

const RepoInfo = ({ repoName, user }) => {
	const [repoData, setRepoData] = useState({});
	const [contributors, setContributors] = useState([]);
	const { name, description, html_url } = repoData;
	const [desc, setDesc] = useState("");
	const [commits, setCommits] = useState({});

	useEffect(() => {
		const apiRepo = `https://api.github.com/repos/${user}/${repoName}`;
		const apiRepoContributors = `https://api.github.com/repos/${user}/${repoName}/contributors`;
		// use to fetch commits
		const octokit = new Octokit({
			auth: "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",
		});

		const getRepoData = async () => {
			const response = await fetch(apiRepo);

			if (response.ok) {
				const data = await response.json();
				setRepoData(data);

				// check if there is description
				if (data.description) {
					let myDataDesc = data.description.split(" ");
					setDesc(descChecker(myDataDesc));

					getRepoContributors();
				}
			}
		};

		const getRepoContributors = async () => {
			const response = await fetch(apiRepoContributors);

			if (response.ok) {
				const data = await response.json();
				setContributors(data);

				getCommits();
			}
		};

		const getCommits = async () => {
			const response = await octokit.request(
				"GET /repos/{owner}/{repo}/commits",
				{
					owner: user,
					repo: repoName,
					per_page: 100,
				}
			);

			// if author name is not a key create
			// and increment value once it occurs again
			setCommits(
				response.data.reduce((acc, currentValue) => {
					if (!acc[currentValue["author"]["login"]]) {
						acc[currentValue["author"]["login"]] = 0;
					}
					acc[currentValue["author"]["login"]] += 1;
					return acc;
				}, {})
			);
		};

		getRepoData();
	}, [repoName]);

	const descChecker = (arr) => {
		if (arr.length > 50) {
			// remove all words after word 50
			let newStr = arr.splice(0, 50).join(" ");
			newStr += "...";
			return newStr;
		}
		//return same desc if word count < 50
		return arr.join(" ");
	};

	return (
		<main data-testid="repoInfoMain">
			{user && (
				<div data-testid="repoInfo">
					<Link to="/">
						<button className="backBtn">
							<i className="fas fa-chevron-left"></i> Back
						</button>
					</Link>
					<div className="repoInfoContainer">
						<h1>{name}</h1>
						{description && <p>{desc}</p>}
						{!description && <p>No description</p>}
						<h3>Contributor/s</h3>
						<div className="repoContributors">
							{contributors.map((contributor) => {
								return (
									<a
										key={contributor.login}
										href={contributor.html_url}
										target="_blank"
										rel="noreferrer"
									>
										<button className="repoContributor">
											<h3>{contributor.login}</h3>
											<hr />
											<h3>
												Commits:
												<span> {commits[contributor.login]}</span>
											</h3>
										</button>
									</a>
								);
							})}
						</div>
						<button className="repoLink">
							<a href={html_url} target="_blank" rel="noreferrer">
								GitHub Repo
							</a>
						</button>
					</div>
				</div>
			)}
		</main>
	);
};

export default RepoInfo;

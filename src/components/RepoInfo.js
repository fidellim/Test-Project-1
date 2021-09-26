import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const RepoInfo = ({ repoName, user }) => {
	const [repoData, setRepoData] = useState({});
	const [contributors, setContributors] = useState([]);
	const { name, description, html_url } = repoData;
	const [desc, setDesc] = useState("");

	useEffect(() => {
		const apiRepo = `https://api.github.com/repos/${user}/${repoName}`;
		const apiRepoContributors = `https://api.github.com/repos/${user}/${repoName}/stats/contributors`;

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
			}
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
						{contributors && <h3>Contributor/s</h3>}
						<div className="repoContributors">
							{Array.isArray(contributors) &&
								contributors.map((contributor) => {
									return (
										<a
											key={contributor.author.login}
											href={contributor.author.html_url}
											target="_blank"
											rel="noreferrer"
										>
											<button className="repoContributor">
												<h3>{contributor.author.login}</h3>
												<hr />
												<h3>
													Commits:
													<span> {contributor.total}</span>
												</h3>
											</button>
										</a>
									);
								})}
							{!Array.isArray(contributors) && (
								<p>There are no contributor/s</p>
							)}
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

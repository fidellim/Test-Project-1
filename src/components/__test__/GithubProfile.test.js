import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import GithubProfile from "../GithubProfile";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

const user = {
	login: "fidellim",
	avatar_url: "https://avatars.githubusercontent.com/u/26820513?v=4",
	url: "https://api.github.com/users/fidellim",
	html_url: "https://github.com/fidellim",
	public_repos: 47,
	public_gists: 0,
	followers: 4,
	following: 6,
	created_at: "2017-03-31T15:06:52Z",
};

const repos = [
	{
		name: "3-Column-Preview-Card-Component",
	},
];

const userCreation = {
	month: 2,
	day: 6,
	year: 2017,
};

const handleRepo = (repo) => {
	return repo;
};

test("Displays github profile if data exists", () => {
	render(
		// add router component bc it keeps causing error
		<Router>
			<GithubProfile
				query="fidellim"
				data={user}
				repos={repos}
				isUserExist="true"
				userCreation={userCreation}
				handleRepo={handleRepo}
			/>
		</Router>
	);

	const githubProfile = screen.getByTestId("githubProfile");
	// checks if it exists
	expect(githubProfile).toBeInTheDocument();
});

test("Github Profile doesn't exist", () => {
	render(
		<Router>
			<GithubProfile
				query="asdaefzxczx"
				data={user}
				repos={repos}
				isUserExist="false"
				userCreation={userCreation}
				handleRepo={handleRepo}
			/>
		</Router>
	);

	// get element with data-test-id = noGithubProfile
	const noGithubProfile = screen.getByTestId("noGithubProfile");
	// checks if it exists
	expect(noGithubProfile).toBeInTheDocument();
});

test("No input in searchbar", () => {
	render(
		<Router>
			<GithubProfile />
		</Router>
	);

	const main = screen.getByTestId("main");
	// checks if it exists
	expect(main).not.toContainHTML("<div>");
});

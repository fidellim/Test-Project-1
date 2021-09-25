import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import RepoInfo from "../RepoInfo";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

// checks if component will render
test("Show RepoInfo with information", () => {
	render(
		<Router>
			<RepoInfo repoName="Test-Project-1" user="fidellim" />
		</Router>
	);

	const repoInfo = screen.getByTestId("repoInfo");
	// checks if it exists
	expect(repoInfo).toBeInTheDocument();
});

// checks if component will render
test("Show RepoInfo without information", () => {
	render(
		<Router>
			<RepoInfo repoName="Test-Project-1" user="" />
		</Router>
	);

	const repoInfoMain = screen.getByTestId("repoInfoMain");
	// checks if it exists
	expect(repoInfoMain).not.toContainHTML("<div>");
});

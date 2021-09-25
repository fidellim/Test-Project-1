import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

// Check if App will render at the start
test("Renders App", () => {
	render(<App />);

	const githubTitle = screen.getByText(/GitHub Profile/i);
	const githubPlaceholder = screen.getByPlaceholderText(/Github username/i);
	const githubBtnName = screen.getByText(/Search/i);

	// check if these texts exist
	expect(githubTitle).toBeInTheDocument();
	expect(githubPlaceholder).toBeInTheDocument();
	expect(githubBtnName).toBeInTheDocument();
});

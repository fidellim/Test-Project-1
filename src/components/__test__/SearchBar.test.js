import { render, screen, cleanup } from "@testing-library/react";
import SearchBar from "../SearchBar";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

// checks if input element will have placeholder and empty value
test("Renders Input", () => {
	render(<SearchBar />);
	// get element with data-test-id = inputUser
	const inputUserEl = screen.getByTestId("inputUser");
	const githubPlaceholder = screen.getByPlaceholderText(/Github username/i);
	// checks if it exists
	expect(inputUserEl).toBeInTheDocument();
	//checks if it has empty value
	expect(inputUserEl).toHaveTextContent("");
	expect(githubPlaceholder).toBeInTheDocument();
});

import { render, screen, cleanup } from "@testing-library/react";
import SearchBar from "../SearchBar";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

// checks if component will render
test("Renders Input", () => {
	render(<SearchBar />);
	// get element with data-test-id = inputUser
	const inputUserEl = screen.getByTestId("inputUser");
	// checks if it exists
	expect(inputUserEl).toBeInTheDocument();
	expect(inputUserEl).toHaveTextContent("");
});

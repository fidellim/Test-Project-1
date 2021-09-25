import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header";

// after each test, do a cleanup
afterEach(() => {
	cleanup();
});

// checks if component will render
test("Renders Title", () => {
	render(
		<Router>
			<Header />
		</Router>
	);
	// get element with data-test-id = inputUser
	const title = screen.getByText(/GitHub Profile/i);
	// checks if it exists
	expect(title).toBeInTheDocument();
});

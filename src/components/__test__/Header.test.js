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

	const title = screen.getByText(/GitHub Profile/i);
	const sun = screen.getByTestId("sun");
	// checks if it exists
	expect(title).toBeInTheDocument();
	expect(sun).toBeInTheDocument();
});

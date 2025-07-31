import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import App from "./app";

test("app", () => {
	render(<App />);

	const input = screen.getByText(/hello world/i);

	expect(input).toBeTruthy();
});

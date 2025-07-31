import App from "./app";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("app", () => {
	render(<App />);

	const input = screen.getByText(/hello world/i);

	expect(input).toBeTruthy();
});

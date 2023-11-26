import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders Home page", () => {
  render(<Home />);
  const homeElement = screen.getByText(/Home Page/i);
  expect(homeElement).toBeInTheDocument();
});

import React from "react";
import { render, screen } from "@testing-library/react";
import UserListPage from "./UserListPage";

test("renders User List page", () => {
  render(<UserListPage />);
  const userListElement = screen.getByText(/User List Page/i);
  expect(userListElement).toBeInTheDocument();
});

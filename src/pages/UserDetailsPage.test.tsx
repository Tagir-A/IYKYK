import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetailsPage from "./UserDetailsPage";
import { MemoryRouter, Routes, Route } from "react-router-dom";

test("renders User Details page with user ID", () => {
  render(
    <MemoryRouter initialEntries={["/user-details/123"]}>
      <Routes>
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

  const userDetailsElement = screen.getByText(
    /User Details Page for user with ID: 123/i
  );
  expect(userDetailsElement).toBeInTheDocument();
});

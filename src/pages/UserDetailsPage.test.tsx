import React from "react";
import { render, screen } from "@testing-library/react";
import UserDetailsPage from "./UserDetailsPage";
import { MemoryRouter, Routes, Route } from "react-router-dom";

const MOCK = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

test("renders User Details page with user ID", () => {
  render(
    <MemoryRouter
      initialEntries={[{ pathname: "/user-details/1", state: { user: MOCK } }]}
    >
      <Routes>
        <Route path="/user-details/:id" element={<UserDetailsPage />} />
      </Routes>
    </MemoryRouter>
  );

  // Assertions
  const userDetailsHeading = screen.getByText(/User Details Page/i);
  expect(userDetailsHeading).toBeInTheDocument();

  const userName = screen.getByText(MOCK.name);
  expect(userName).toBeInTheDocument();

  const userEmail = screen.getByText(`Email: ${MOCK.email}`);
  expect(userEmail).toBeInTheDocument();

  // not checking age, since it's runtime generated

  const userAddress = screen.getByText(
    `Address: ${MOCK.address.street}, ${MOCK.address.suite}, ${MOCK.address.city}, ${MOCK.address.zipcode}`
  );
  expect(userAddress).toBeInTheDocument();

  const backLink = screen.getByRole("link", { name: /Back to User List/i });
  expect(backLink).toBeInTheDocument();
});

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";

test("renders home page with tasks and user list link", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  // Assertions
  const homeHeading = screen.getByText(/Home Page/i);
  expect(homeHeading).toBeInTheDocument();

  const tasksHeading = screen.getByText(/Tasks/i);
  expect(tasksHeading).toBeInTheDocument();

  const initialTask = await screen.findByText(/delectus aut autem/i);
  expect(initialTask).toBeInTheDocument();

  const userLink = screen.getByRole("link", { name: /Go to User List/i });
  expect(userLink).toBeInTheDocument();
});

test("adds and deletes tasks", async () => {
  render(
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MemoryRouter>
  );

  // Add a task
  const taskInput = screen.getByPlaceholderText(/Enter a new task/i);
  fireEvent.change(taskInput, { target: { value: "New Task" } });
  const addTaskButton = screen.getByText(/Add Task/i);
  fireEvent.click(addTaskButton);

  // Assertions after adding a task
  const newTask = await screen.findByText(/New Task/i);
  expect(newTask).toBeInTheDocument();

  // Delete the task
  const deleteButton = screen.getByText(/Delete/i);
  fireEvent.click(deleteButton);

  // Assertions after deleting the task
  const deletedTask = screen.queryByText(/New Task/i);
  expect(deletedTask).not.toBeInTheDocument();
});

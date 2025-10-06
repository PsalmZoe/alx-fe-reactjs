import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList.jsx";

describe("TodoList Component", () => {
  test("renders initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Write tests")).toBeInTheDocument();
  });

  test("adds a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("New Todo");
    const addButton = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "New Todo Item" } });
    fireEvent.click(addButton);

    expect(screen.getByText("New Todo Item")).toBeInTheDocument();
  });

  test("toggles todo completion", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React").closest("li"); // fixed: target li

    // Initially not completed
    expect(todoItem).toHaveStyle("text-decoration: none");

    fireEvent.click(todoItem);

    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText("Delete");

    fireEvent.click(deleteButtons[0]); // Delete first todo

    expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
  });
});
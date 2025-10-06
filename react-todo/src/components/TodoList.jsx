import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm.jsx";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { text: "Learn React", completed: false },
    { text: "Write tests", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const handleToggle = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const handleDelete = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm newTodo={newTodo} setNewTodo={setNewTodo} handleAdd={handleAdd} />
      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            onClick={() => handleToggle(index)}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
              cursor: "pointer",
              marginBottom: "5px",
            }}
          >
            <span>{todo.text}</span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={(e) => {
                e.stopPropagation();
                handleDelete(index);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

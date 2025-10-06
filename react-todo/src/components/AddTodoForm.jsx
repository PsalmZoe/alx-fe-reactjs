import React from "react";

export default function AddTodoForm({ newTodo, setNewTodo, handleAdd }) {
  return (
    <form onSubmit={handleAdd} style={{ marginBottom: "20px" }}>
      <input
        placeholder="New Todo"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

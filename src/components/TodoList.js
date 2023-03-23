import React from "react";

function TodoList({ todos, deleteTodo, updateTodo }) {
  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = (id) => {
    updateTodo(id);
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdate(todo.id)}
          />
          <span>{todo.text}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

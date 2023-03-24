import React, { useState } from "react";

function TodoList({ todos, deleteTodo, updateTodo, editTodo }) {
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editedText, setEditedText] = useState("");

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  const handleUpdate = (id) => {
    updateTodo(id);
  };

  const handleEdit = (id, text) => {
    setEditingTodoId(id);
    setEditedText(text);
  };

  const handleSave = (id) => {
    editTodo(id, editedText);
    setEditingTodoId(null);
    setEditedText("");
  };

  const handleCancel = () => {
    setEditingTodoId(null);
    setEditedText("");
  };

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          {editingTodoId === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
              />
              <button onClick={() => handleSave(todo.id)}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </>
          ) : (
            <>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleUpdate(todo.id)}
              />
              <span>{todo.text}</span>
              <button onClick={() => handleDelete(todo.id)}>Delete</button>
              <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;

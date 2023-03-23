import React, { useState } from "react";

function CreateTodoForm({ createTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    createTodo({
      text,
      completed: false,
    });
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default CreateTodoForm;

import React, { useState } from "react";
import Login from "./Login";
import CreateTodoForm from "./CreateTodoForm";
import TodoList from "./TodoList";
import './styles.css';


function App() {
  const [user, setUser] = useState(null);
  const [todos, setTodos] = useState([
    { id: 1, text: "Go Clubbing", completed: false },
    { id: 2, text: "Visit my Dad", completed: true },
    { id: 3, text: "Go to the Gym", completed: false },
  ]);

  const handleLogin = (credentials) => {
    setUser(credentials);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const createTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now() }]);
  };

  const editTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const updateTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  
  if (!user) {
    return <Login handleLogin={handleLogin} />;
  }
    
  return (
    <div>
      <h1>Welcome, {user.username}!</h1>
      <button onClick={handleLogout}>Log Out</button>
      <header>To Do List</header>
      <CreateTodoForm createTodo={createTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo} />
    </div>
  );
}

export default App;

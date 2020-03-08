import React, { useState } from "react";
import "./App.css";
import Login from "./Login/Login";
import Todo from "./Todo/Todo.jsx";
import TodoForm from "./Todo/TodoForm";
import Testimonials from "./Testimonials";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Learn about React",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const unCompleteTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = false;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <h2 className="title">To Do List (useState hook)</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            todo={todo}
            key={index}
            index={index}
            completeTodo={completeTodo}
            unCompleteTodo={unCompleteTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

      <hr />

      <Login />

      <hr />

      <Testimonials />
    </div>
  );
}

export default App;

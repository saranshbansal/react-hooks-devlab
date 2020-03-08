import React from "react";
import "../App.css";
import Login from "./Login/Login";
import Testimonials from "./Testimonials";
import TodoList from "./Todo/TodoList";

function App() {
  return (
    <div className="app">
      <TodoList />

      <hr />

      <Login />

      <hr />

      <Testimonials />
    </div>
  );
}

export default App;

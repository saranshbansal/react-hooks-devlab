import React from "react";
import "../App.css";
import KanyeQuotes from './KanyeQuotes';
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

      <hr />

      <KanyeQuotes />
    </div>
  );
}

export default App;

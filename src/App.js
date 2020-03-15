import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import KanyeQuotes from "./components/KanyeQuotes";
import Login from "./components/Login/Login";
import Testimonials from "./components/Testimonials";
import TodoList from "./components/Todo/TodoList";
import TodoListRedux from "./components/TodoRedux/TodoList";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <TodoList />

        <hr />

        <TodoListRedux />

        <hr />

        <Login />

        <hr />

        <Testimonials />

        <hr />

        <KanyeQuotes />
      </div>
    </Provider>
  );
}

export default App;

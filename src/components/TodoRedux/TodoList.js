import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  const todos = useSelector(state => state.todos);

  return (
    <>
      <h2 className="title">To Do List (useDispatch, useSelector hooks)</h2>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo todo={todo} key={index} />
        ))}
        <TodoForm />
      </div>
    </>
  );
}

export default TodoList;

import React, { useState } from "react";
import Todo from "./Todo.jsx";
import TodoForm from "./TodoForm";

function TodoList() {
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
    <>
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
    </>
  );
}

export default TodoList;

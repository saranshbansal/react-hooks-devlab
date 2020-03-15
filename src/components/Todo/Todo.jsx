import React from "react";

export default function Todo({ todo, index, toggleTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.complete ? "line-through" : "" }}>
      {todo.text}

      <div>
        {todo.complete ? (
          <button onClick={() => toggleTodo(index)}>Completed</button>
        ) : (
          <button onClick={() => toggleTodo(index)}>Complete</button>
        )}

        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

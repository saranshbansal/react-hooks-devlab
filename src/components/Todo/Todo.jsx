import React from "react";

export default function Todo({ todo, index, completeTodo, unCompleteTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}

      <div>
        {todo.isCompleted ? (
          <button onClick={() => unCompleteTodo(index)}>UnCheck</button>
        ) : (
          <button onClick={() => completeTodo(index)}>Check</button>
        )}

        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

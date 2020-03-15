import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAction, toggleTodoAction } from "../../actions";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  return (
    <div className="todo" style={{ textDecoration: todo.complete ? "line-through" : "" }}>
      {todo.text}

      <div>
        {todo.complete ? (
          <button onClick={() => dispatch(toggleTodoAction(todo.id))}>Completed</button>
        ) : (
          <button onClick={() => dispatch(toggleTodoAction(todo.id))}>Complete</button>
        )}

        <button onClick={() => dispatch(deleteTodoAction(todo.id))}>x</button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";
import { addTodoAction } from "../../actions";

export default function TodoForm() {
  const dispatch = useDispatch();

  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    dispatch(
      addTodoAction({
        id: uuid(),
        text: value,
        complete: false
      })
    );
    
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} />
    </form>
  );
}

import { createStore } from "redux";
import { v4 as uuid } from "uuid";

const initialState = {
  todos: [
    {
      id: uuid(),
      text: "Learn about React",
      complete: false
    },
    {
      id: uuid(),
      text: "Meet friend for lunch",
      complete: false
    },
    {
      id: uuid(),
      text: "Build really cool todo app",
      complete: false
    }
  ]
};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Reducer
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => (todo.id === action.payload ? { ...todo, complete: !todo.complete } : todo))
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

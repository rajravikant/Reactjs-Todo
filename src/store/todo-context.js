import React from "react";

const TodoContext = React.createContext({
  todos: [],
  setTodos: (value) => {},
  updateTods: (id,value) => {},
  deleteTodos: (id) => {},
});

export default TodoContext;

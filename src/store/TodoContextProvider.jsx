import { useEffect, useReducer } from "react";
import TodoContext from "./todo-context";

const reducerFn = (curState, action) => {

  function filterTodo() {
    for (const it of curState) {
      if (it.id === action.val.id) {
        it.todo = action.val.newData;
      }
    }
    return curState
  }

  if (action.type === "addToTodos") {
    return [action.val, ...curState];
  }
  if (action.type === "deleteTodo") {
    return curState.filter((todo) => todo.id != action.id);
  }
  if (action.type === "updateTodo") {
    return curState.filter(filterTodo);
  }
  if (action.type === 'localsget') {
      const dt = JSON.parse(action.val)
    return dt
  }
};

const TodoContextProvider = ({ children }) => {
  // const [state, dispatchTodos] = useReducer(reducerFn, [{ id: 501, todo: "Learn NextJs" }]);
  const [state, dispatchTodos] = useReducer(reducerFn, []);

  useEffect(()=>{
    if (localStorage.length) {
    let temp = localStorage.getItem("data")
    dispatchTodos({type : 'localsget' , val : temp })
  }}
  ,[])

  useEffect(() => {
    if (state.length === 0) {
      localStorage.removeItem('data')
    }
    if (state.length>0) {
      localStorage.setItem("data",JSON.stringify(state))
    }
  }, [state]);

  const addToTodosHandler = (value) => {
    dispatchTodos({ type: "addToTodos", val: value });
  };

  const updateTodoHandler = (id, todo) => {
    dispatchTodos({ type: "updateTodo", val: { id: id, newData: todo }});
  };

  const deleteHandler = (id) => {
    dispatchTodos({ type: "deleteTodo", id: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state,
        setTodos: addToTodosHandler,
        updateTods: updateTodoHandler,
        deleteTodos: deleteHandler,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;

import { useContext, useRef } from "react";
import styles from "./Todo.module.css";
import TodoList from "./TodoList";
import TodoContext from "../store/todo-context";

const Todo = () => {
  const TodoCtx = useContext(TodoContext);
  const inputTodo = useRef();
 
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputTodo.current.value) {
      const data = {
        id : Math.floor(Math.random()*100 +1),
        todo : inputTodo.current.value
    }
    TodoCtx.setTodos(data); 
    }
   inputTodo.current.value = ""
  };
  return (
    <>
      <div className={styles["todo-container"]}>
        <form className={styles.inputs} onSubmit={submitHandler}>
          <input type="text" ref={inputTodo}/>
          <button className="add">➕</button>
        </form>
        <TodoList />
      </div>
    </>
  );
};

export default Todo;

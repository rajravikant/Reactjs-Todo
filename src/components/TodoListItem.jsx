import styles from './Todo.module.css'
import TodoContext from '../store/todo-context'
import { useContext,useState} from 'react'

// todo : add toggle between input textbox and label 

const TodoListItem = (props) => {
  const[isEditing,setIsEditing] = useState(false)
  const todoCtx = useContext(TodoContext);


  const removeTodoHandler = () =>{
    todoCtx.deleteTodos(props.data.id)
  }

  const updateTodoHandler = () =>{
   
    if (isEditing === false) {
      setIsEditing(true)
      let c = prompt("enter new value")
      todoCtx.updateTods(props.data.id,c)
      setIsEditing(false)
    }
      if (isEditing === true) {     
        setIsEditing(false)
    }
  }


  return (
    <li>
    {/* <input type="checkbox" name="" id="" /> */}
      {<input type="text" value={props.data.todo} readOnly={!isEditing}/> }
      <div className={styles.actions}>
        <button onClick={updateTodoHandler}>{isEditing && '✔' || !(isEditing) && '📝'}</button>
        <button onClick={removeTodoHandler}>❌</button>
      </div>
    </li>
  );
};

export default TodoListItem;

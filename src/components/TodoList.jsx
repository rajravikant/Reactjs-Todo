import styles from './Todo.module.css'
import TodoListItem from './TodoListItem'
import TodoContext from '../store/todo-context'
import { useContext} from 'react'

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
 
  return (
    <div className={styles['todo-lists']}>
    <ul>
        {todoCtx.todos.map((item) =>(<TodoListItem key={item.id} data = {item}/>))}
        
    </ul>
</div>
  )
}

export default TodoList
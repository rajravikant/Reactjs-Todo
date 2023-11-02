import "./App.css";
import todo_icon from "./assets/list.png";
import Todo from "./components/Todo";


function App() {
  return (
    <div className="main-container">
      <header>
        <h1>Add Your Todos</h1>
        <img src={todo_icon} alt="todo-logo" />
      </header>
      <main>
        <Todo />
      </main>
    </div>
  );
}

export default App;

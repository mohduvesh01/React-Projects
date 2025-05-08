import AddTodo from "./Componants/AddTodo";
import AppName from "./Componants/AppName";
import TodoItem1 from "./Componants/TodoItem1";
import TodoItem2 from "./TodoItem2";
import "./App.css";
function App() {
  return (
    <center className="todo-conatiner">
      <AppName />
      <AddTodo />
      <div className="items">
        <TodoItem1 />
        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;

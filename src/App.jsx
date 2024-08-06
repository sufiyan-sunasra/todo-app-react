import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todo, setTodo] = useState([]);
  const handleOnClick = (inputName, inputDate) => {
    let newTodo = [
      ...todo,
      {
        name: inputName,
        dueDate: inputDate,
      },
    ];
    setTodo(newTodo);
  };

  const handleDeleteTodo = (TodoItemName) => {
    const newTodo = todo.filter((item) => item.name !== TodoItemName);
    setTodo(newTodo);
  };
  return (
    <center className="todo-container">
      <Appname />
      <AddTodo onNewTodo={handleOnClick} />
      {todo.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todo} onDeleteClick={handleDeleteTodo} />
    </center>
  );
}

export default App;

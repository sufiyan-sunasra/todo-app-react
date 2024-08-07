import "bootstrap/dist/css/bootstrap.min.css";
import Appname from "./components/Appname";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
// import {  useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  // const [todoItems, setTodoItems] = useState([]);

  // const addNewTodo = (inputName, inputDate) => {
  /*let newTodo = [
      ...todoItems,
      {
        name: inputName,
        dueDate: inputDate,
      },
    ];
    setTodoItems(newTodo);*/

  /*setTodoItems((currVal) => [
      ...currVal,
      {
        name: inputName,
        dueDate: inputDate,
      },
    ]);*/

  // };

  /* const deleteTodo = (TodoItemName) => {
  const newTodo = todoItems.filter((item) => item.name !== TodoItemName);
  setTodoItems(newTodo);*/

  // };

  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <Appname />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;

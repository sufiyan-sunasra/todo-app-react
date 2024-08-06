// import { useState } from "react";
import { useRef } from "react";
import { MdAddComment } from "react-icons/md";

export default function AddTodo({ onNewTodo }) {
  // const [todoName, setTodoName] = useState("");
  // const [todoDate, setTodoDate] = useState("");

  // const handleInputName = (event) => {
  //   setTodoName(event.target.value);
  // };
  // const handleInputDate = (event) => {
  //   setTodoDate(event.target.value);
  // };
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const handleAddButtonClick = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    onNewTodo(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <div className="container">
      <form className="row todo-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            ref={todoNameElement}
            // value={todoName}
            // onChange={handleInputName}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            ref={todoDateElement}
            // value={todoDate} onChange={handleInputDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success todo-button">
            <MdAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

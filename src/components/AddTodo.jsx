import { useState } from "react";
import { MdAddComment } from "react-icons/md";

export default function AddTodo({ onNewTodo }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const handleInputName = (event) => {
    setTodoName(event.target.value);
  };
  const handleInputDate = (event) => {
    setTodoDate(event.target.value);
  };
  const handleAddButtonClick = () => {
    if (todoName !== "" && todoDate !== "") {
      onNewTodo(todoName, todoDate);
      setTodoName("");
      setTodoDate("");
    } else {
      alert("Empty todo is not added!");
    }
  };
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleInputName}
          />
        </div>
        <div className="col-4">
          <input type="date" value={todoDate} onChange={handleInputDate} />
        </div>
        <div className="col-2">
          <button
            className="btn btn-success todo-button"
            onClick={handleAddButtonClick}
          >
            <MdAddComment />
          </button>
        </div>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItem({ todoDate, todoName }) {
  const { deleteTodo } = useContext(TodoItemsContext);

  return (
    <center>
      <div className="container">
        <div className="row todo-row">
          <div className="col-6 align-left">{todoName}</div>
          <div className="col-4 align-left">{todoDate}</div>
          <div className="col-2">
            <button
              className="btn btn-danger todo-button"
              onClick={() => deleteTodo(todoName)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

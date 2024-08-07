import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItem({ todoDate, todoName }) {
  const { deleteTodo } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row todo-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
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
  );
}

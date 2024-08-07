import { useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItems() {
  const { todoItems, deleteTodo } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {(todoItems || []).map((item, index) => (
        <TodoItem key={index} todoDate={item.Date} todoName={item.name} />
      ))}
    </div>
  );
}

import { useContext } from "react";
import TodoItem from "../components/TodoItem";
import { TodoItemsContext } from "../store/todo-item-store";

export default function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="items-container">
      {(todoItems || []).map((item) => (
        <TodoItem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
        />
      ))}
    </div>
  );
}

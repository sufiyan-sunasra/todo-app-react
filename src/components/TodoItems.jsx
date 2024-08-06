import TodoItem from "../components/TodoItem";

export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

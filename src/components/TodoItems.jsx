import TodoItem from "../components/TodoItem";

export default function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={Math.floor(Math.random() * 10)}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

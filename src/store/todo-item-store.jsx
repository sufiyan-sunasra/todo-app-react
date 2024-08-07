import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewTodo: () => {},
  deleteTodo: () => {},
});

const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...newTodoItems,
      {
        name: action.payload.name,
        Date: action.payload.Date,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.name
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewTodo = (inputName, inputDate) => {
    const newTodoAction = {
      type: "NEW_ITEM",
      payload: {
        name: inputName,
        Date: inputDate,
      },
    };

    dispatchTodoItems(newTodoAction);
  };

  const deleteTodo = (TodoItemName) => {
    const deleteTodoAction = {
      type: "DELETE_ITEM",
      payload: {
        name: TodoItemName,
      },
    };

    dispatchTodoItems(deleteTodoAction);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewTodo, deleteTodo }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;

import "./App.css";
import CreateTodoBoxConfirmButton from "./create-todo-box/create-todo-box-confirm-button/create-todo-box-confirm-button";
import TodoItem from "./todo-item/todo-item";
import { TodoItemProps } from "./todo-item/todo-item";
import TodoList from "./todo-list/todo-list";

function App() {
  let todoProps: TodoItemProps[] = [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueTo: new Date(2024, 12, 31),
      isCompleted: false,
      title: "Todo 1",
    },
    {
      id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueTo: new Date(2024, 12, 31),
      isCompleted: false,
      title: "Todo 2",
    },
    {
      id: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueTo: new Date(2024, 12, 31),
      isCompleted: false,
      title: "Todo 3",
    },
  ];

  return (
    <>
      <CreateTodoBoxConfirmButton/> 
      <TodoList todos={[]}/>
    </>
  );
}

export default App;

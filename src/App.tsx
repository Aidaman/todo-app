import { useState } from "react";
import "./App.css";
import CreateTodoBox, { CreateTodo } from "./create-todo-box/create-todo-box";
import TodoList from "./todo-list/todo-list";
import TodoService from "./queries/api";

function App() {
  const [todos, setTodos] = useState(TodoService.getTodos());

  const addNewTodo = (createTodo: CreateTodo) => {
    TodoService.addNewTodo(createTodo);
    setTodos(TodoService.getTodos());
  };

  const removeTodo = (id: string | number) => {
    TodoService.removeTodo(id);
    setTodos(TodoService.getTodos());
  };

  const completeTodo = (id: string | number) => {
    TodoService.markTodoAsComplete(id);
    setTodos(TodoService.getTodos());
  };

  return (
    <>
      <CreateTodoBox createTodoClick={addNewTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onComplete={completeTodo} />
    </>
  );
}

export default App;

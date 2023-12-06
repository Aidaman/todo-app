import { useState } from "react";
import "./App.css";
import CreateTodoBox, { CreateTodo } from "./create-todo-box/create-todo-box";
import { TodoItemProps } from "./todo-item/todo-item";
import TodoList from "./todo-list/todo-list";

function App() {
  const [todos, setTodos] = useState(new Array<TodoItemProps>());
  const [newTodoId, setNewTodoId] = useState(todos.length);

  const addNewTodo = (createTodo: CreateTodo) => {
    setNewTodoId( currentNewTodoId => currentNewTodoId + 1 );
    
    const newTodo: TodoItemProps = {
      id: newTodoId,
      createdAt: new Date(),
      updatedAt: new Date(),
      isCompleted: false,
      dueTo: new Date(createTodo.todoDueTo),
      title: createTodo.todoText,
      onComplete: (id: string | number) => {},
      onDelete: (id: string | number) => {}
    }

    setTodos( current => [...current, newTodo] );
  }

  const removeTodo = (id: string | number) => {
    const item = todos.find(x => x.id === id);
    if (!item)
      throw new Error(
        "Can not delete Todo that does not exist or does not belongs to the current user"
      );

    setTodos( current => current.filter(x => x.id !== id) );
  }

  const completeTodo = (id: string | number) => {
    setTodos( current => current.map(x => x.id !== id ? x : { ...x, isCompleted: true }) );
  }

  return (
    <>
      <CreateTodoBox createTodoClick={addNewTodo} /> 
      <TodoList todos={todos} onDelete={removeTodo} onComplete={completeTodo}/>
    </>
  );
}

export default App;

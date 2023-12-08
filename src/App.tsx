import { useState } from "react";
import "./App.css";
import CreateTodoBox, { CreateTodo } from "./create-todo-box/create-todo-box";
import TodoList from "./todo-list/todo-list";
import TodoService from "./queries/api";
import EditTodoDialog from "./edit-todo-dialog/edit-todo-dialog";
import { TodoItemProps } from "./todo-item/todo-item";

function App() {
  const [todos, setTodos] = useState(TodoService.getTodos());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editTodo, setEditTodo] = useState(TodoService.getTodo(0));

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

  const openEditDialog = (editTodo?: TodoItemProps) => {
    setIsDialogOpen(true);
    setEditTodo(editTodo);
  };

  const updateConfirm = (updatedTodo: TodoItemProps) => {
    TodoService.editTodo(updatedTodo);
    setTodos(TodoService.getTodos());
    setIsDialogOpen(false);
    setEditTodo(undefined);
  };

  const updateReject = () => {
    setIsDialogOpen(false);
    setEditTodo(undefined);
  };

  return (
    <div className="relative h-full">
      <CreateTodoBox createTodoClick={addNewTodo} />
      <TodoList todos={todos} onDelete={removeTodo} onComplete={completeTodo} onUpdate={openEditDialog} />
      <EditTodoDialog
        isShown={isDialogOpen}
        initialValue={editTodo}
        onUpdateConfirm={updateConfirm}
        onUpdateReject={updateReject}
      />
    </div>
  );
}

export default App;

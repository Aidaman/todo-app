import React from "react";
import TodoItem, { TodoItemProps } from "../todo-item/todo-item";
import TodoListEmpty from "./todo-list-empty/todo-list-empty";

type TodoListProps = {
  todos: TodoItemProps[];
};

const TodoList = (props: TodoListProps) => {
  const handleOnComplete: (id: string | number) => TodoItemProps = (
    id: string | number
  ) => {
    const item = props.todos.find((x) => x.id === id);
    if (!item)
      throw new Error(
        "Can not complete Todo that does not exist or does not belongs to the current user"
      );

    if (item.isCompleted) return item;

    return {
      ...item,
      isCompleted: true,
    };
  };

  const handleOnDelete: (id: string | number) => TodoItemProps = (
    id: string | number
  ) => {
    const item = props.todos.find((x) => x.id === id);
    if (!item)
      throw new Error(
        "Can not delete Todo that does not exist or does not belongs to the current user"
      );

    props.todos = props.todos.filter((x) => x.id === id);
    return item;
  };

  if (props.todos.length < 1) {
    return (
      <TodoListEmpty message="Apparently there is no todos :( Add at least one using the box above" />
    );
  }

  return (
    <ul className="flex flex-col gap-2 px-12 py-2">
      {props.todos.map((item) => (
        <li key={item.id}>
          <TodoItem
            id={item.id}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            isCompleted={item.isCompleted}
            dueTo={item.dueTo}
            title={item.title}
            onComplete={handleOnComplete}
            onDelete={handleOnDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

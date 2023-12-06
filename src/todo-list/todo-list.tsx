import React from "react";
import TodoItem, { TodoItemProps } from "../todo-item/todo-item";
import TodoListEmpty from "./todo-list-empty/todo-list-empty";
import classNames from "classnames";

type TodoListProps = {
  todos: TodoItemProps[];
  onComplete?: (id: number | string) => void;
  onDelete?: (id: number | string) => void;
};

const defineClassNames = (todo: TodoItemProps): string => classNames(todo.isCompleted ? 'bg-green-200' : 'odd:bg-neutral-50 even:bg-gray-100', 'rounded-xl');

const TodoList = (props: TodoListProps) => {
  if (props.todos.length < 1) {
    return (
      <TodoListEmpty message="Apparently there is no todos :( Add at least one using the box above" />
    );
  }

  return (
    <ul className="flex flex-col gap-2 px-12 py-2">
      {props.todos.map((item) => (
        <li key={item.id} className={defineClassNames(item)}>
          <TodoItem
            id={item.id}
            createdAt={item.createdAt}
            updatedAt={item.updatedAt}
            isCompleted={item.isCompleted}
            dueTo={item.dueTo}
            title={item.title}
            onComplete={props.onComplete}
            onDelete={props.onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

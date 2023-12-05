import React from "react";

type TodoItemProps = {
  id: number | string;
  createdAt: Date;
  updatedAt: Date;

  dueTo: Date;
  isCompleted: boolean;
  title: string;

  onComplete: (id: number | string) => TodoItemProps;
  onDelete: (id: number | string) => TodoItemProps;
  onUpdate: (id: number | string, update: UpdateTodoItemProps) => TodoItemProps;
};

type UpdateTodoItemProps = {
  dueTo: Date;
  isCompleted: boolean;
  title: string;
};

const TodoItem = (props: TodoItemProps) => {
  return <div>TodoItem</div>;
};

export default TodoItem;

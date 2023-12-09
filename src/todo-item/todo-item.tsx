import React from "react";
import TodoEditButton from "./todo-edit-button/todo-edit-button";
import TodoDeleteButton from "./todo-delete-button/todo-delete-button";
import TodoCompleteButton from "./todo-complete-button/todo-complete-button";

export type TodoItemProps = {
  id: number | string;
  createdAt: Date;
  updatedAt: Date;

  isCompleted: boolean;
  dueTo: Date;
  title: string;

  onComplete: (id: number | string) => void;
  onDelete: (id: number | string) => void;
  onUpdate: (editTodo?: TodoItemProps) => void;
};

const getDate = (dueTo: Date): React.ReactNode => {
  if (!(dueTo instanceof Date)) {
    return new Date(dueTo).toLocaleString();  
  }
  return dueTo.toLocaleString();  
}

const TodoItem = (props: TodoItemProps): JSX.Element => (
  <div className="rounded-xl transition-all gap-4 shadow-md px-8 flex flex-col md:flex-row py-2 hover:shadow-lg ">
    <div className="flex flex-col">
      <span className="font-sans text-base font-normal">{props.title}</span>
      <span className="font-sans text-xs font-extralight">{getDate(props.dueTo)}</span>
    </div>
    <div className="w-full md:w-fit flex gap-2 ml-auto justify-center align-bottom md:justify-end md:align-middle">
      {
        props.isCompleted ? null : <TodoCompleteButton onComplete={props.onComplete} itemId={props.id} />
      }
      {
        props.isCompleted ? null : <TodoEditButton onUpdate={props.onUpdate} itemId={props.id} updateItemProps={props} />
      }
      <TodoDeleteButton onDelete={props.onDelete} itemId={props.id} />
    </div>
  </div>
);

export default TodoItem;


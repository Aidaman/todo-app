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
};

const TodoItem = (props: TodoItemProps): JSX.Element => (
  <div className="rounded-xl transition-all shadow-md px-8 py-2 grid grid-cols-2 hover:shadow-lg">
    <div className="flex flex-col">
      <span className="font-sans text-base font-normal">{props.title}</span>
      <span className="font-sans text-xs font-extralight">{props.dueTo.toString()}</span>
    </div>
    <div className="buttons flex gap-2 ml-auto">
    <div className="buttons flex gap-2 ml-auto">
      {
        props.isCompleted ? null : <TodoCompleteButton itemId={props.id} />
      }
      <TodoDeleteButton itemId={props.id} />
      {/* {
        props.isCompleted ? null : <TodoEditButton  onUpdate={props.onUpdate} itemId={props.id} updateItemProps={props} />
      } */}
    </div>
    </div>
  </div>
);

export default TodoItem;

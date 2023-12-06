import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { TodoItemProps } from "../todo-item";

type TodoDeleteButtonProps = {
  itemId: number | string;
  onDelete?: (id: number | string) => TodoItemProps
};

const TodoDeleteButton = (props: TodoDeleteButtonProps) => (
  <button className="w-8 h-8 bg-red-600 transition-all hover:bg-red-700 text-gray-50 rounded-full grid place-items-center" onClick={() => props.onDelete}>
    <FaRegTrashAlt />
  </button>
);

export default TodoDeleteButton;

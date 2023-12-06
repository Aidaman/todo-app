import React from "react";
import { FaEdit } from "react-icons/fa";
import { TodoItemProps } from "../todo-item";

type TodoEdtiButtonProps = {
  itemId: number | string;
  updateItemProps: TodoItemProps;
  onUpdate?: (
    id: number | string,
    update: TodoItemProps
  ) => TodoItemProps;
};

const handleOnUpdate = ({ itemId, onUpdate, updateItemProps }: TodoEdtiButtonProps) => {
  if (!onUpdate) return;

  onUpdate!(itemId, updateItemProps);
}

const TodoEditButton = (props: TodoEdtiButtonProps) => (
  <button className="w-8 h-8 bg-yellow-400 transition-all hover:bg-yellow-500 text-gray-800 rounded-full grid place-items-center" onClick={() => handleOnUpdate(props)}>
    <FaEdit />
  </button>
);

export default TodoEditButton;

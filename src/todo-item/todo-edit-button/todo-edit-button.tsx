import React from "react";
import { FaEdit } from "react-icons/fa";
import { TodoItemProps } from "../todo-item";

type TodoEdtiButtonProps = {
  itemId: number | string;
  updateItemProps: TodoItemProps;
  onUpdate: (editTodo?: TodoItemProps) => void;
};

const TodoEditButton = (props: TodoEdtiButtonProps) => {
  const handleOnUpdate = ({ itemId, onUpdate, updateItemProps }: TodoEdtiButtonProps) => {
    onUpdate(updateItemProps);
  }

  return (
    <button className="w-8 h-8 bg-yellow-400 transition-all hover:bg-yellow-500 text-gray-800 rounded-full grid place-items-center" onClick={() => handleOnUpdate(props)}>
      <FaEdit />
    </button>
  );
};

export default TodoEditButton;

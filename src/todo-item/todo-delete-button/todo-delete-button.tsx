import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

type TodoDeleteButtonProps = {
  itemId: number | string;
  onDelete: (id: number | string) => void
};

const TodoDeleteButton = (props: TodoDeleteButtonProps) => (
  <button className="w-8 h-8 bg-red-600 transition-all hover:bg-red-700 text-gray-50 rounded-full grid place-items-center" onClick={() => props.onDelete(props.itemId)}>
    <FaRegTrashAlt />
  </button>
);

export default TodoDeleteButton;

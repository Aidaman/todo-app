import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoService from "../../queries/api";

type TodoDeleteButtonProps = {
  itemId: number | string;
};

const TodoDeleteButton = (props: TodoDeleteButtonProps) => (
  <button
    className="w-8 h-8 bg-red-600 transition-all hover:bg-red-700 text-gray-50 rounded-full grid place-items-center"
    onClick={() => TodoService.removeTodo(props.itemId)}
  >
    <FaRegTrashAlt />
  </button>
);

export default TodoDeleteButton;

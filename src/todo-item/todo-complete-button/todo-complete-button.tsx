import React from "react";
import { FaCheck } from "react-icons/fa";
import TodoService from "../../queries/api";

type TodoCompleteButtonProps = {
  itemId: number | string;
};

const TodoCompleteButton = (props: TodoCompleteButtonProps) => (
  <button
    className="w-8 h-8 bg-green-600 text-gray-50 transition-all hover:bg-green-700 rounded-full grid place-items-center"
    onClick={() => TodoService.markTodoAsComplete(props.itemId)}
  >
    <FaCheck />
  </button>
);

export default TodoCompleteButton;

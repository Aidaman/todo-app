import React from "react";
import { FaCheck } from "react-icons/fa";

type TodoCompleteButtonProps = {
  itemId: number | string;
  onComplete: (itemId: number | string) => void;
};

const TodoCompleteButton = (props: TodoCompleteButtonProps) => (
  <button
    className="w-8 h-8 bg-green-600 text-gray-50 transition-all hover:bg-green-700 rounded-full grid place-items-center"
    onClick={() => props.onComplete(props.itemId)}
  >
    <FaCheck />
  </button>
);

export default TodoCompleteButton;

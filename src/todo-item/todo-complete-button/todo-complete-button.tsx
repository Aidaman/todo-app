import React from "react";
import { FaCheck } from "react-icons/fa";
import { TodoItemProps } from "../todo-item";

type TodoCompleteButtonProps = {
  itemId: number | string;
  onComplete?: (itemId: number | string) => TodoItemProps;
};

const handleOnComplete = ({ onComplete, itemId }: TodoCompleteButtonProps) => {
  if (!onComplete) return;

  onComplete!(itemId);
};

const TodoCompleteButton = (props: TodoCompleteButtonProps) => (
  <button
    className="w-8 h-8 bg-green-600 text-gray-200 rounded-full grid place-items-center"
    onClick={() => handleOnComplete(props)}
  >
    <FaCheck />
  </button>
);

export default TodoCompleteButton;

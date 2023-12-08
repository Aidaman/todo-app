import React from "react";
import { FaCheck } from "react-icons/fa";
import TodoService from "../../queries/api";
import { useMutation } from "@tanstack/react-query";

type TodoCompleteButtonProps = {
  itemId: number | string;
};

const TodoCompleteButton = (props: TodoCompleteButtonProps) => {
  const markTodoAsCompleteMutation = useMutation({
    mutationFn: (itemId: number | string) => new Promise(() => TodoService.markTodoAsComplete(itemId)),
  });

  return (
    <button
      className="w-8 h-8 bg-green-600 text-gray-50 transition-all hover:bg-green-700 rounded-full grid place-items-center"
      onClick={() => markTodoAsCompleteMutation.mutate(props.itemId)}
    >
      <FaCheck />
    </button>
  );
};

export default TodoCompleteButton;

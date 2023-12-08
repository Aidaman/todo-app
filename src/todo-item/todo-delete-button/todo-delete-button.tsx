import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import TodoService from "../../queries/api";
import { useMutation } from "@tanstack/react-query";

type TodoDeleteButtonProps = {
  itemId: number | string;
};

const TodoDeleteButton = (props: TodoDeleteButtonProps) => {
  const deleteTodoMutation = useMutation({
    mutationFn: (itemId: number | string) => new Promise(() => TodoService.removeTodo(itemId)),
  });

  return (
    <button
      className="w-8 h-8 bg-red-600 transition-all hover:bg-red-700 text-gray-50 rounded-full grid place-items-center"
      onClick={() => deleteTodoMutation.mutate(props.itemId)}
    >
      <FaRegTrashAlt />
    </button>
  );
};

export default TodoDeleteButton;

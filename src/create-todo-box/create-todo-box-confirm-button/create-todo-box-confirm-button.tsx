import React from "react";
import { CreateTodo } from "../create-todo-box";
import { FaPlus } from "react-icons/fa";
import TodoService from "../../shared/queries/api";
import { useMutation } from "@tanstack/react-query";

type CreateTodoBoxConfirmButtonProps = {
  createTodo: CreateTodo;
  onClick: (createTodo: CreateTodo) => void;
};

const CreateTodoBoxConfirmButton = (props: CreateTodoBoxConfirmButtonProps) => {
  const createTodoMutation = useMutation({
    mutationFn: (createTodo: CreateTodo) =>
      new Promise(() => TodoService.addNewTodo(createTodo)),
  });

  const handleClick = ({
    onClick,
    createTodo,
  }: CreateTodoBoxConfirmButtonProps) => {
    // createTodoMutation.mutate(createTodo);

    onClick(createTodo);
  };

  return (
    <button
      className="grid place-items-center bg-emerald-600 border-none outline-none text-gray-50 rounded-xl flex-grow py-2 md:p-4 transition hover:bg-emerald-700"
      onClick={() => handleClick(props)}
    >
      <FaPlus className="w-4 h-4" />
    </button>
  );
};

export default CreateTodoBoxConfirmButton;

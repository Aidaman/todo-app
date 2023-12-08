import React from "react";
import { CreateTodo } from "../create-todo-box";
import { FaPlus } from "react-icons/fa";
import TodoService from "../../queries/api";
import { QueryClient, useMutation } from "@tanstack/react-query";

type CreateTodoBoxConfirmButtonProps = {
  createTodo: CreateTodo;
};

const CreateTodoBoxConfirmButton = (props: CreateTodoBoxConfirmButtonProps) => {
  const createTodoMutation = useMutation({
    mutationFn: (createTodo: CreateTodo) => new Promise(() => TodoService.addNewTodo(createTodo)),
  });

  return (
    <button
      className="grid place-items-center bg-emerald-600 border-none outline-none text-gray-50 rounded-xl flex-grow p-4 transition hover:bg-emerald-700"
      onClick={() => createTodoMutation.mutate(props.createTodo)}
    >
      <FaPlus />
    </button>
  );
};

export default CreateTodoBoxConfirmButton;

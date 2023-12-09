import React from "react";
import { CreateTodo } from "../create-todo-box";
import { FaPlus } from "react-icons/fa";

type CreateTodoBoxConfirmButtonProps = {
  createTodo: CreateTodo;
  onClick: (createTodo: CreateTodo) => void;
};

const handleClick = ({ onClick, createTodo }: CreateTodoBoxConfirmButtonProps) => {
  onClick!(createTodo);
};

const CreateTodoBoxConfirmButton = (props: CreateTodoBoxConfirmButtonProps) => (
  <button className="grid place-items-center bg-emerald-600 border-none outline-none text-gray-50 rounded-xl flex-grow py-2 md:p-4 transition hover:bg-emerald-700" onClick={() => handleClick(props)}>
    <FaPlus className="w-4 h-4" />
  </button>
);

export default CreateTodoBoxConfirmButton;

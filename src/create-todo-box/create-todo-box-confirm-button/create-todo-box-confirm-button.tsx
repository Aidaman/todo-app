import React from "react";
import { CreateTodo } from "../create-todo-box";
import { FaPlus } from "react-icons/fa";

type CreateTodoBoxConfirmButtonProps = {
  createTodo?: CreateTodo;
  onClick?: (createTodo: CreateTodo) => void;
};

const handleClick = ({ onClick, createTodo }: CreateTodoBoxConfirmButtonProps) => {
  if (!onClick) return;

  if (!createTodo) return;

  onClick!(createTodo);
};

const CreateTodoBoxConfirmButton = (props: CreateTodoBoxConfirmButtonProps) => (
  <button className="grid place-items-center bg-emerald-600 border-none outline-none text-gray-200 rounded-xl w-12 h-12 transition hover:bg-emerald-700" onClick={() => handleClick(props)}>
    <FaPlus />
  </button>
);

export default CreateTodoBoxConfirmButton;

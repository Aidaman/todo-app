import React from "react";
import { CreateTodo } from "../create-todo-box";
import { FaPlusCircle } from "react-icons/fa";

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
  <button className="grid place-items-center bg-slate-400 text-gray-600 rounded-xl" onClick={() => handleClick(props)}>
    <FaPlusCircle />
  </button>
);

export default CreateTodoBoxConfirmButton;

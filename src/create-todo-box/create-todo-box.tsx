import React, { ChangeEvent, useState } from "react";
import CreateTodoBoxTextInput from "./create-todo-box-text-input/create-todo-box-text-input";
import CreateTodoBoxDateInput from "./create-todo-box-date-input/create-todo-box-date-input";
import CreateTodoBoxConfirmButton from "./create-todo-box-confirm-button/create-todo-box-confirm-button";

export type CreateTodo = {
  todoText: string;
  todoDueTo: string;
};

type Props = {
  createTodoClick?: (createTodo: CreateTodo) => void;
};

const CreateTodoBox = (props: Props) => {
  const [todoText, setTodoText] = useState("");
  const [todoDueTo, setTodoDueTo] = useState("");

  const handleTodoTextChange = (value: string) => {
    setTodoText(value);
  };

  const handleTodoDueToChange = (value: string) => {
    setTodoDueTo(value);
  };

  const handleCreateTodoClick = (value: CreateTodo): void => {
    if (!props.createTodoClick) return;

    props.createTodoClick!({
      todoText,
      todoDueTo,
    });
  };

  return (
    <div className="flex w-2/3 mx-auto my-4 gap-2">
      <CreateTodoBoxTextInput
        onInput={handleTodoTextChange}
        placeholder="Task that you need to complete"
      />
      <CreateTodoBoxDateInput onChange={handleTodoDueToChange} />
      <CreateTodoBoxConfirmButton onClick={handleCreateTodoClick} createTodo={{todoText, todoDueTo}} />
    </div>
  );
};

export default CreateTodoBox;

import React, { ChangeEvent, useState } from "react";
import CreateTodoBoxTextInput from "./create-todo-box-text-input/create-todo-box-text-input";
import CreateTodoBoxDateInput from "./create-todo-box-date-input/create-todo-box-date-input";
import CreateTodoBoxConfirmButton from "./create-todo-box-confirm-button/create-todo-box-confirm-button";

export type CreateTodo = {
  todoText: string;
  todoDueTo: string;
};

//* While CreateTodo require only text and due to date, the DTO for update can have any fields that model has 
export type UpdateTodo = {
  todoText?: string;
  todoDueTo?: string;
};

type Props = {
  createTodoClick: (createTodo: CreateTodo) => void;
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
    if (todoText.length === 0 || todoDueTo.length === 0) return;

    props.createTodoClick!({
      todoText,
      todoDueTo,
    });
  };

  return (
    <div className="flex flex-col w-2/3 mx-auto my-4 gap-2 md:flex-row">
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

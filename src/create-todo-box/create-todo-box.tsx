import { useState } from "react";
import CreateTodoBoxConfirmButton from "./create-todo-box-confirm-button/create-todo-box-confirm-button";
import Input from "../shared/components/input/input";

export type CreateTodo = {
  todoText: string;
  todoDueTo: string;
};

//* While CreateTodo require only text and due to date, the DTO for update can have any fields that model has 
export type UpdateTodo = {
  todoText?: string;
  todoDueTo?: string;
};

type CreateTodoBoxProps = {
  createTodoClick: (createTodo: CreateTodo) => void;
};

const CreateTodoBox = (props: CreateTodoBoxProps) => {
  const [todoText, setTodoText] = useState("");
  const [todoDueTo, setTodoDueTo] = useState("");

  const handleTodoTextChange = (value: string) => {
    setTodoText(value);
  };

  const handleTodoDueToChange = (value: string) => {
    setTodoDueTo(value);
  };

  const handleCreateTodoClick = (createTodoClick: CreateTodo) => {
    if (!props.createTodoClick) return;
    
    props.createTodoClick!(createTodoClick);
  }

  return (
    <div className="flex flex-col w-2/3 mx-auto my-4 gap-2 md:flex-row">
      <Input
        onCustomInput={handleTodoTextChange}
        type="text"
        placeholder="Task that you need to complete"
      />
      <Input type="date" onCustomInput={handleTodoDueToChange} />
      <CreateTodoBoxConfirmButton onClick={handleCreateTodoClick} createTodo={{todoText, todoDueTo}} />
    </div>
  );
};

export default CreateTodoBox;

import React, { useState } from "react";
import EditTodoDialogTextInput from "./edit-todo-dialog-text-input/edit-todo-dialog-text-input";
import { TodoItemProps } from "../todo-item/todo-item";
import EditTodoDialogDateInput from "./edit-todo-dialog-date-input/edit-todo-dialog-date-input";
import EditTodoDialogButton from "./edit-todo-dialog-button/edit-todo-dialog-button";

type EditTodoDialogProps = {
  isShown: boolean;
  initialValue?: TodoItemProps;
  onUpdateConfirm: (updatedTodo: TodoItemProps) => void;
  onUpdateReject: () => void;
};

const EditTodoDialog = (props: EditTodoDialogProps) => {
  const [newTitle, setNewTitle] = useState("");
  const [newDate, setNewDate] = useState("");

  const handleTextInput = (value: string) => {
    setNewTitle(value);
  };

  const handleDateInput = (value: string) => {
    setNewDate(value);
  
  };

  const handleUpdateConfirm = (updatedTodo?: TodoItemProps) => {
    if (!updatedTodo) return;

    if (!newTitle || newTitle.length < 1) return;

    if (!newDate || newDate.length < 1) return;
    
    props.onUpdateConfirm({...updatedTodo, title: newTitle, dueTo: new Date(newDate)});
  }

  if (!props.isShown) {
    return null;
  }

  return (
    <div className="absolute px-8 py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 drop-shadow-xl rounded-xl w-1/2 flex flex-col align-middle justify-center gap-4">
      <EditTodoDialogTextInput
        onInput={handleTextInput}
        initialValue={props.initialValue?.title}
        placeholder={"New Title"}
      />
      <EditTodoDialogDateInput
        onChange={handleDateInput}
        initialValue={props.initialValue?.dueTo.toString()}
      />
      <div className="flex gap-3 justify-center align-middle">
        <EditTodoDialogButton
          onClick={() => handleUpdateConfirm(props.initialValue)}
          className={" bg-green-400 hover:bg-green-500 text-gray-800"}
          text={"confirm"}
        />
        <EditTodoDialogButton
          onClick={props.onUpdateReject}
          className={" bg-red-400 hover:bg-red-500 text-gray-200"}
          text={"reject"}
        />
      </div>
    </div>
  );
};

export default EditTodoDialog;

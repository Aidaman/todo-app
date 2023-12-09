import React, { useEffect, useState } from "react";
import { TodoItemProps } from "../todo-item/todo-item";
import EditTodoDialogButton from "./edit-todo-dialog-button/edit-todo-dialog-button";
import Input from "../shared/components/input/input";

type EditTodoDialogProps = {
  isShown: boolean;
  initialValue?: TodoItemProps;
  onUpdateConfirm: (updatedTodo: TodoItemProps) => void;
  onUpdateReject: () => void;
};

const EditTodoDialog = (props: EditTodoDialogProps) => {
  const [newTitle, setNewTitle] = useState(props.initialValue?.title ?? "");
  const [newDate, setNewDate] = useState(
    props.initialValue?.dueTo.toString() ?? ""
  );

  const handleTextInput = (value: string) => {
    setNewTitle(value);
  };

  const handleDateInput = (value: string) => {
    setNewDate(value);
  };

  const handleUpdateConfirm = (updatedTodo?: TodoItemProps) => {
    if (!updatedTodo) return;

    let title: string;
    if (!newTitle || newTitle.length < 1) {
      if (props.initialValue) {
        title = props.initialValue.title;
      } else throw new Error("Can not set a title of undefined Todo");
    
    } else title = newTitle;

    let dueTo: Date = new Date();
    if (!newDate || newDate.length < 1) {
      if (props.initialValue) {
        dueTo = props.initialValue.dueTo;
      } else throw new Error("Can not set a date of undefined Todo");

    } else dueTo = new Date(newDate);

    props.onUpdateConfirm({
      ...updatedTodo,
      title,
      dueTo,
    });

    setNewDate("");
    setNewTitle("");
  };

  if (!props.isShown) {
    return null;
  }

  return (
    <>
      <div
        className="overaly absolute top-0 left-0 w-full h-full z-1 bg-gray-700 opacity-10"
        onClick={() => props.onUpdateReject()}
      ></div>
      <div className="absolute z-2 w-4/5 sm:w-1/2 px-8 py-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 drop-shadow-2xl rounded-xl flex flex-col align-middle justify-center gap-4">
        <Input
          onCustomInput={handleTextInput}
          initialvalue={props.initialValue?.title}
          placeholder={"New Title"}
        />
        <Input
          onCustomInput={handleDateInput}
          type="date"
          initialvalue={props.initialValue?.dueTo.toString()}
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
    </>
  );
};

export default EditTodoDialog;

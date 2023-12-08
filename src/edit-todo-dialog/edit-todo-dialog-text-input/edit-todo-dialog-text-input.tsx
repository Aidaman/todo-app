import React, { ChangeEvent, useState } from "react";

type EditTodoDialogTextInputProps = {
  onInput(value: string): void;
  initialValue?: string;
  placeholder: string;
};

const EditTodoDialogTextInput = (props: EditTodoDialogTextInputProps) => {
  const [inputValue, setInputValue] = useState(props.initialValue ?? "");

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
    props.onInput(event.target.value);
  };

  return (
    <input
      required
      className="py-1 px-4 border-none outline-none rounded-xl block w-full bg-gray-100 text-gray-700 transition-all hover:shadow-md"
      type="text"
      value={inputValue}
      placeholder={props.placeholder}
      onInput={handleInput}
    />
  );
};

export default EditTodoDialogTextInput;

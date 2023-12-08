import React, { ChangeEvent, useState } from "react";

type EditTodoDialogDateInputProps = {
    initialValue?: string;
    onChange(value: string): void;
};

const EditTodoDialogDateInput = (props: EditTodoDialogDateInputProps) => {
  const [inputValue, setinputValue] = useState(props.initialValue ?? new Date().toString());

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setinputValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <input
      required
      className="px-4 py-1 w-full bg-gray-100 w-1/3 rounded-xl transition-all hover:shadow-md"
      value={inputValue}
      type="date"
      onInput={handleInput}
    />
  );
};

export default EditTodoDialogDateInput;

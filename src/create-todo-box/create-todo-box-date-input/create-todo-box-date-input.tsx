import React, { ChangeEvent, useState } from "react";

type CreateTodoBoxDateInputProps = {
  onChange: (value: string) => void;
};

const CreateTodoBoxDateInput = (props: CreateTodoBoxDateInputProps) => {
  const [inputValue, setinputValue] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setinputValue(event.target.value);
    props.onChange(event.target.value);
  };

  return (
    <input
      required
      className="px-4 py-1 bg-gray-100 w-1/3 rounded-xl transition-all hover:shadow-md"
      type="date"
      onInput={handleInput}
    />
  );
};

export default CreateTodoBoxDateInput;

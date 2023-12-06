import React, { ChangeEvent, useState } from "react";

type CreateTodoBoxTextInputProps = {
  placeholder?: string;
  onInput?: (value: string) => void;
};

const CreateTodoBoxTextInput = (props: CreateTodoBoxTextInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);

    if (!props.onInput) return;

    props!.onInput(event.target.value);
  };

  return (
    <input
      required
      className="py-1 px-4 border-none outline-none rounded-xl block w-full bg-gray-100 text-gray-700 transition-all hover:shadow-md"
      type="text"
      placeholder={props.placeholder}
      onInput={handleInput}
    />
  );
};

export default CreateTodoBoxTextInput;

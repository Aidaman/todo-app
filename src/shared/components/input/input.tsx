import classNames from "classnames";
import React, { ChangeEvent, useState } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  initialvalue?: unknown;
  onCustomInput?: (value: string) => void;
}

const defineStyling = ({ className }: InputProps): string =>
  classNames(
    className,
    "py-1 px-4 border-none outline-none rounded-xl block w-full bg-gray-100 text-gray-700 transition-all hover:shadow-md"
  );

const getInitialValue = ({ initialvalue }: InputProps) => {
  if (!initialvalue) return "";

  if (Array.isArray(initialvalue))
    throw new Error(
      "The Input received an Array of values, please define a singular value of type string"
    );

  if (typeof initialvalue === "object")
    throw new Error(
      "The Input received an Object, please define a singular value of type string"
    );

  const result: string = initialvalue.toString();

  if (!Number.isNaN(Date.parse(result))) return Date.parse(result);

  return result;
};

const Input = (props: InputProps) => {
  const [inputValue, setInputValue] = useState(getInitialValue(props));

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (!props.onCustomInput) return;
    props.onCustomInput(event.target.value);
  };

  return (
    <input
      {...props}
      className={defineStyling(props)}
      value={inputValue}
      onInput={handleInput}
    />
  );
};

export default Input;

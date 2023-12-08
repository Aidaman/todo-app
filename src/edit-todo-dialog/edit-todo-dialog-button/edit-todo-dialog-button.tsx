import classNames from "classnames";
import React from "react";

type EditTodoDialogButtonProps = {
  onClick: () => void;
  className: string;
  text: string;
};

const EditTodoDialogButton = (props: EditTodoDialogButtonProps) => (
  <button
    onClick={() => props.onClick()}
    className={classNames(
      props.className,
      "px-4 py-1 text-base text-center rounded-xl transition hover:shadow-md"
    )}
  >
    {props.text}
  </button>
);

export default EditTodoDialogButton;

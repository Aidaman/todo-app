import React from "react";

type EmptyTodoListProps = {
  message: string;
};

const TodoListEmpty = (props: EmptyTodoListProps) => <h2 className="font-sans font-medium text-xl text-center mt-auto">{props.message}</h2>;

export default TodoListEmpty;

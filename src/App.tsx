import "./App.css";
import CreateTodoBox from "./create-todo-box/create-todo-box";
import TodoList from "./todo-list/todo-list";
import TodoService from "./queries/api";
import { useQuery } from "@tanstack/react-query";
import TodoListEmpty from "./todo-list/todo-list-empty/todo-list-empty";

function App() {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["todos", localStorage],
    queryFn: () => TodoService.getTodos(),
  });

  return (
    <>
      <CreateTodoBox />
      {isLoading ? (
        <TodoListEmpty message={"Loading..."} />
      ) : isError ? (
        <TodoListEmpty message={"Apparently, somthing went wrong"} />
      ) : (
        <TodoList
          todos={data!}
        />
      )}
    </>
  );
}

export default App;

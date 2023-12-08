import { QueryClient } from "@tanstack/react-query";
import { CreateTodo } from "../create-todo-box/create-todo-box";
import { TodoItemProps } from "../todo-item/todo-item";

export default class TodoService {
  public static queryClient: QueryClient = new QueryClient();

  public static getTodos(): TodoItemProps[] {
    const localstorageTodos: string | null = localStorage.getItem("todos");
    if (!localstorageTodos) {
      localStorage.setItem("todos", JSON.stringify([]));
      return [];
    }

    return JSON.parse(localstorageTodos);
  }

  public static addNewTodo(createTodo: CreateTodo): void {
    if (createTodo.todoText.trim().length < 1) {
      return;
    }

    if (!createTodo.todoDueTo) {
      createTodo.todoDueTo = new Date().toString();
    }

    const localstorageTodos: string | null = localStorage.getItem("todos");
    if (!localstorageTodos) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    const todos: TodoItemProps[] = JSON.parse(localstorageTodos!);
    todos.sort((a: TodoItemProps, b: TodoItemProps) => +a.id - +b.id);
    const lastTodo: TodoItemProps | undefined = todos.at(-1);

    let newTodoId: number;
    if (!lastTodo) {
      newTodoId = 1;
    } else newTodoId = +lastTodo.id + 1;

    const newTodo: TodoItemProps = {
      id: newTodoId,
      createdAt: new Date(),
      updatedAt: new Date(),
      isCompleted: false,
      dueTo: new Date(createTodo.todoDueTo ?? ""),
      title: createTodo.todoText,
    };

    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
  }

  public static removeTodo(id: number | string): void {
    const localstorageTodos: string | null = localStorage.getItem("todos");
    if (!localstorageTodos) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    const todos: TodoItemProps[] = JSON.parse(localstorageTodos!);

    const item = todos.find((x) => x.id === id);
    if (!item)
      throw new Error(
        "Can not delete Todo that does not exist or does not belongs to the current user"
      );

    const result: TodoItemProps[] = todos.filter((x) => x.id !== id);
    localStorage.setItem("todos", JSON.stringify(result));
  }

  public static markTodoAsComplete(id: number | string): void {
    const localstorageTodos: string | null = localStorage.getItem("todos");
    if (!localstorageTodos) {
      localStorage.setItem("todos", JSON.stringify([]));
    }

    const todos: TodoItemProps[] = JSON.parse(localstorageTodos!);

    // No guard here, because if there is no element with such ID -> no exception will be thrown -> it'll simply have all checks for id as false and return unchanged array
    const result: TodoItemProps[] = todos.map((x) =>
      x.id !== id ? x : { ...x, isCompleted: true }
    );
    localStorage.setItem("todos", JSON.stringify(result));
  }
}

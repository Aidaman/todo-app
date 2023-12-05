import "./App.css";
import TodoItem from "./todo-item/todo-item";
import { TodoItemProps } from "./todo-item/todo-item";

function App() {
  let todoProps: TodoItemProps[] = [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      dueTo: new Date(2024, 12, 31),
      isCompleted: false,
      title: "Todo",
    },
  ];

  const handleOnComplete: (id: string | number) => TodoItemProps = (
    id: string | number
  ) => {
    const item = todoProps.find((x) => x.id === id);
    if (!item)
      throw new Error(
        "Can not complete Todo that does not exist or does not belongs to the current user"
      );

    if (item.isCompleted) return item;

    return {
      ...item,
      isCompleted: true,
    };
  };

  const handleOnDelete: (id: string | number) => TodoItemProps = (
    id: string | number
  ) => {
    const item = todoProps.find((x) => x.id === id);
    if (!item)
      throw new Error(
        "Can not delete Todo that does not exist or does not belongs to the current user"
      );

    todoProps = todoProps.filter((x) => x.id === id);
    return item;
  };

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {todoProps.map((item) => (
        <TodoItem {...item} onComplete={handleOnComplete} onDelete={handleOnDelete} />
      ))}
    </>
  );
}

export default App;

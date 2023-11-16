import useTodosData from "../../hooks/useTodosData";
import AddItemModal from "./AddItemModal/AddItemModal";
import TodoItem from "./TodoItem";

export default function Todos() {
  const { todos, setTodos } = useTodosData();
  const passDeleteTodoById = (id: string) => {
    setTodos(todos?.filter((item) => item.id !== id));
  };
  const passMarkTodoById = (id: string) => {
    console.log(id);
    // mark todo done
  };

  return (
    <>
      <div className="dw-todos w-full sm:w-125 m-auto px-2 sm:p-0">
        {todos?.map((todo) => (
          <TodoItem
            todo={todo}
            deleteTodoById={passDeleteTodoById}
            markTodoById={passMarkTodoById}
          />
        ))}
        <AddItemModal />
      </div>
    </>
  );
}

import { TodoModel } from "../../types";
import Tag from "./Tag";
import clsx from "clsx";
import "./todoItem.css";
import { Dispatch, SetStateAction } from "react";

interface TodoItemProps {
  todo: TodoModel;
  hoveredOrClickedId: string;
  setHoveredOrClickedId: Dispatch<SetStateAction<string>>;
}

export default function TodoItem({
  todo,
  hoveredOrClickedId,
  setHoveredOrClickedId,
}: TodoItemProps) {
  const isFocus = todo.id === hoveredOrClickedId;
  const handleTodoItemClick = () => {
    if (isFocus) setHoveredOrClickedId("");
    else setHoveredOrClickedId(todo.id);
  };

  return (
    <div
      className={clsx(
        "dw-todo-item bg-white w-full rounded shadow-md px-8 py-6 my-8 relative",
        "flex flex-col gap-3",
        isFocus && "expand"
      )}
      draggable
      onClick={handleTodoItemClick}
      onMouseEnter={() => setHoveredOrClickedId(todo.id)}
      onMouseLeave={() => setHoveredOrClickedId("")}
    >
      <header className="text-gray-700 text-2xl font-extrabold">
        {todo.title}
      </header>
      {todo.content && (
        <article
          className={clsx(
            "dw-todo-item-content",
            "text-gray-500 text-medium",
            isFocus && "expand"
          )}
        >
          {todo.content}
        </article>
      )}
      <div>
        {todo.tags?.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
}

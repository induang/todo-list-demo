import { TodoModel } from "../../types";
import Tag from "./Tag";
import clsx from "clsx";
import "./todoItem.css";
import DoneAsideIcon from "../../assets/doneAsideIcon.png";
import DeleteAsideIcon from "../../assets/deleteAsideIcon.png";
import { useState } from "react";

interface TodoItemProps {
  todo: TodoModel;
  deleteTodoById: (id: string) => void;
  markTodoById: (id: string) => void;
}

export default function TodoItem({
  todo,
  deleteTodoById,
  markTodoById,
}: TodoItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDeleteDragOver = () => {
    if (!isDeleted) {
      setIsDeleted(true);
      deleteTodoById(todo.id);
    }
  };
  const handleDoneDragOver = () => {
    if (!isDone) {
      setIsDone(true);
      markTodoById(todo.id);
    }
  };

  return (
    <div className="relative">
      {isHovered && (
        <aside
          className="fixed left-2 top-1/2 z-10"
          onDragOver={handleDeleteDragOver}
          onClick={handleDeleteDragOver}
        >
          <img src={DeleteAsideIcon} className="w-16 sm:w-36"></img>
        </aside>
      )}
      <div
        className={clsx(
          "dw-todo-item bg-white w-full rounded shadow-md px-8 py-6 my-8 relative",
          isHovered && "expand"
        )}
        draggable
        onClick={() => setIsHovered(!isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <header className="text-gray-700 text-2xl font-extrabold">
          {todo.title}
        </header>
        <article
          className={clsx(
            "dw-todo-item-content",
            "text-gray-500 text-medium",
            isHovered && "expand"
          )}
        >
          {todo.content}
        </article>
        <div>
          {todo.tags?.map((tag) => (
            <Tag tag={tag} />
          ))}
        </div>
      </div>
      {isHovered && (
        <aside
          className="fixed right-2 top-1/2 z-10"
          onDragOver={handleDoneDragOver}
          onClick={handleDoneDragOver}
        >
          <img src={DoneAsideIcon} className="w-16 sm:w-36"></img>
        </aside>
      )}
    </div>
  );
}

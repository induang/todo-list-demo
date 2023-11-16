import useTodosData from "../../hooks/useTodosData";
import AddItemModal from "./AddItemModal/AddItemModal";
import TodoItem from "./TodoItem";
import DoneAsideIcon from "../../assets/doneAsideIcon.png";
import DeleteAsideIcon from "../../assets/deleteAsideIcon.png";
import { useState } from "react";
import clsx from "clsx";

export default function Todos() {
  const { todos, setTodos } = useTodosData();
  const [hoveredOrClickedId, setHoveredOrClickedId] = useState("");
  const [isDeleteLight, setIsDeleteLight] = useState(false);
  const handleDeleteClick = () => {
    setTodos(todos?.filter((item) => item.id !== hoveredOrClickedId));
  };
  const handleDeleteDragEnter = () => {
    console.log(hoveredOrClickedId);
    setIsDeleteLight(true);
    handleDeleteClick();
  };
  const handleDeleteDragLeave = () => {
    setIsDeleteLight(false);
  };

  const handleDoneDragEnter = () => {
    // marked the todo done logic
  };
  const handleDoneDragLeave = () => {
    // marked the todo done logic
  };
  const handleDoneClick = () => {
    // marked the todo done logic
  };
  return (
    <div className="dw-todos w-full sm:w-125 m-auto px-2 sm:p-0">
      {hoveredOrClickedId && (
        <aside
          className={clsx(
            "fixed left-2 top-1/2 z-10",
            isDeleteLight && "bg-cyan-100"
          )}
          onDragEnter={handleDeleteDragEnter}
          onDragLeave={handleDeleteDragLeave}
          onClick={handleDeleteClick}
        >
          <img src={DeleteAsideIcon} className="w-16 sm:w-36"></img>
        </aside>
      )}
      <main>
        {todos?.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            hoveredOrClickedId={hoveredOrClickedId}
            setHoveredOrClickedId={setHoveredOrClickedId}
          />
        ))}
      </main>
      {hoveredOrClickedId && (
        <aside
          className={clsx("fixed right-2 top-1/2 z-10")}
          onDragOver={handleDoneDragEnter}
          onDragLeave={handleDoneDragLeave}
          onClick={handleDoneClick}
        >
          <img src={DoneAsideIcon} className="w-16 sm:w-36 "></img>
        </aside>
      )}
      <AddItemModal />
    </div>
  );
}

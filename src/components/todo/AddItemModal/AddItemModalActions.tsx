// 无用 废弃

import CloseIcon from "../../../assets/closeIcon.png";
import DoneIcon from "../../../assets/doneIcon.png";
import useTodosData from "../../../hooks/useTodosData";
import { TodoModel } from "../../../types";

export default function AddItemModalActions() {
  const handleCloseClick = () => {
    window.history.go(0);
  };
  const handleAddTodoClick = () => {};
  return (
    <div className="text-center">
      <img
        src={CloseIcon}
        className="m-4 mb-0 w-8 h-8 inline"
        onClick={handleCloseClick}
      />
      <img
        src={DoneIcon}
        className="m-4 mb-0 w-8 h-8 inline"
        onClick={handleAddTodoClick}
      />
    </div>
  );
}

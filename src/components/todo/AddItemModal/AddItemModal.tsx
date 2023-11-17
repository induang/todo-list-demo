import InputField from "../../controls/InputField";
import BasicModel from "../../modal/BasicModel";
import AddItemModalOpener from "./AddItemModalOpener";
import MultiLineInputField from "../../controls/MultiLineInputField";
import CloseIcon from "../../../assets/closeIcon.png";
import DoneIcon from "../../../assets/doneIcon.png";
import useTodosData from "../../../hooks/useTodosData";
import { useState } from "react";
import { TodoModel } from "../../../types";
import RadioGroup from "../../controls/RadioGroup";
import AddItemModalActions from "./AddItemModalActions";

export default function AddItemModal() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [level, setLevel] = useState(0);
  const { todos, setTodos } = useTodosData();

  const handleCloseClick = () => {
    window.history.go(0);
  };

  const handleAddTodoClick = () => {
    const newTodo: TodoModel = {
      id: window.crypto.randomUUID(),
      title,
      content,
      tags: [
        { id: window.crypto.randomUUID(), text: `P${level}`, level },
        {
          id: window.crypto.randomUUID(),
          text: tag,
          level: 0,
        },
      ],
    };
    if (todos?.length) {
      setTodos([newTodo, ...todos]);
    } else {
      setTodos([newTodo]);
    }
    window.history.go(0);
  };
  return (
    <BasicModel opener={AddItemModalOpener()} actions={AddItemModalActions()}>
      <div className="dw-add-item-form w-full sm:w-125 bg-white text-left p-10 flex flex-col gap-3 z-10">
        <InputField
          aria-label="title"
          placeholder="take dog out on wolk"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <MultiLineInputField
          aria-label="content"
          placeholder="he needs vaccine shot too"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <InputField
          aria-label="tags"
          placeholder="Tag"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <div className="mt-4">
          <RadioGroup aria-label="level" value={level} setValue={setLevel} />
        </div>
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
      </div>
    </BasicModel>
  );
}

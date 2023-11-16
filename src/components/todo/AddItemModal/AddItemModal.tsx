import InputField from "../../controls/InputField";
import RadioField from "../../controls/RadioField";
import BasicModel from "../../modal/BasicModel";
import AddItemModalOpener from "./AddItemModalOpener";
import MultiLineInputField from "../../controls/MultiLineInputField";
import CloseIcon from "../../../assets/closeIcon.png";
import DoneIcon from "../../../assets/doneIcon.png";
import useTodosData from "../../../hooks/useTodosData";
import { useState } from "react";
import { TodoModel } from "../../../types";

export default function AddItemModal() {
  const { todos, setTodos } = useTodosData();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleCloseClick = () => {
    window.history.go(0);
  };
  const handleAddTodoClick = () => {
    const newTodo: TodoModel = {
      id: window.crypto.randomUUID(),
      title,
      content,
      tags: [],
    };
    if (todos?.length) {
      setTodos([newTodo, ...todos]);
    } else {
      setTodos([newTodo]);
    }
    window.history.go(0);
  };
  return (
    <BasicModel opener={AddItemModalOpener()}>
      <div className="dw-add-item-form w-full sm:w-125 bg-white text-left p-10 flex flex-col gap-3">
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
        <InputField aria-label="tags" placeholder="Tag" />
        <div className="mt-4">
          <RadioField>1</RadioField>
          <RadioField>2</RadioField>
          <RadioField>3</RadioField>
          <RadioField>4</RadioField>
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

import { useEffect, useState } from "react";
import { TodoModel } from "../types";

const defaultTodos: Array<TodoModel> = [
  {
    id: "xx-01",
    title: "Lorem ipsum dolor 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 4 },
    ],
  },
  {
    id: "xx-02",
    title: "Lorem ipsum dolor 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 4 },
    ],
  },
  {
    id: "xx-03",
    title: "Lorem ipsum dolor 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 4 },
    ],
  },
  {
    id: "xx-04",
    title: "Lorem ipsum dolor 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 4 },
    ],
  },
  {
    id: "xx-05",
    title: "Lorem ipsum dolor 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 4 },
    ],
  },
];

export default function useTodosData() {
  const [todos, setTodos] = useState<Array<TodoModel> | undefined>(() => {
    const todosItem = window.localStorage.getItem("dw-todos") || "";
    if (todosItem === "") {
      const todosStringify = JSON.stringify(defaultTodos);
      window.localStorage.setItem("dw-todos", todosStringify);
      return JSON.parse(todosStringify);
    } else {
      return JSON.parse(todosItem);
    }
  });
  useEffect(() => {
    window.localStorage.setItem("dw-todos", JSON.stringify(todos) || "");
  }, [todos]);
  return { todos, setTodos };
}

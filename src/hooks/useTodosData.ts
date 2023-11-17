import { useEffect, useState } from "react";
import { TodoModel } from "../types";

const defaultTodos: Array<TodoModel> = [
  {
    id: "31cce6dd-9274-4824-9671-fb555a25b5ab",
    title: "欢迎来到 TODO",
    content: "请看一点教程",
    tags: [
      { id: "d6f2e29f-893d-482b-ba39-bc1e2b181ff7", text: "P1", level: 1 },
      { id: "80357afc-600f-4bbd-9f66-6f0341aed1d6", text: "教程", level: 0 },
    ],
  },
  {
    id: "610f3d83-fa95-4856-a90e-b415738d28bf",
    title: "适配了一点移动端和web端",
    content:
      "在移动端需要点击显示更多内容,点击删除, 在web端悬浮显示更多内容,拖动删除;时间关系,两端都没有 done 逻辑",
    tags: [
      { id: "833ee7ec-8d4c-46db-9e22-db09aad0a588", text: "P1", level: 1 },
      { id: "2e0cd6d0-1971-4332-a850-39ebe069f89b", text: "教程", level: 0 },
    ],
  },
  {
    id: "b02f5601-49d2-441a-9f7e-6df5882fb1f2",
    title: "如果你不知道",
    content: "什么是在xx端需要xx, 那么照做就好啦!",
    tags: [
      { id: "0b34b4c9-59f2-49ad-aa21-4a56efe31532", text: "P1", level: 1 },
      { id: "1d81e45e-67ba-449e-bfba-1d64f721de4a", text: "教程", level: 0 },
    ],
  },
  {
    id: "xx-01",
    title: "Lorem ipsum dolor 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 0 },
    ],
  },
  {
    id: "xx-02",
    title: "Lorem ipsum dolor 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 0 },
    ],
  },
  {
    id: "xx-03",
    title: "Lorem ipsum dolor 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 0 },
    ],
  },
  {
    id: "xx-04",
    title: "Lorem ipsum dolor 4",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 0 },
    ],
  },
  {
    id: "xx-05",
    title: "Lorem ipsum dolor 5",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    tags: [
      { id: "tag-01", text: "P1", level: 1 },
      { id: "tag-02", text: "Health", level: 0 },
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

import { TagModel } from "../../types";

interface TagProps {
  tag: TagModel;
}

const backgroundColors = ["", "bg-pink-100", "", "", "bg-green-50"];
const textColors = ["", "text-rose-600", "", "", "text-green-600"];

export default function Tag({ tag }: TagProps) {
  return (
    <span
      className={`badge badge-lg text-xs font-semibold m-3 
      ${backgroundColors[tag.level]} ${textColors[tag.level]}`}
    >
      {tag.text}
    </span>
  );
}

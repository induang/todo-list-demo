import clsx from "clsx";
import { TagModel } from "../../types";

interface TagProps {
  tag: TagModel;
}

export default function Tag({ tag }: TagProps) {
  return (
    <span
      className={clsx(
        "mr-3 badge badge-lg text-xs font-semibold",
        tag.level ? "bg-pink-100 text-rose-600" : "bg-green-50 text-green-600"
      )}
    >
      {tag.text}
    </span>
  );
}

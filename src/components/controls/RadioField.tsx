import { ClassAttributes, HTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export default function RadioField(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLSpanElement> &
    HTMLAttributes<HTMLSpanElement>
) {
  return (
    <span
      {...props}
      className="mr-4 btn btn-sm btn-square btn-outline btn-secondary font-medium text-base text-rose-600 bg-pink-100"
    >
      {props.children}
    </span>
  );
}

import clsx from "clsx";
import {
  ClassAttributes,
  Dispatch,
  HTMLAttributes,
  SetStateAction,
} from "react";
import { JSX } from "react/jsx-runtime";

interface RadioFieldCustomProps {
  checked: boolean;
  setValue: Dispatch<SetStateAction<number>>;
  level: number;
}

export default function RadioField(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLSpanElement> &
    HTMLAttributes<HTMLSpanElement> &
    RadioFieldCustomProps
) {
  return (
    <span
      {...props}
      className={clsx(
        "inline-block w-9 h-9 mr-4 rounded-sm text-center font-medium text-base leading-9",
        props.checked
          ? "text-rose-600 bg-pink-100"
          : "text-gray-400 bg-white border border-gray-100"
      )}
      onClick={() => {
        props.setValue(props.level);
        console.log(props.level);
      }}
    >
      {props.children}
    </span>
  );
}

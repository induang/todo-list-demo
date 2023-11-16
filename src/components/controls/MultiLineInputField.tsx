import { ClassAttributes, InputHTMLAttributes } from "react";
import { JSX } from "react/jsx-runtime";

export default function InputField(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      {...props}
      type="text"
      className="input input-bordered w-full h-20 align-text-top"
    />
  );
}

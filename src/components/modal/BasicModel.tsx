import clsx from "clsx";
import { ReactElement, useState } from "react";

interface BasicModelProps {
  children: ReactElement;
  opener: ReactElement;
  actions?: ReactElement; // 该属性废弃
}

export default function BasicModel({ children, opener }: BasicModelProps) {
  const [isVisible, setIsVisble] = useState(false);
  return (
    <>
      <dialog className={clsx("modal", isVisible && "modal-open")}>
        <div className="modal-box fixed bottom-20 rounded max-w-fit p-0 z-10">
          {children}
        </div>
        <form
          method="dialog"
          className="modal-backdrop bg-white/30"
          onClick={() => setIsVisble(!isVisible)}
        ></form>
      </dialog>
      <label
        className="m-auto fixed bottom-8 left-0 right-0 z-20 text-center"
        onClick={() => setIsVisble(!isVisible)}
      >
        {opener}
      </label>
    </>
  );
}

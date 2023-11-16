import clsx from "clsx";
import { ReactElement, useState } from "react";

export default function BasicModel(props: {
  children: ReactElement;
  opener: ReactElement;
  actions?: ReactElement;
}) {
  const [isVisible, setIsVisble] = useState(false);
  return (
    <>
      <dialog className={clsx("modal", isVisible && "modal-open")}>
        <div className="modal-box fixed bottom-0 rounded max-w-fit p-0">
          {props.children}
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setIsVisble(!isVisible)}
        ></form>
      </dialog>
      <label onClick={() => setIsVisble(!isVisible)}>{props.opener}</label>
    </>
  );
}

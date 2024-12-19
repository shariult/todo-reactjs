import { ComponentPropsWithoutRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

type modalCardPropsType = {
  onConfirm: () => void;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"div">;

function Backdrop(props: { onConfirm: () => void }) {
  return <div onClick={props.onConfirm} className={styles["backdrop"]}></div>;
}

function Modal(props: modalCardPropsType) {
  const { className, children, onConfirm, ...otherProps } = props;
  const allClasses = className
    ? `${styles["modal"]} ${className}`
    : styles["modal"];
  return (
    <>
      {createPortal(
        <Backdrop onConfirm={onConfirm} />,
        document.getElementById("backdrop")!
      )}
      {createPortal(
        <div {...otherProps} className={allClasses} onClick={onConfirm}>
          {children}
        </div>,
        document.getElementById("modal")!
      )}
    </>
  );
}

export default Modal;

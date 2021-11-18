import { createPortal } from "react-dom";
import s from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

export function Modal({ children, onCloseModal }) {
  return createPortal(
    <div className={s.backdrop} onClick={onCloseModal}>
      <div className={s.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

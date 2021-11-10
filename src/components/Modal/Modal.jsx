import s from "./Modal.module.scss";

export function Modal({ children }) {
  return (
    <div className={`${s.isHidden} ${s.backdrop}`}>
      <div className={s.modal}>{children}</div>
    </div>
  );
}

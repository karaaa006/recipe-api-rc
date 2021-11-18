import { useState } from "react";
import s from "./Multiselect.module.scss";

export function Multiselect({
  ingredientList,
  onClickItemList,
  onSubmit,
  onClick,
}) {
  const [multiselectInput, setMultiselectInput] = useState("");

  const handleChangeMultiselectInput = (e) => {
    setMultiselectInput(e.target.value);
  };
  const onSubmitModify = (e) => {
    e.preventDefault();

    onSubmit(e);

    setMultiselectInput("");
  };

  return (
    <form className={s.multiselect} onSubmit={onSubmitModify}>
      <input
        className={s.multiselectInput}
        onChange={handleChangeMultiselectInput}
        type="text"
        value={multiselectInput}
        name="multiselectInput"
      />
      <ul className={s.multiselectList}>
        {ingredientList.map((ingredient, idx) => (
          <li className={s.multiselectItem} key={idx} onClick={onClickItemList}>
            {ingredient}
          </li>
        ))}
      </ul>
      <button type="button" className={s.findBtn} onClick={onClick}>
        Find
      </button>
    </form>
  );
}

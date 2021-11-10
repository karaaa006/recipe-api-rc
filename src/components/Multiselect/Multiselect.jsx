import shortid from "shortid";
import s from "./Multiselect.module.scss";

export function Multiselect({
  onChange,
  ingredientList,
  onKeyDown,
  multiselect,
  onClickItemList,
}) {
  return (
    <div className={s.multiselect}>
      <input
        className={s.multiselectInput}
        onChange={onChange}
        onKeyDown={onKeyDown}
        type="text"
        value={multiselect}
        name="multiselect"
        id="multiselect"
      />
      <ul className={s.multiselectList}>
        {ingredientList.map((ingredient) => (
          <li
            className={s.multiselectItem}
            key={shortid.generate()}
            onClick={onClickItemList}
          >
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}

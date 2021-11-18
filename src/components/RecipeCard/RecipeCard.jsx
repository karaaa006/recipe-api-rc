import { getRecipeInfoById } from "../../api/api";
// import { Modal } from "../Modal/Modal";
import s from "./RecipeCard.module.scss";

export function RecipeCard({
  recipeName,
  usedIngredients,
  missedIngredients,
  image,
  id,
  onClick,
}) {
  // const handleClick = async (recipeId) => {
  //   try {
  //     const data = await getRecipeInfoById(recipeId);

  //     console.log(data);
  //   } catch (err) {
  //     console.log(err, recipeId);
  //   }
  // };

  return (
    <li className={s.recipe} onClick={() => onClick(id)}>
      <img src={image} alt={recipeName} className={s.image} />

      <div className={s.recipeInfoWrap}>
        <h2 className={s.title}>{recipeName}</h2>

        <p className={s.ingredientsList}>Used ingredients: {usedIngredients}</p>
        <p className={s.ingredientsList}>
          Missed ingredients: {missedIngredients}
        </p>
      </div>
    </li>
  );
}

import axios from "axios";
// import { Modal } from "../Modal/Modal";
import s from "./RecipeCard.module.scss";

export function RecipeCard({
  recipeName,
  usedIngredients,
  missedIngredients,
  image,
  id,
}) {
  const handleClick = (e) => {
    const { recipeId } = e.currentTarget.dataset;
    console.dir(e.currentTarget.dataset);

    axios
      .get(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=050fa7360d5c4511bc2ed3f38314a18f`
      )
      .then((response) => {
        console.log(response);
      });
  };

  return (
    <li key={id} className={s.recipe} onClick={handleClick} data-recipe-id={id}>
      <img src={image} alt={recipeName} className={s.image} />
      <div className={s.recipeInfoWrap}>
        <h2 className={s.title}>{recipeName}</h2>
        <p styles={{ color: "green" }} className={s.ingredientsList}>
          {usedIngredients}
        </p>
        <p styles={{ color: "red" }} className={s.ingredientsList}>
          {missedIngredients}
        </p>
        <button className={s.add}>+</button>
      </div>
    </li>
  );
}

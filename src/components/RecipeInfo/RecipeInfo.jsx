import s from "./RecipeInfo.module.scss";
export function RecipeInfo({ recipe }) {
  const { title, image, glutenFree, instructions, extendedIngredients } =
    recipe;

  return (
    <div className={s.recipeInfo}>
      <div className="title">{title}</div>
      <img src={image} alt={title} className={s.recipeImage} />
      {glutenFree && <p>glutenFree</p>}
      <p>{instructions}</p>
      {/* <p>{extendedIngredients.map((i) => i.name).join(", ")}</p> */}
    </div>
  );
}

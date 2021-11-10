import { RecipeCard } from "../RecipeCard/RecipeCard.jsx";

export function RecipeList({ recipes }) {
  return (
    <ul className="recipeList">
      {recipes.map((recipe) => {
        // const inredients = recipe.extendedIngredients.map(
        //   (ingredient) => ingredient.name
        // );
        const usedIngredients = recipe.usedIngredients.map((i) => i.name);
        const missedIngredients = recipe.missedIngredients.map((i) => i.name);
        return (
          <RecipeCard
            recipeName={recipe.title}
            image={recipe.image}
            usedIngredients={usedIngredients.join(", ")}
            missedIngredients={missedIngredients.join(", ")}
            // ingredients={inredients.join(", ")}
            key={recipe.id}
          />
        );
      })}
    </ul>
  );
}

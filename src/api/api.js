import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spoonacular.com/",
  params: {
    apiKey: "050fa7360d5c4511bc2ed3f38314a18f",
    number: 12,
  },
});

export async function findRecipesByIngredients(ingredientList) {
  try {
    const ingredientsString = ingredientList.join(",+");
    const { data } = await api.get(
      `recipes/findByIngredients?ingredients=${ingredientsString}`
    );

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getRandomRecipes(num = 1) {
  try {
    const { data } = await api.get(`/recipes/random?number=${num}`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

export async function getRecipeInfoById(id) {
  try {
    const { data } = await api.get(`recipes/${id}/information`);

    return data;
  } catch (e) {
    console.log(e);
  }
}

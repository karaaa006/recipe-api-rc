import axios from "axios";
const api = axios.create({
  baseURL: "https://api.spoonacular.com/",
  headers: { "Content-Type": "application/json" },
});

api.defaults.params = {
  apiKey: "050fa7360d5c4511bc2ed3f38314a18f",
};

export async function getRandomRecipe() {
  try {
    const data = await (await api.get("recipes/random")).data;
    return data;
  } catch (err) {
    console.error(err);
  }
}

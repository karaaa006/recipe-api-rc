import "./App.scss";
import Loader from "react-loader-spinner";
import { useState } from "react";
import {
  findRecipesByIngredients,
  getRandomRecipes,
  getRecipeInfoById,
} from "./api/api";
import { RecipeList } from "./components/RecipeList/RecipeList.jsx";
// import { Header } from "./components/Header/Header";
import { Modal } from "./components/Modal/Modal";
import { Multiselect } from "./components/Multiselect/Multiselect";
import { RecipeInfo } from "./components/RecipeInfo/RecipeInfo";

function App() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [ingredientList, setIngredientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState({});

  const onClickRecipeCard = async (id) => {
    try {
      const recipe = await getRecipeInfoById(id);

      setCurrentRecipe(recipe);
      console.log(recipe);
      toggleIsShowModal();
    } catch (e) {
      console.log(e);
    }
  };

  const toggleIsShowModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const addIngredient = (e) => {
    console.log(e.target.multiselectInput.value);
    if (!ingredientList.includes(e.target.multiselectInput.value)) {
      setIngredientList((prev) => [...prev, e.target.multiselectInput.value]);
    }
  };

  const findRecipes = async () => {
    try {
      setIsLoading(true);
      const recipes = await findRecipesByIngredients(ingredientList);

      setRecipes(recipes);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteItem = (e) => {
    console.dir(e.target);
    setIngredientList((prev) => prev.filter((el) => el !== e.target.innerText));
  };

  return (
    <>
      <div className="App">
        {/* <Header search={search} onChange={handleChange} /> */}
        <Multiselect
          onClick={findRecipes}
          onSubmit={addIngredient}
          ingredientList={ingredientList}
          onClickItemList={handleDeleteItem}
        />
        <section className="section">
          <RecipeList recipes={recipes} onClickRecipeCard={onClickRecipeCard} />
        </section>

        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          visible={isLoading}
        />
      </div>
      {isShowModal && (
        <Modal onCloseModal={toggleIsShowModal}>
          <RecipeInfo recipe={currentRecipe} />
        </Modal>
      )}
    </>
  );
}

export default App;

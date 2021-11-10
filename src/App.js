import "./App.scss";
import React from "react";
import axios from "axios";
import { RecipeList } from "./components/RecipeList/RecipeList.jsx";
// import { Header } from "./components/Header/Header";
// import { Modal } from "./components/Modal/Modal";
import { Multiselect } from "./components/Multiselect/Multiselect";

class App extends React.Component {
  state = {
    recipes: [],
    search: "",
    multiselect: "",
    ingredientList: [],
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addIngredient = (e) => {
    if (
      e.code === "Enter" &&
      !this.state.ingredientList.includes(e.target.value)
    ) {
      this.setState((prev) => {
        return {
          ingredientList: [...prev.ingredientList, e.target.value],
          multiselect: "",
        };
      });
    }
  };

  findRecipes = () => {
    axios
      .get(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${this.state.ingredientList.join(
          ",+"
        )}&number=10&apiKey=050fa7360d5c4511bc2ed3f38314a18f`
      )
      .then((res) => {
        this.setState({ recipes: res.data });
        console.log(res);
      });
  };

  handleDeleteItem = (e) => {
    console.dir(e.target);
    this.setState((prev) => {
      return {
        ingredientList: prev.ingredientList.filter(
          (el) => el !== e.target.innerText
        ),
      };
    });
  };

  componentDidMount() {
    // axios
    //   .get(
    //     "https://api.spoonacular.com/recipes/random?number=10&apiKey=050fa7360d5c4511bc2ed3f38314a18f"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       recipes: res.data.recipes,
    //     });
    //   });
  }

  render() {
    return (
      <>
        <div className="App">
          {/* <Header search={this.state.search} onChange={this.handleChange} /> */}
          <Multiselect
            onChange={this.handleChange}
            onKeyDown={this.addIngredient}
            ingredientList={this.state.ingredientList}
            multiselect={this.state.multiselect}
            onClickItemList={this.handleDeleteItem}
          />
          <button onClick={this.findRecipes}>Find</button>
          <section className="section">
            <RecipeList recipes={this.state.recipes} />
          </section>
        </div>
        {/* <Modal>123</Modal> */}
      </>
    );
  }
}

export default App;

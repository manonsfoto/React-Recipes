import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RecipeList from "../../components/recipeList/RecipeList";
import { IRecipe, IRecipeAPI } from "../../interfaces/IRecipe";

const apiLink = import.meta.env.VITE_API_LINK;

const Home = () => {
  const [recipes, setRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetch(apiLink)
      .then((res) => res.json())
      .then((res: IRecipeAPI) => setRecipes(res.recipes));
  }, []);

  return (
    <>
      <Header recipes={recipes} />
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Home;

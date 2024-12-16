import { IRecipe } from "../../interfaces/IRecipe";
import Recipe from "../recipe/Recipe";
import "./RecipeList.css";

interface Props {
  recipes: IRecipe[];
}

const RecipeList: React.FC<Props> = ({ recipes }) => {
  return (
    <section className="r-list">
      <div>
        <h3>All Recipes</h3>
      </div>

      <div className="grid-layout">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeList;

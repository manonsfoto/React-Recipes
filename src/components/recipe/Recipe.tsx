import { IRecipe } from "../../interfaces/IRecipe";
import "./Recipe.css";

interface Props {
  recipe: IRecipe;
}

const Recipe: React.FC<Props> = ({ recipe }) => {
  return (
    <article className="card">
      <img src={recipe.image} alt={recipe.name} />
      <div className="text flex">
        <h4>{recipe.name}</h4>
        <p>{recipe.cuisine}</p>
      </div>
    </article>
  );
};

export default Recipe;

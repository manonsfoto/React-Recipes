import { useEffect, useState } from "react";
import { IRecipe } from "../../interfaces/IRecipe";
import "./Header.css";
import logo from "../../../public/logo.svg";
interface Props {
  recipes: IRecipe[];
}

const Header: React.FC<Props> = ({ recipes }) => {
  const [search, setSearch] = useState<string>("");
  const [searchedRecipes, setSearchedRecipes] = useState<IRecipe[]>([]);

  useEffect(() => {
    if (recipes) {
      const filterByName = recipes.filter((singleRecipe) =>
        singleRecipe.name.toLowerCase().includes(search.toLowerCase())
      );

      setSearchedRecipes(filterByName);
    } else {
      console.log("no data 😭");
    }
  }, [search, recipes]);

  return (
    <header className="flex header">
      <a href="#">
        <img className="logo" src={logo} alt="logo" />
      </a>

      <nav className="flex nav">
        <ul className="flex nav-list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>{" "}
        <section className="search-box">
          <input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearch(e.target.value)
            }
            type="text"
            value={search}
            placeholder="search"
          />
        </section>
      </nav>

      <div className="search-output">
        {search.length > 0 && (
          <div className="flex">
            {searchedRecipes.length > 0 ? (
              searchedRecipes.map((recipe) => (
                <a className="recipe-name" key={recipe.id} href="#">
                  {recipe.name}
                </a>
              ))
            ) : (
              <p>nothing found</p>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

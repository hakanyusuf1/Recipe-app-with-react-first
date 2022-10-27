import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Div from "./Home.styled";
import RecipesCards from "./RecipesCard";

const Home = () => {
  const [values, setValues] = useState({
    foodName: "",
    selectType: "",
  });

  const apiId = "5972fd79";
  const apiKeyy = "d32a3880a1f03cf9ed0b00c612bce233";
  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${values.foodName}&app_id=${apiId}&app_key=${apiKeyy}&mealType=${values.selectType}`;

  const [recipes, setrecipes] = useState([]);
  const getApı = async () => {
    try {
      const { data } = await axios(url);
      //  console.log(data)
      setrecipes(data.hits);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };
  const onSubmitLogin = (e) => {
    e.preventDefault();
    console.log("calistii");
    getApı();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={onSubmitLogin} className=" container my-4">
        <fieldset>
          <div className="mb-3">
            <label htmlFor="disabledTextInput" className="form-label">
              Food Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              value={values.foodName}
              id="foodName"
              className="form-control"
              placeholder="Example Pizza"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="disabledSelect" className="form-label">
              Meal Type?
            </label>
            <select
              onChange={handleChange}
              id="selectType"
              className="form-select"
            >
              <option value="breakfast">Breakfast</option>
              <option value="dinner">Dinner</option>
              <option value="lunch">Lunch</option>
              <option value="snack">Snack</option>
              <option value="teatime">Teatime</option>
            </select>
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: "#1B7F79",
              color: "aqua",
              width: "100%",
              height: "3rem",
            }}
            className="btn"
          >
            Submit
          </button>
        </fieldset>
      </form>
      {values.selectType && (
        <h1 className="text-center">
          Here all {`${values.foodName}`} recepies
        </h1>
      )}
      <Div>
        {recipes.map((recipe, index) => (
          <RecipesCards recipe={recipe} key={index} />
        ))}
      </Div>
    </div>
  );
};

export default Home;

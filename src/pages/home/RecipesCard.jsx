import React from "react";
import { useNavigate } from "react-router-dom";

function RecipesCard({ recipe }) {
  const navigate = useNavigate();
  return (
    <div>
      <div className="card shadow" style={{ width: "18rem", height: "26rem" }}>
        <img src={recipe?.recipe?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{recipe?.recipe?.label}</h5>
          <button
            onClick={() => navigate(`/detail`, { state: recipe.recipe })}
            href="#"
            style={{ color: "aqua", backgroundColor: "#1B7F79" }}
            className="btn "
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipesCard;

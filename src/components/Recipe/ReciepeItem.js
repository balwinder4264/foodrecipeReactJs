import React from "react";
import { Link } from "react-router-dom";
import "./recipeitem.css";
const RecipeItem = ({ recipe }) => {
  return (
    <div id="reciepe-section1">
      <div className="dark-overlay">
        <div className=" d-flex container justify-content-center flex-wrap ">
          {recipe.getAllRecipe.map(data => (
            <div
              className="card mt-5 mr-2"
              style={{
                width: "18rem",
                border: "#ADD8E6 3px solid"
              }}
              key={data._id}
            >
              <div className="card-header">{data.name}</div>
              <div className="card-body ">
                <h5 className="card-title">Descriptione</h5>
                <p className="card-text  text-primary ">{data.description}</p>
                <div className="card-footer bg-transparent border-primary">
                  <Link
                    to={`/recipes/${data._id}`}
                    className="btn btn-primary"
                    id="footerbutton"
                  >
                    {" "}
                    {data.name}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;

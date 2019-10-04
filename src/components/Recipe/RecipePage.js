import React from "react";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_RECIPE } from "../../queries/index";
import LikeButton from "./LikerecipeButton";
import "./recipepage.css";
const RecipePage = ({ match, session }) => {
  const { _id } = match.params;
  const { loading, error, data } = useQuery(GET_RECIPE, {
    variables: { _id }
  });
  if (loading) return <p>Loading ..</p>;
  if (loading) return <p>error </p>;

  return (
    <div id="reciepe-page" className="d-flex justify-content-center">
      <div className="dark-overlay"></div>
      <div className="row align-self-center">
        <div className="card cardbackgroundcolor text-center card-form ">
          <div className="card-body text-left ">
            <div className="row border ">
              <div className="col">
                <h2>Name </h2>
              </div>
              <div className="col ">
                <h2>{data.getRecipe.name}</h2>
              </div>
            </div>

            <div className="row border">
              <div className="col">
                <h2>Category </h2>
              </div>
              <div className="col">
                <h2> {data.getRecipe.category}</h2>
              </div>
            </div>

            <div className="row border">
              <div className="col">
                <h2>Description </h2>
              </div>
              <div className="col">
                <h2>{data.getRecipe.description}</h2>
              </div>
            </div>

            <div className="row border">
              <div className="col">
                <h2>Instruction </h2>
              </div>
              <div className="col ">
                <h2> {data.getRecipe.instruction}</h2>
              </div>
            </div>

            <div className="row border">
              <div className="col">
                <h2>Likes </h2>
              </div>
              <div className="col ">
                <h2>{data.getRecipe.likes}</h2>
              </div>
            </div>

            <div className="row border">
              <div className="col">
                <h2>Username :</h2>
              </div>
              <div className="col ">
                <h2> {data.getRecipe.username}</h2>
              </div>
            </div>

            {session.getCurrentUser && (
              <LikeButton
                username={data.getRecipe.username}
                _id={data.getRecipe._id}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RecipePage);

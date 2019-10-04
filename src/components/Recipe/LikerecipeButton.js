import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import WithSession from "../withSession";
import { LIKE_RECIPE, GET_RECIPE, GET_CURRENT_USER } from "../../queries/index";
const LikeRecipeButton = props => {
  const { username, favorites } = props.session.getCurrentUser;
  const [like, setlikorunlik] = useState(false);
  useEffect(() => {
    const prevlike =
      favorites.findIndex(favorite => favorite._id === props._id) > -1;
    setlikorunlik(prevlike);
  }, []);

  const [likeRecipe, { loading, error }] = useMutation(LIKE_RECIPE);
  const likeHandler = _id => {
    likeRecipe({
      variables: { _id, username, like },
      refetchQueries: [
        { query: GET_RECIPE, variables: { _id } },
        { query: GET_CURRENT_USER }
      ]
    }).then(data => {});
    setlikorunlik(!like);
  };

  return (
    <div>
      {" "}
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => likeHandler(props._id)}
      >
        {like ? "unlike" : "Like"}
      </button>
    </div>
  );
};
export default WithSession(LikeRecipeButton);

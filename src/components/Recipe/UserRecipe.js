import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  GET_USER_RECIPE,
  DELETE_USER_RECIPE,
  GET_ALL_RECIPES
} from "../../queries/index";
import { Link } from "react-router-dom";

const UserRecipe = ({ username }) => {
  const [deletUser, { deleteloading, dleteerror }] = useMutation(
    DELETE_USER_RECIPE,

    {
      update(
        cache,
        {
          data: { deleteUserRecipe }
        }
      ) {
        const { userReciepe } = cache.readQuery({
          query: GET_USER_RECIPE,
          variables: { username }
        });
        cache.writeQuery({
          query: GET_USER_RECIPE,
          variables: { username },
          data: {
            userReciepe: userReciepe.filter(recipe => {
              return recipe._id !== deleteUserRecipe._id;
            })
          }
        });
      }
    }
  );
  const deleteRecipeHandler = id => {
    const confirmDialof = window.confirm(
      "Are you sure you want to delete the recipe"
    );
    if (confirmDialof) {
      deletUser({
        variables: { _id: id },
        refetchQueries: [{ query: GET_ALL_RECIPES }]
      })
        .then(data => {
          console.log("delete user ");
        })
        .catch(err => console.log(dleteerror));
    }
  };
  const { loading, error, data } = useQuery(GET_USER_RECIPE, {
    variables: { username }
  });

  if (loading) return <p>Loading ..</p>;
  if (error) return <p>Errro</p>;

  return (
    <div className=" d-flex container flex-wrap ">
      <h3 style={{ color: "white" }}>{username}'s Recipies</h3>
      {data.userReciepe.map(data => {
        return (
          <div
            className="card mt-5 mr-1 "
            style={{
              width: "16.5rem",
              border: "#ADD8E6 3px solid"
            }}
            key={data._id}
          >
            <div className="card-header">{data.name}</div>
            <div className="card-body ">
              <h5 className="card-title">Descriptione</h5>
              <p className="card-text  text-primary  ">{data.description}</p>
              <div className="d-flex  justify-content-between card-footer bg-transparent border-primary ">
                <Link
                  to={`/recipes/${data._id}`}
                  className="btn btn-primary"
                  id="footerbutton"
                >
                  {data.name}
                </Link>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteRecipeHandler(data._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default UserRecipe;

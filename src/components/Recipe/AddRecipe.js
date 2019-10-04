import React, { useRef } from "react";
import {
  ADD_RECIEPE,
  GET_ALL_RECIPES,
  GET_USER_RECIPE
} from "../../queries/index";
import { useMutation } from "@apollo/react-hooks";
import { withRouter } from "react-router-dom";
const AddReciepe = ({ session, history }) => {
  const [addRecipe, { loading, error }] = useMutation(ADD_RECIEPE, {
    update(
      cache,
      {
        data: { addRecipe }
      }
    ) {
      const { getAllRecipe } = cache.readQuery({ query: GET_ALL_RECIPES });
      cache.writeQuery({
        query: GET_ALL_RECIPES,
        data: { getAllRecipe: [addRecipe, ...getAllRecipe] }
      });
    }
  });

  const nameRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const instructionsRef = useRef();

  const submitHandler = event => {
    event.preventDefault();
    const username = session.getCurrentUser.username;
    const name = nameRef.current.value;

    const category = categoryRef.current.value;
    const description = descriptionRef.current.value;
    const instruction = instructionsRef.current.value;

    addRecipe({
      variables: { name, category, description, instruction, username },
      refetchQueries: [{ query: GET_USER_RECIPE, variables: { username } }]
    })
      .then(async data1 => {
        document.getElementById("addRecipeform").reset();
        history.push("/");
      })
      .catch(err => console.log("this ", error));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col-md-5">
          <form onSubmit={submitHandler} id="addRecipeform">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                ref={nameRef}
                placeholder="name of recipe"
              ></input>
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className="custom-select my-1 mr-sm-2"
                ref={categoryRef}
                required
              >
                <option value="null">Choose...</option>
                <option value="BreakFast">BreakFast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snake">Snake</option>
              </select>
            </div>
            <div className="form-group">
              <label>Description</label>
              <input
                type="text"
                className="form-control"
                ref={descriptionRef}
                placeholder="Description"
              />
            </div>
            <div className="form-group">
              <label>instructions</label>
              <textarea
                type="text"
                className="form-control"
                ref={instructionsRef}
                placeholder="Description"
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(AddReciepe);

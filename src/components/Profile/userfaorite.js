import React from "react";
import { Link } from "react-router-dom";
const UserFavorite = ({ session }) => {
  return (
    <div className=" d-flex container flex-wrap ">
      {session.getCurrentUser.favorites.map(favorite => {
        return (
          <div
            class="card mt-5 mr-1 "
            style={{
              width: "16.5rem",
              border: "#ADD8E6 3px solid"
            }}
            key={favorite._id}
          >
            <div class="card-header">{favorite.name}</div>
            <div class="card-body ">
              <h5 class="card-title">Descriptione</h5>
              <p class="card-text  text-primary  ">{favorite.description}</p>
              <div class="card-footer bg-transparent border-primary ">
                <Link
                  to={`/recipes/${favorite._id}`}
                  className="btn btn-primary"
                  id="footerbutton"
                >
                  {favorite.name}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserFavorite;

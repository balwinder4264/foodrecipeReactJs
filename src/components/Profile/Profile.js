import React from "react";
import UserInfo from "./userinfo/userInfo";
import UserRecipe from "../Recipe/UserRecipe";
import UserFavorite from "./userfaorite";
const Profile = ({ session }) => {
  return (
    <div className="bg-dark">
      <div className="container dark-overlay">
        <div className="row">
          <div className="col" id="test">
            <UserInfo session={session} style={{ overflow: "hidden" }} />

            <div
              id="userfavorite"
              className="show collapse"
              data-parent="#test"
            >
              <UserFavorite session={session} />
            </div>
            <div id="userrecipe" className="collapse" data-parent="#test">
              <UserRecipe username={session.getCurrentUser.username} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;

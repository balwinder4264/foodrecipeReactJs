import React from "react";
import "./userinfo.css";
import Portarait from "../../../assets/portrait.png";

const UserInfo = ({ session }) => {
  return (
    <div className="container">
      <header id="main-header" style={{ marginTop: "66px" }}>
        <div className="row no-gutters">
          <div className="col-lg-4 col-md-5 ">
            <img src={Portarait} alt=""></img>
          </div>
          <div className="col-lg-8 col-md-7">
            <div className="d-flex flex-column">
              <div className="p-5 bg-dark text-white">
                <div className="d-flex flex-row justify-content-between align-items-center ">
                  <h1 className="display-4">
                    {" "}
                    {session.getCurrentUser.username}
                  </h1>
                  <div className="d-none d-md-block">
                    <a href="http://twitter.com" className="text-white">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </div>

                  <div>
                    <a href="http://facebook.com" className="text-white">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </div>
                  <div>
                    <a href="http://instagram.com" className="text-white">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                  <div>
                    <a href="http://github.com" className="text-white">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-black">
                Add something interesting about you
              </div>

              <div>
                <div className="d-flex flex-row text-white align-items-stretch text-center">
                  <div
                    className="port-item p-4 bg-primary"
                    data-toggle="collapse"
                    data-target="#userrecipe"
                  >
                    <i className="fas fa-home fa-2x d-block"></i>
                    <span className="d-none d-sm-block"> My Recipie </span>
                  </div>
                  <div
                    className="port-item p-4 bg-success"
                    data-toggle="collapse"
                    data-target="#userfavorite"
                  >
                    <i className="fas fa-graduation-cap fa-2x d-block"></i>
                    <span className="d-none d-sm-block">Favorits</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default UserInfo;

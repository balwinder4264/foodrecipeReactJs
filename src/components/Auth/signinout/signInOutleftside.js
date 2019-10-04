import React from "react";
import "./signinout.css";
import SignInOut from "../signIn";
const Home = props => {
  return (
    <header id="home-section">
      <div className="dark-overlay">
        <div className="home-inner container">
          <div className="row">
            <div className="col-lg-8 d-none d-lg-block">
              <h1 className="display-4">
                <strong>Build social profile</strong> and gain revenue
                <strong>profiits</strong>
              </h1>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  ccek it out if thi sis working than t will be great deal for
                  me
                </div>
              </div>

              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x"></i>
                </div>
                <div className="p-4 align-self-end">
                  ccek it out if thi sis working than t will be great deal for
                  me
                </div>
              </div>
            </div>
            <SignInOut refetch={props.refetch} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;

import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import SignOut from "../Auth/signout";

const MainNavBar = ({ session }) => {
  return (
    <div style={{ paddingBottom: "60px" }}>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark fixed-top">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            Food
          </NavLink>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {session.getCurrentUser ? (
              <NavBarAuth session={session} />
            ) : (
              <UnAuthUser />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
const UnAuthUser = () => {
  return (
    <ul
      className="navbar-nav ml-auto"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <li className="nav-item">
        <NavLink to="/home" className="nav-link ">
          SignIn
        </NavLink>
      </li>

      <li className="nav-item">
        <NavLink to="/search" className="nav-link">
          Search
        </NavLink>
      </li>
    </ul>
  );
};

const NavBarAuth = ({ session }) => {
  return (
    <React.Fragment>
      <ul
        className="navbar-nav ml-auto"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <li className="nav-item ">
          <NavLink to="/recipe/add" className="nav-link">
            Add Reciepe
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to="/profile" className="nav-link">
            Profile
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/search" className="nav-link">
            Search
          </NavLink>
        </li>
      </ul>
      <SignOut session={session} />
    </React.Fragment>
  );
};

export default MainNavBar;

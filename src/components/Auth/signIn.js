import React, { useRef, useState, useEffect } from "react";

import { useMutation } from "@apollo/react-hooks";
import { SIGNIN_USER, SINGUP_USER } from "../../queries/index";
import classnames from "classnames";
import { withRouter } from "react-router-dom";

const SignIn = props => {
  const [displayerror, setdispalyerror] = useState(false);
  const [isLogin, setislogin] = useState(true);
  const switchModeHandler = () => {
    setislogin(!isLogin);
  };
  const [signInUser, { loading, error }] = useMutation(SIGNIN_USER);
  const [addUser, { adduserloading, addusererror }] = useMutation(SINGUP_USER);
  const PasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const EmailRef = useRef(null);
  const consfirmPasswordRef = useRef(null);
  const submitHandler = event => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const password = PasswordRef.current.value;

    if (isLogin) {
      signInUser({ variables: { username, password } })
        .then(async data1 => {
          localStorage.setItem("token", data1.data.signinUser.token);
          await props.refetch();
          usernameRef.current.value = "";
          PasswordRef.current.value = "";
          props.history.push("/");
        })
        .catch(error => {
          console.log(error);
          setdispalyerror(true);
        });
    } else {
      const email = EmailRef.current.value;
      if (password !== consfirmPasswordRef.current.value) {
        alert("password does not match");
      }
      addUser({ variables: { username, email, password } })
        .then(async data1 => {
          localStorage.setItem("token", data1.data.signupUser.token);
          await props.refetch();
          usernameRef.current.value = "";
          EmailRef.current.value = "";
          PasswordRef.current.value = "";
          props.history.push("/");
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="col-lg-4">
      <div className="card bg-primary text-center card-form">
        <div className="card-body">
          <h3>{isLogin ? "Login" : "Sign Up Today"}</h3>
          <p>{!isLogin && "Please fill out this form to register"}</p>
          <form onSubmit={submitHandler}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Username"
                className="form -control form-control-lg"
                ref={usernameRef}
                onFocus={() => setdispalyerror(false)}
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <input
                  type="email"
                  className="form -control form-control-lg"
                  placeholder="Email"
                  ref={EmailRef}
                />
              </div>
            )}
            <div className="form-group">
              <input
                type="password"
                className="form -control form-control-lg"
                placeholder="Password"
                ref={PasswordRef}
              />
            </div>
            {!isLogin && (
              <div className="form-group">
                <input
                  type="password"
                  className="form -control form-control-lg"
                  placeholder="Confirm Password"
                  ref={consfirmPasswordRef}
                />
              </div>
            )}

            {displayerror && (
              <span className="bg-light text-danger">
                Wrong passord or user name{" "}
              </span>
            )}
            <div className="d-flex bd-highlight ">
              <button
                type="button"
                onClick={switchModeHandler}
                className="btn btn-outline-light btn-block align-self-end"
              >
                Switch to {isLogin ? "SignUp" : "Login"}
              </button>
              <button
                type="submit"
                className="btn btn-outline-light btn-block"
                disabled={loading}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default withRouter(SignIn);

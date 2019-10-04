import React, { useRef, useState, useEffect } from "react";
import { Form, Button, Row, Alert } from "react-bootstrap";
import { useMutation } from "@apollo/react-hooks";
import { SINGUP_USER } from "../../queries/index";
import classnames from "classnames";

import { withRouter } from "react-router-dom";
const SignUp = props => {
  const [addUser, { loading, error }] = useMutation(SINGUP_USER);
  const EmailRef = useRef(null);
  const PasswordRef = useRef(null);
  const consfirmPasswordRef = useRef(null);
  const usernameRef = useRef(null);
  const submitHandler = event => {
    event.preventDefault();

    const username = usernameRef.current.value;
    const email = EmailRef.current.value;
    const password = PasswordRef.current.value;
    addUser({ variables: { username, email, password } }).then(async data1 => {
      localStorage.setItem("token", data1.data.signupUser.token);
      await props.refetch();
      usernameRef.current.value = "";
      EmailRef.current.value = "";
      PasswordRef.current.value = "";
      props.history.push("/");
    });
  };

  return (
    <div className="container" id="home-section">
      <Row className="justify-content-md-center">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label
              className={classnames({
                "text-danger": error
              })}
            >
              UserName
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter email"
              ref={usernameRef}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              ref={EmailRef}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              ref={PasswordRef}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicconfirmPassword">
            <Form.Label>confirmPassword</Form.Label>
            <Form.Control
              type="password"
              placeholder="ConfirmPassword"
              ref={consfirmPasswordRef}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" disabled={loading}>
            Submit
          </Button>
        </Form>
      </Row>
    </div>
  );
};
export default withRouter(SignUp);

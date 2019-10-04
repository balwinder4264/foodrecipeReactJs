import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import MainNavBar from "./components/Navbar/navbar";

import SearchRecipe from "./components/Recipe/SearchRecipe";
import Profile from "./components/Profile/Profile";
import AddRecipe from "./components/Recipe/AddRecipe";
import ReciepePage from "./components/Recipe/RecipePage";
import App from "./components/App";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import withSession from "./components/withSession";
import Home from "./components/Auth/signinout/signInOutleftside";
const client = new ApolloClient({
  uri: "https://internationalfoodmarket.herokuapp.com/",
  fetchOptions: {
    credentials: "include"
  },
  request: opration => {
    const token = localStorage.getItem("token");

    opration.setContext({
      headers: {
        authorization: token
      }
    });
  },
  onError: ({ networkWrror }) => {
    if (networkWrror) {
      console.log(" network error ", networkWrror);
    }
  }
});
const Root = ({ refetch, session }) => {
  return (
    <Router>
      <MainNavBar session={session} />

      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/home" render={() => <Home refetch={refetch} />} />
        <Route path="/search" component={SearchRecipe} />
        {session.getCurrentUser && (
          <Route path="/profile" render={() => <Profile session={session} />} />
        )}
        {session.getCurrentUser && (
          <Route
            path="/recipe/add"
            render={() => <AddRecipe session={session} />}
          />
        )}

        <Route
          path="/recipes/:_id"
          render={() => <ReciepePage session={session} />}
        />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
};
const RootWithSession = withSession(Root);
ReactDOM.render(
  <ApolloProvider client={client}>
    <RootWithSession />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

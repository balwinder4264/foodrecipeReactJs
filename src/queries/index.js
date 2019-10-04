import { gql } from "apollo-boost";
//reciepies queriie
export const GET_ALL_RECIPES = gql`
  query {
    getAllRecipe {
      _id
      name
      category
      description
      instruction
      createdDate
      likes
      username
    }
  }
`;

export const GET_RECIPE = gql`
  query($_id: ID!) {
    getRecipe(_id: $_id) {
      _id
      name
      category
      description
      instruction
      likes
      createdDate
      username
    }
  }
`;
export const SEARCH_RECIPES = gql`
  query($searchItem: String) {
    searchRecipe(searchItem: $searchItem) {
      _id
      name
      category
      description
      likes
    }
  }
`;

export const GET_USER_RECIPE = gql`
  query($username: String!) {
    userReciepe(username: $username) {
      _id
      name
      category
      description
      likes
    }
  }
`;
//recipies mutations

export const ADD_RECIEPE = gql`
  mutation(
    $name: String!
    $category: String!
    $description: String!
    $instruction: String!
    $username: String!
  ) {
    addRecipe(
      name: $name
      category: $category
      description: $description
      instruction: $instruction
      username: $username
    ) {
      _id
      name
      category
      description
      instruction
      createdDate
      likes
      username
    }
  }
`;

export const DELETE_USER_RECIPE = gql`
  mutation($_id: ID!) {
    deleteUserRecipe(_id: $_id) {
      _id
    }
  }
`;
export const LIKE_RECIPE = gql`
  mutation($_id: ID!, $username: String!, $like: Boolean) {
    likeRecipe(_id: $_id, username: $username, like: $like) {
      _id
      likes
    }
  }
`;
//mutation queriies
//Querries user
export const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      username
      joinDate
      email
      favorites {
        _id
        name
      }
    }
  }
`;
//mutation  user
export const SIGNIN_USER = gql`
  mutation($username: String!, $password: String!) {
    signinUser(username: $username, password: $password) {
      token
    }
  }
`;
export const SINGUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signupUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

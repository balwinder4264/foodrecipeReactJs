import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_ALL_RECIPES } from "../queries/index";
import ReacipeItem from "./Recipe/ReciepeItem";

const App = () => {
  const { loading, error, data } = useQuery(GET_ALL_RECIPES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <ReacipeItem recipe={data} />;
};

export default App;

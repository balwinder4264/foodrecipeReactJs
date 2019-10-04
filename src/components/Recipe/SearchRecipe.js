import React, { useState } from "react";
import { ApolloConsumer } from "@apollo/react-hooks";
import { SEARCH_RECIPES } from "../../queries/index";
import SearchItem from "./serachitems";
const Search = () => {
  const [serchItems, setSearchItems] = useState([]);

  return (
    <ApolloConsumer>
      {client => (
        <div className="container mt-1">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            onChange={async event => {
              event.persist();
              const { data, loading, errors } = await client.query({
                query: SEARCH_RECIPES,
                variables: { searchItem: event.target.value }
              });
              if (loading) return <p>Loading...</p>;
              if (errors) return alert("Errror in searching");
              setSearchItems(data.searchRecipe);
            }}
          ></input>

          <ul className="list-group">
            {serchItems.map(data => {
              return <SearchItem key={data._id} {...data} />;
            })}
          </ul>
        </div>
      )}
    </ApolloConsumer>
  );
};
export default Search;

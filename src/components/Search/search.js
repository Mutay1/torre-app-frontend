import * as React from "react";
import "twin.macro";

import Button from "../Button/button";
import { SearchContainer, SearchBar, SearchInput } from "./styles";


const Search = ({ onSubmit, initialValue = "", placeholder }) => {
  const [searchTerm, setSearchTerm] = React.useState(initialValue);

  return (
    <SearchContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!(searchTerm.length > 0) || !(searchTerm.split(" ").join("").length > 0)) {
            return;
          }
          onSubmit(searchTerm);
        }}
      >
        <SearchBar>
          <SearchInput
            type="text"
            placeholder={placeholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button tw="rounded-full mt-0" as="button">
            Search
          </Button>
        </SearchBar>
      </form>
    </SearchContainer>
  );
};

export default Search
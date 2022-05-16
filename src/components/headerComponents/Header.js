import React from "react";
import SearchBar from "../searchBar/SearchBar";
import Details from "./Details";

const Header = () => {
  return (
    <div className="w-full flex  items-center justify-between headerShadow pl-8 h-14 bg-white">
      {/* search bar  */}
      <SearchBar />

      {/* details */}
      <Details />
    </div>
  );
};

export default Header;

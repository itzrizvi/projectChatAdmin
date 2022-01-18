import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./SearchForHelp.css";

const SearchForHelp = () => {
  const searchIcon = (
    <FontAwesomeIcon icon={faSearch} className="fas fa-camera fa-lg" />
  );
  return (
    <div className="container search-for-help">
      <h5 className="search-help-title">Search for help</h5>
      <div className="search-help-form">
        <button
          className="search-btn shadow-none"
          type="button"
          id="button-addon1"
        >
          {searchIcon}
        </button>
        <input
          type="text"
          className="shadow-none"
          aria-label="Example text with button addon"
          aria-describedby="button-addon1"
          placeholder="Search Articles..."
        />
      </div>
    </div>
  );
};

export default SearchForHelp;

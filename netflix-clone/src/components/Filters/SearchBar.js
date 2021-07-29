import React from "react";
import { FaTimesCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import "../../css/filters.css";
function SearchBar() {
  return (
    <div className="filters__display__search-bar">
      <button
        className="filters__display__search-bar__clear-button"
        //   onClick={handleClearButtonClick}
      >
        <FaTimesCircle className="filters__display__search-bar__clear-button__icon" />
      </button>
      <input
        type="text"
        //   value={searchWord}
        //   ref={searchRef}
        //   onChange={handleChange}
        placeholder={"Search a Show"}
        className="filters__display__search-bar__input-field"
        //   onKeyDown={handleKeyDown}
      />
      <button
        className="filters__display__search-bar__search-button"
        //   onClick={handleSearchButtonClick}
      >
        <AiOutlineSearch className="filters__display__search-bar__search-button__icon" />
      </button>
    </div>
  );
}

export default SearchBar;

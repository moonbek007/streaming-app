import React from "react";
import { connect, useDispatch } from "react-redux";
import "../../../css/searchResults.css";
import SearchResult from "./SearchResult";
function SearchResults({
  notifications,
  showNotifications,
  isLoggedIn,
  searchWord,
  searchResults,
}) {
  const dispatch = useDispatch();
  return (
    <div
      className={`search-results ${
        searchWord.length > 0 ? "search-results-open" : ""
      }`}
    >
      <SearchResult />
      <SearchResult />
      <SearchResult />
      <SearchResult />
    </div>
  );
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  showNotifications: state.showNotifications,
  isLoggedIn: state.isLoggedIn,
  searchWord: state.searchWord,
  searchResults: state.searchResults,
});

export default connect(mapStateToProps)(SearchResults);

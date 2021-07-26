import React from "react";
import { FaStar } from "react-icons/fa";
import { connect, useDispatch } from "react-redux";
import "../../../css/searchResults.css";
import SearchResult from "./SearchResult";
function SearchResults({ notifications, showNotifications, isLoggedIn }) {
  const dispatch = useDispatch();
  return (
    <div className={`search-results ${"s" ? "search-results-open" : ""}`}>
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
});

export default connect(mapStateToProps)(SearchResults);

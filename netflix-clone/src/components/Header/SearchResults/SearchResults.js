import React from "react";
import { connect, useDispatch } from "react-redux";
import "../../../css/searchResults.css";
import SearchResult from "./SearchResult";
function SearchResults({ searchWord, searchResults }) {
  const dispatch = useDispatch();
  return (
    <div
      className={`search-results ${
        searchWord.length > 0 ? "search-results-open" : ""
      }`}
    >
      {searchResults.map((item) => {
        return (
          <SearchResult
            image={item.image.medium}
            genres={item.genres}
            year={item.premiered}
            description={item.summary}
            link={item.url}
            name={item.name}
            rating={item?.rating?.average ?? "N/A"}
            key={item.id}
            status={item.status}
          />
        );
      })}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notifications: state.notifications,
  showNotifications: state.showNotifications,
  isLoggedIn: state.isLoggedIn,
  searchWord: state.searchWord,
  searchResults: state.filteredShows,
});

export default connect(mapStateToProps)(SearchResults);

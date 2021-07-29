import React from "react";
import "../../css/filters.css";
import SearchBar from "./SearchBar";
import FilterResult from "./FilterResult";
import FiltersAll from "./FiltersColumn";
import { connect, useDispatch } from "react-redux";
function Filters({ shows }) {
  return (
    <div className="filters">
      <div className="filters__display">
        <SearchBar />

        <FiltersAll />
        <div className="filters__display__results">
          {shows
            ? shows.map((show) => {
                return (
                  <FilterResult
                    image={show.image.medium}
                    key={show.id}
                    link={show.url}
                    name={show.name}
                  />
                );
              })
            : ""}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ shows: state.filteredShows });

export default connect(mapStateToProps)(Filters);

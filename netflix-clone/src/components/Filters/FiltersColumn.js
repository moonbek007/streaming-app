import React from "react";
import { useDispatch } from "react-redux";
function FiltersColumn() {
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({
    status: [{ Running: false }, { Ended: false }],
    language: [{ English: false }, { Japanese: false }],
    type: [
      { Scripted: false },
      { Animation: false },
      { "Talk Show": false },
      { Reality: false },
      { Documentary: false },
    ],
    country: [
      { "United States": false },
      { Canada: false },
      { Japan: false },
      { "United Kingdom": false },
      { France: false },
    ],
    rating: "",
  });
  return (
    <div className="filters__row-filters">
      <div>
        <h1>Status</h1>
        <label htmlFor="running">
          <input
            type="checkbox"
            name="status"
            id="running"
            value="Running"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Running
        </label>
        <label htmlFor="ended">
          <input
            type="checkbox"
            name="status"
            id="ended"
            value="Ended"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Ended
        </label>
      </div>
      <div>
        <h1>Language</h1>
        <label htmlFor="english">
          <input
            type="checkbox"
            name="language"
            id="english"
            value="English"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          English
        </label>
        <label htmlFor="japanese">
          <input
            type="checkbox"
            name="language"
            id="japanese"
            value="Japanese"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Japanese
        </label>
      </div>
      <div>
        <h1>Type</h1>
        <label htmlFor="scripted">
          <input
            type="checkbox"
            name="type"
            id="scripted"
            value="Scripted"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Scripted
        </label>
        <label htmlFor="animation">
          <input
            type="checkbox"
            name="type"
            id="animation"
            value="Animation"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Animation
        </label>
        <label htmlFor="talkShow">
          <input
            type="checkbox"
            name="type"
            id="talkShow"
            value="Talk Show"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Talk Show
        </label>
        <label htmlFor="reality">
          <input
            type="checkbox"
            name="type"
            id="reality"
            value="Reality"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Reality
        </label>
        <label htmlFor="documentary">
          <input
            type="checkbox"
            name="type"
            id="documentary"
            value="Documentary"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Documentary
        </label>
      </div>
      <div>
        <h1>Country</h1>
        <label htmlFor="us">
          <input
            type="checkbox"
            name="country"
            id="us"
            value="United States"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          USA
        </label>
        <label htmlFor="canada">
          <input
            type="checkbox"
            name="country"
            id="canada"
            value="Canada"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Canada
        </label>
        <label htmlFor="japan">
          <input
            type="checkbox"
            name="country"
            id="japan"
            value="Japan"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          Japan
        </label>
        <label htmlFor="uk">
          <input
            type="checkbox"
            name="country"
            id="uk"
            value="United Kingdom"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          UK
        </label>
        <label htmlFor="france">
          <input
            type="checkbox"
            name="country"
            id="france"
            value="France"
            onChange={(event) => {
              setFilters({
                ...filters,
                [event.target.name]: toggleFilter(
                  filters,
                  event.target.value,
                  event.target.checked,
                  event.target.name
                ),
              });
            }}
          />
          France
        </label>
      </div>
      <div>
        <h1>Rating</h1>
        <label htmlFor="5+">
          <input
            type="radio"
            name="rating"
            id="5+"
            value="5+"
            onChange={(event) => {
              setFilters({
                ...filters,
                rating: event.target.value,
              });
            }}
          />
          5+
        </label>
        <label htmlFor="6+">
          <input
            type="radio"
            name="rating"
            id="6+"
            value="6+"
            onChange={(event) => {
              setFilters({
                ...filters,
                rating: event.target.value,
              });
            }}
          />
          6+
        </label>
        <label htmlFor="7+">
          <input
            type="radio"
            name="rating"
            id="7+"
            value="7+"
            onChange={(event) => {
              setFilters({
                ...filters,
                rating: event.target.value,
              });
            }}
          />
          7+
        </label>
        <label htmlFor="8+">
          <input
            type="radio"
            name="rating"
            id="8+"
            value="8+"
            onChange={(event) => {
              setFilters({
                ...filters,
                rating: event.target.value,
              });
            }}
          />
          8+
        </label>
        <label htmlFor="9+">
          <input
            type="radio"
            name="rating"
            id="9+"
            value="9+"
            onChange={(event) => {
              setFilters({
                ...filters,
                rating: event.target.value,
              });
            }}
          />
          9+
        </label>
      </div>
      <button
        className="apply-button"
        onClick={() => {
          dispatch({ type: "ADD_FILTERS", payload: filters });
        }}
      >
        Apply
      </button>
    </div>
  );
}

export default FiltersColumn;

const toggleFilter = (filters, filterName, filterValue, filterType) => {
  let particularFilter = filters[filterType];
  for (let i = 0; i < particularFilter.length; i++) {
    if (particularFilter[i].hasOwnProperty(filterName)) {
      particularFilter[i][filterName] = filterValue;
      break;
    }
  }
  return particularFilter;
};

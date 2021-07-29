import { createStore } from "redux";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NOTIFICATIONS":
      return { ...state, showNotifications: !state.showNotifications };
    case "GET_ALL_SHOWS":
      console.log(action.payload);
      return {
        ...state,
        shows: action.payload,
        filteredShows: action.payload,
      };
    case "CHANGE_ACTIVE_LINK":
      console.log(`changing link to ${action.payload}`);
      return state;
    case "SET_SEARCH_WORD":
      const regex = new RegExp(`${action.payload}`);
      let newFilteredShows = [];
      for (let i = 0; i < state.shows.length; i++) {
        if (regex.test(state.shows[i].name)) {
          newFilteredShows.push(state.shows[i]);
        }
      }
      return {
        ...state,
        searchWord: action.payload,
        filteredShows: newFilteredShows,
      };
    case "CLEAR_SEARCH_WORD":
      return { ...state, searchWord: "", searchResults: [] };
    case "ADD_FILTERS":
      return {
        ...state,
        filteredShows: addFilters(state.shows, action.payload),
      };
    default:
      return state;
  }
};

const state = {
  isLoggedIn: true,
  activeLink: "login",
  favourites: [],
  friends: [],
  notifications: [],
  showNotifications: false,
  shows: [],
  filteredShows: [],
  searchWord: "",
  searchResults: [],
  showsByGenre: {},
  showFriends: false,
};

const store = createStore(reducer, state);

export default store;

const addFilters = (shows, filters) => {
  const filterTypes = ["status", "language", "type", "country"];
  let newShows = [];
  let filtersToApply = {};
  let foundFilters = {};
  for (let i = 0; i < filterTypes.length; i++) {
    for (let k = 0; k < filters[filterTypes[i]].length; k++) {
      const key = Object.keys(filters[filterTypes[i]][k])[0];
      if (filters[filterTypes[i]][k][key]) {
        if (foundFilters[filterTypes[i]] === 1) {
          filtersToApply[filterTypes[i]].push(key);
        } else {
          foundFilters[filterTypes[i]] = 1;
          filtersToApply[filterTypes[i]] = [key];
        }
      }
    }
  }
  if (filters.rating.length > 0) {
    filtersToApply.rating = filters.rating[0];
    foundFilters.rating = filters.rating[0];
  }
  for (let filter in filtersToApply) {
    // console.log("applying filter ", filter);
    let temporaryShows = [];
    if (typeof filtersToApply[filter] !== "string") {
      for (let k = 0; k < filtersToApply[filter].length; k++) {
        const showsAfterOneFilterAdded = addOneFilter(
          filter,
          filtersToApply[filter][k],
          shows
        );
        // console.log(
        //   showsAfterOneFilterAdded.length,
        //   filter,
        //   filtersToApply[filter][k]
        // );
        temporaryShows = [...temporaryShows, ...showsAfterOneFilterAdded];
      }
      newShows = unionShows(newShows, temporaryShows);
    } else {
      const showsAfterOneFilterAdded = addOneFilter(
        "rating",
        filtersToApply.rating,
        shows
      );
      newShows = unionShows(newShows, showsAfterOneFilterAdded);
    }
  }
  // console.log(newShows.length);
  return newShows;
};

const addOneFilter = (filterName, filterValue, shows) => {
  let newShows = [];
  for (let i = 0; i < shows.length; i++) {
    const show = shows[i];
    if (filterName === "country") {
      if ((show?.network?.country?.name ?? null) === filterValue) {
        newShows.push(show);
      }
    } else if (filterName === "rating") {
      if ((show?.rating?.average ?? null) >= filterValue) {
        newShows.push(show);
      }
    } else {
      if (show[filterName] === filterValue) {
        newShows.push(show);
      }
    }
  }
  return newShows;
};

const isTheSameShow = (shows, show) => {
  let found = false;
  for (let i = 0; i < shows.length; i++) {
    if (shows[i].name === show.name) {
      found = true;
      break;
    }
  }
  return found;
};

const unionShows = (newShows, temporaryShows) => {
  let showsInCommon = [];
  if (newShows.length === 0) {
    return temporaryShows;
  } else {
    for (let i = 0; i < newShows.length; i++) {
      if (isTheSameShow(temporaryShows, newShows[i])) {
        showsInCommon.push(newShows[i]);
      }
    }
  }
  return showsInCommon;
};

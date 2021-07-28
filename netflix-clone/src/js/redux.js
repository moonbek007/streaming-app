import { createStore } from "redux";
const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NOTIFICATIONS":
      return { ...state, showNotifications: !state.showNotifications };
    case "GET_ALL_SHOWS":
      console.log(action.payload);
      return { ...state, shows: action.payload };
    case "CHANGE_ACTIVE_LINK":
      console.log(`changing link to ${action.payload}`);
      return state;
    case "SET_SEARCH_WORD":
      return { ...state, searchWord: action.payload };
    case "CLEAR_SEARCH_WORD":
      return { ...state, searchWord: "", searchResults: [] };
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
};

const store = createStore(reducer, state);

export default store;

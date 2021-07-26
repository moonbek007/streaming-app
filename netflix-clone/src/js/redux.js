import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NOTIFICATIONS":
      return { ...state, showNotifications: !state.showNotifications };
    case "GET_ALL_SHOWS":
      console.log(action.payload);
      return { ...state, shows: action.payload };
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
};

const store = createStore(reducer, state);

export default store;
